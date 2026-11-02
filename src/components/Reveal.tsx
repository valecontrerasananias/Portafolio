import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

/* Devuelve [ref, visible]: visible pasa a true la primera vez que el elemento entra en pantalla.
   Con "reducir movimiento" activo, el contenido se muestra de inmediato. */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, shown] as const;
}

/* Aparece con fade + desplazamiento hacia arriba al entrar en pantalla.
   `delay` (ms) escalona elementos hermanos, por ejemplo delay={i * 120}. */
export default function Reveal({ children, delay = 0, ...rest }: { children: ReactNode; delay?: number } & BoxProps) {
  const [ref, shown] = useInView<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      opacity={shown ? 1 : 0}
      transform={shown ? "none" : "translateY(28px)"}
      transition="opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
      transitionDelay={`${delay}ms`}
      {...rest}
    >
      {children}
    </Box>
  );
}
