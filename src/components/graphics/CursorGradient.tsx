import { useEffect, useState } from "react";

const CursorGradient = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const style: React.CSSProperties = {
    background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, hsl(var(--brand) / 0.15), transparent 60%)`,
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-70 transition-opacity duration-300 ease-out [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]"
      style={style}
    />
  );
};

export default CursorGradient;
