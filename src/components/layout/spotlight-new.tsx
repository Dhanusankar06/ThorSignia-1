"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Linear interpolation helper function
function lerp(start: number, end: number, amt: number): number {
  return (1 - amt) * start + amt * end;
}

export function Spotlight({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) {
  const mousePosition = React.useRef({ x: 0, y: 0 });
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = divRef.current;
    if (!div) return;

    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mousePosition.current = { x, y };
  };

  React.useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const animate = () => {
      const { x, y } = mousePosition.current;
      const newX = lerp(position.x, x, 0.1);
      const newY = lerp(position.y, y, 0.1);
      setPosition({ x: newX, y: newY });
      requestAnimationFrame(animate);
    };

    animate();
  }, [position.x, position.y]);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "h-full w-full absolute inset-0 [--spotlight-size:300px] lg:[--spotlight-size:600px]",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(var(--spotlight-size) circle at ${position.x}px ${position.y}px, rgba(136, 191, 66, 0.1), transparent 80%)`,
        }}
      />
    </motion.div>
  );
}


