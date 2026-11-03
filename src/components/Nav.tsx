import { useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

/* Reemplaza los "#" de Linkedin y CV por las URLs reales */
const links = [
  { href: "#top", label: "Home" },
  { href: "#siguiente", label: "Casos de estudio" },
  { href: "#", label: "Linkedin", external: true },
  { href: "#", label: "CV", external: true },
];

const linkProps = { color: "app.muted", _hover: { color: "app.fg", textDecoration: "none" } };

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="whiteAlpha.900" backdropFilter="blur(8px)" boxShadow="0 2px 14px rgba(0,0,0,0.07)">
      <Flex as="nav" maxW="6xl" mx="auto" px="6" h="14" align="center" justify="space-between">
        <Link href="#top" whiteSpace="nowrap" textStyle="bodyMedium" color="app.fg" _hover={{ textDecoration: "none" }}>
          Valentina Contreras
        </Link>

        {/* Tablet y escritorio: enlaces en línea */}
        <Flex display={{ base: "none", md: "flex" }} gap="6" textStyle="footnote" whiteSpace="nowrap">
          {links.map((l) => (
            <Link key={l.label} href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noopener noreferrer" : undefined} {...linkProps}>
              {l.label}
            </Link>
          ))}
        </Flex>

        {/* Móvil: botón de menú */}
        <Box
          as="button"
          display={{ base: "flex", md: "none" }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          p="2"
          mr="-2"
          color="app.fg"
          cursor="pointer"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Box>
      </Flex>

      {open && (
        <Flex display={{ base: "flex", md: "none" }} direction="column" gap="1" px="6" pb="4" textStyle="body" borderTopWidth="1px" borderColor="app.border">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              py="2"
              {...linkProps}
            >
              {l.label}
            </Link>
          ))}
        </Flex>
      )}
    </Box>
  );
}
