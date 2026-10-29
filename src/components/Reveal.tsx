import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

export default function Reveal({ children, ...rest }: { children: ReactNode } & BoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      opacity={shown ? 1 : 0}
      transform={shown ? "none" : "translateY(16px)"}
      transition="opacity 0.5s ease, transform 0.5s ease"
      {...rest}
    >
      {children}
    </Box>
  );
}
