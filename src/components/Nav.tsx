import { Box, Flex, Link } from "@chakra-ui/react";

const links = [
  { href: "#top", label: "Caso de estudio" },
  { href: "#aprendizajes", label: "Aprendizajes" },
];

export default function Nav() {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="whiteAlpha.900" backdropFilter="blur(8px)" borderBottomWidth="1px" borderColor="app.border">
      <Flex as="nav" maxW="6xl" mx="auto" px="6" h="14" align="center" justify="space-between">
        <Link href="#top" whiteSpace="nowrap" textStyle="bodyMedium" color="app.fg" _hover={{ textDecoration: "none" }}>
          Tu nombre
        </Link>
        <Flex gap={{ base: 4, md: 6 }} textStyle="footnote" whiteSpace="nowrap">
          {links.map((l, i) => (
            <Link key={l.href} display={i === 0 ? { base: "none", sm: "inline" } : undefined} href={l.href} color="app.muted" _hover={{ color: "app.fg", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
