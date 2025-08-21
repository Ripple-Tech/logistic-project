"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
//680f916f66d81b12193e46c9
export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !inputRef.current) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);

    const styles = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(styles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${styles.fontFamily}`;
    ctx.fillStyle = "#fff";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800).data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (imageData[e] || imageData[e + 1] || imageData[e + 2]) {
          newData.push({
            x: n,
            y: t,
            color: `rgba(${imageData[e]}, ${imageData[e + 1]}, ${imageData[e + 2]}, ${imageData[e + 3]})`,
            r: 1,
          });
        }
      }
    }

    newDataRef.current = newData;
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos = 0) => {
      requestAnimationFrame(() => {
        const ctx = canvasRef.current?.getContext("2d");
        const newArr = [];

        for (const particle of newDataRef.current) {
          if (particle.x < pos) {
            newArr.push(particle);
          } else {
            if (particle.r <= 0) continue;
            particle.x += Math.random() > 0.5 ? 1 : -1;
            particle.y += Math.random() > 0.5 ? 1 : -1;
            particle.r -= 0.05 * Math.random();
            newArr.push(particle);
          }
        }

        newDataRef.current = newArr;

        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          for (const p of newDataRef.current) {
            if (p.x > pos) {
              ctx.beginPath();
              ctx.rect(p.x, p.y, p.r, p.r);
              ctx.fillStyle = p.color;
              ctx.strokeStyle = p.color;
              ctx.stroke();
            }
          }
        }

        if (newDataRef.current.length > 0) animateFrame(pos - 8);
        else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();
    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full relative max-w-2xl mx-auto rounded-full overflow-hidden shadow-md transition duration-300 bg-white/90 dark:bg-zinc-800",
        "border-2 border-[#ff7011] focus-within:shadow-[0_0_0_4px_#ff7011]/30 focus-within:ring-2 focus-within:ring-[#ff7011]",
        value && "bg-[#ff7011]/10"
      )}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none transform scale-50 top-[20%] left-4 origin-top-left filter invert dark:invert-0",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />

      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange && onChange(e);
          }
        }}
        ref={inputRef}
        value={value}
        type="text"
        placeholder=""
        className={cn(
          "w-full text-sm sm:text-base z-10 bg-transparent dark:text-white text-black h-12 px-4 sm:px-10 rounded-full outline-none focus:ring-0",
          animating && "text-transparent dark:text-transparent"
        )}
      />

      {/* Track Button */}
      <button
        type="submit"
        disabled={!value}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-20 px-5 py-2 text-sm font-semibold rounded-full transition text-black",
          value
            ? "bg-[#ff7011] hover:bg-[#e8610f]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        )}
      >
        Track
      </button>

      {/* Animated Placeholder Text */}
      <div className="absolute inset-0 flex items-center pl-4 sm:pl-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base font-medium text-gray-400 dark:text-zinc-500 truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
