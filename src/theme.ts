import { createSystem, defaultConfig, defineConfig, defineTextStyles } from "@chakra-ui/react";

/* Tipografía del kit "DesignCode UI" (Inter, títulos Semi Bold con interlineado 100% y tracking negativo). */
const textStyles = defineTextStyles({
  h1: { value: { fontSize: "60px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.05em" } },
  h2: { value: { fontSize: "50px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  h3: { value: { fontSize: "40px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  h4: { value: { fontSize: "30px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  h5: { value: { fontSize: "24px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  mh1: { value: { fontSize: "40px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  mh2: { value: { fontSize: "30px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  mh3: { value: { fontSize: "28px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  mh4: { value: { fontSize: "24px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" } },
  headline: { value: { fontSize: "20px", fontWeight: "400", lineHeight: "30px" } },
  headlineMedium: { value: { fontSize: "20px", fontWeight: "500", lineHeight: "30px" } },
  bodyLg: { value: { fontSize: "18px", fontWeight: "400", lineHeight: "27px" } },
  bodyLgMedium: { value: { fontSize: "18px", fontWeight: "500", lineHeight: "27px" } },
  body: { value: { fontSize: "16px", fontWeight: "400", lineHeight: "24px" } },
  bodyMedium: { value: { fontSize: "16px", fontWeight: "500", lineHeight: "24px" } },
  footnote: { value: { fontSize: "14px", fontWeight: "400", lineHeight: "20px" } },
  footnoteMedium: { value: { fontSize: "14px", fontWeight: "500", lineHeight: "20px" } },
  caption: { value: { fontSize: "13px", fontWeight: "400", lineHeight: "20px" } },
  captionMedium: { value: { fontSize: "13px", fontWeight: "500", lineHeight: "20px" } },
  small: { value: { fontSize: "12px", fontWeight: "400", lineHeight: "18px" } },
  smallMedium: { value: { fontSize: "12px", fontWeight: "500", lineHeight: "18px" } },
});

/* Tokens equivalentes a los del diseño original (background, foreground, muted,
   subtle, border, surface, accent…), expresados como tokens semánticos de Chakra. */
const config = defineConfig({
  globalCss: {
    html: { scrollBehavior: "smooth" },
    body: { bg: "app.bg", color: "app.fg", fontFamily: "body" },
  },
  theme: {
    textStyles,
    tokens: {
      fonts: {
        heading: { value: "'Inter', system-ui, sans-serif" },
        display: { value: "'Inter', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" },
        mono: { value: "'Roboto Mono', ui-monospace, monospace" },
      },
      radii: { container: { value: "10px" } },
    },
    semanticTokens: {
      colors: {
        /* Paleta "Color Styles" del kit (modo claro + botón) */
        "app.bg": { value: "#ffffff" },
        "app.fg": { value: "#000000" }, // Foreground/primary
        "app.muted": { value: "#000000b2" }, // Foreground/secondary
        "app.subtle": { value: "#00000080" }, // Foreground/tertiary
        "app.border": { value: "#0000001a" }, // Container/divider
        "app.borderStrong": { value: "#00000033" },
        "app.surface": { value: "#f5f5f5" },
        "app.accent": { value: "#148ea9" }, // Button hover (texto/cifras con contraste)
        "app.accentSoft": { value: "#17d5ff1f" }, // Button al 12%
        "app.button": { value: "#17d5ff" },
        "app.buttonHover": { value: "#148ea9" },
        "app.buttonFg": { value: "#ffffff" },
        "app.buttonInactive": { value: "#646464" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
