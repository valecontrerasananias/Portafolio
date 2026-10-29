import { Box, Flex, Link } from "@chakra-ui/react";

const links = [
  { href: "#top", label: "Caso de estudio" },
  { href: "#aprendizajes", label: "Aprendizajes" },
  { href: "#siguiente", label: "Qué sigue" },
];

export default function Nav() {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="whiteAlpha.900" backdropFilter="blur(8px)" borderBottomWidth="1px" borderColor="app.border">
      <Flex as="nav" maxW="6xl" mx="auto" px="6" h="14" align="center" justify="space-between">
        <Link href="#top" textStyle="bodyMedium" color="app.fg" _hover={{ textDecoration: "none" }}>
          Tu nombre
        </Link>
        <Flex gap="6" textStyle="footnote">
          {links.map((l) => (
            <Link key={l.href} href={l.href} color="app.muted" _hover={{ color: "app.fg", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
