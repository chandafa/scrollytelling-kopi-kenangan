"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 240; 
const IMAGES_DIR = "/sequence/ezgif-frame-";

interface SequenceScrollProps {
  onLoad?: (progress: number) => void;
}

export function SequenceScroll({ onLoad }: SequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bitmaps, setBitmaps] = useState<ImageBitmap[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Extend scroll distance to 800vh for even smoother scrubbing with 240 frames
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (onLoad) onLoad(0); // Signal loading start

    const loadImages = async () => {
      const loadedBitmaps: ImageBitmap[] = new Array(FRAME_COUNT);
      let loadedCount = 0;

      const batchSize = 10;
      
      for (let i = 0; i < FRAME_COUNT; i += batchSize) {
        const batchPromises = [];
        for (let j = i; j < Math.min(i + batchSize, FRAME_COUNT); j++) {
           batchPromises.push((async () => {
              const frameIdx = j + 1; // 1-based files
              const paddedIndex = frameIdx.toString().padStart(3, "0");
              const src = `${IMAGES_DIR}${paddedIndex}.jpg`;
              
              try {
                const response = await fetch(src);
                const blob = await response.blob();
                const bitmap = await createImageBitmap(blob);
                loadedBitmaps[j] = bitmap;
              } catch (err) {
                console.warn(`Failed to load frame ${frameIdx}`, err);
              } finally {
                loadedCount++;
                if (onLoad) onLoad(Math.round((loadedCount / FRAME_COUNT) * 100));
              }
           })());
        }
        await Promise.all(batchPromises);
        await new Promise(r => setTimeout(r, 0)); 
      }

      setBitmaps(loadedBitmaps);
      setLoaded(true);
      if (onLoad) onLoad(100); // Signal loading complete
    };

    loadImages();
    
    return () => {
      bitmaps.forEach(bmp => bmp?.close());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderRef = useRef<number | null>(null);
  const currentFrameRef = useRef(-1);

  // Optimized render loop
  useEffect(() => {
    if (!loaded || !canvasRef.current || bitmaps.length === 0) return;

    const canvas = canvasRef.current;
    
    // Get context with optimizations
    const ctx = canvas.getContext("2d", { 
        alpha: false, // We don't need transparency, this speeds up compositing
        desynchronized: true // Hint to browser to reduce latency
    });
    
    if (!ctx) return;

    // Handle high-DPI screens intelligently. 
    // Full 4K rendering can be heavy. Cap it if necessary, but user asked for HD.
    // We'll use the native device pixel ratio for quality.
    const updateCanvasSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR at 2 to save performance on 3x screens

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        
        // Scale context to match DPR
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        // Force re-render after resize
        currentFrameRef.current = -1;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const render = () => {
      const index = currentIndex.get();
      const frameIndex = Math.max(0, Math.min(Math.round(index), FRAME_COUNT - 1));

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        const bitmap = bitmaps[frameIndex];

        if (bitmap) {
            // Calculated for "cover" fit
            // Use canvas.style.width/height (logical pixels) for calculation
            const canvasW = parseInt(canvas.style.width);
            const canvasH = parseInt(canvas.style.height);
            
            const imageRatio = bitmap.width / bitmap.height;
            const canvasRatio = canvasW / canvasH;
            
            let drawW, drawH, drawX, drawY;

            const safeScale = 1.05; // Zoom in 5% to crop artifacts
            
            if (canvasRatio > imageRatio) {
                drawW = canvasW * safeScale;
                drawH = (canvasW / imageRatio) * safeScale;
                drawX = (canvasW - drawW) / 2;
                drawY = (canvasH - drawH) / 2;
            } else {
                drawW = (canvasH * imageRatio) * safeScale;
                drawH = canvasH * safeScale;
                drawX = (canvasW - drawW) / 2;
                drawY = (canvasH - drawH) / 2;
            }
            
            // Draw image
            ctx.drawImage(bitmap, drawX, drawY, drawW, drawH);
        }
      }

      renderRef.current = requestAnimationFrame(render);
    };

    renderRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (renderRef.current) cancelAnimationFrame(renderRef.current);
    };
  }, [loaded, currentIndex, bitmaps]);


  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#1a1512]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        {/* Loader removed: Managed by parent */}
      </div>
    </div>
  );
}
