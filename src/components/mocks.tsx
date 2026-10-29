import type { ReactNode } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Bell, Check, ChevronRight, MessageCircle, Phone, Settings } from "lucide-react";

/* Maquetas ilustrativas en Chakra. Reemplázalas por capturas reales de Figma cuando las tengas. */

export function PhoneFrame({ children, w = 240, label }: { children: ReactNode; w?: number; label?: string }) {
  return (
    <Box>
      <Box w={`${w}px`} maxW="100%" mx="auto" bg="app.bg" borderWidth="6px" borderColor="app.fg" rounded="3xl" overflow="hidden" shadow="sm">
        <Box p="3" minH={`${w * 1.95}px`} display="flex" flexDirection="column" gap="2">
          {children}
        </Box>
      </Box>
      {label && (
        <Text mt="3" textAlign="center" fontSize="sm" color="app.subtle">
          {label}
        </Text>
      )}
    </Box>
  );
}

function Tile({ label, featured, dashed, note }: { label: string; featured?: boolean; dashed?: boolean; note?: string }) {
  return (
    <Flex
      align="center"
      gap="2"
      p="2.5"
      rounded="lg"
      borderWidth="1px"
      borderStyle={dashed ? "dashed" : "solid"}
      borderColor={featured ? "app.buttonHover" : "app.border"}
      bg={featured ? "app.accentSoft" : "app.bg"}
      minH={featured ? "14" : "10"}
    >
      <Box boxSize="5" rounded="full" bg={featured ? "app.button" : "app.borderStrong"} flexShrink={0} />
      <Box flex="1">
        <Text fontSize="12px" fontWeight={featured ? "semibold" : "medium"} lineHeight="short">
          {label}
        </Text>
        {note && (
          <Text fontSize="10px" color="app.subtle">
            {note}
          </Text>
        )}
      </Box>
      <ChevronRight size={12} />
    </Flex>
  );
}

function Header({ title = "103 · Ayuda en pantalla" }: { title?: string }) {
  return (
    <Box pb="1">
      <Text fontSize="10px" color="app.subtle">
        Mi Movistar
      </Text>
      <Text textStyle="captionMedium">
        {title}
      </Text>
    </Box>
  );
}

function CallActions({ whatsappFirst }: { whatsappFirst: boolean }) {
  const wa = (
    <Flex key="wa" align="center" justify="center" gap="1.5" rounded="full" h="9" fontSize="12px" fontWeight="semibold" bg={whatsappFirst ? "app.button" : "transparent"} color="app.fg" borderWidth={whatsappFirst ? 0 : "1px"} borderColor="app.borderStrong">
      <MessageCircle size={12} /> Escribir por WhatsApp
    </Flex>
  );
  const call = (
    <Flex key="call" align="center" justify="center" gap="1.5" rounded="full" h="9" fontSize="12px" fontWeight="semibold" bg={whatsappFirst ? "transparent" : "app.button"} color="app.fg" borderWidth={whatsappFirst ? "1px" : 0} borderColor="app.borderStrong">
      <Phone size={12} /> Continuar llamada
    </Flex>
  );
  return (
    <Flex direction="column" gap="2" mt="auto" pt="2">
      {whatsappFirst ? [wa, call] : [call, wa]}
    </Flex>
  );
}

export type Segment = "plan" | "hogar" | "prepago";

const SEGMENTS: Record<Segment, { name: string; before: string[]; main: [string, string]; rest: string[] }> = {
  plan: {
    name: "Plan móvil",
    before: ["Revisar boleta", "Pagar boleta", "Mejorar la señal", "Comprar bolsas", "Cambiar plan", "Soporte técnico"],
    main: ["Revisar y pagar boleta", "Mejorar la señal"],
    rest: ["Solicitudes y reclamos"],
  },
  hogar: {
    name: "Hogar",
    before: ["Fallas de internet", "Revisar plan", "Cambiar plan", "Revisar boleta", "Pagar boleta", "Soporte técnico"],
    main: ["Fallas de internet", "Consultar plan"],
    rest: ["Boleta", "Solicitudes y reclamos"],
  },
  prepago: {
    name: "Prepago",
    before: ["Consultar saldo", "Recargar saldo", "Comprar bolsas", "Cambiar plan", "Revisar boleta", "Soporte técnico"],
    main: ["Saldo y recarga", "Comprar bolsas"],
    rest: ["Agregar un prepago", "Solicitudes y reclamos"],
  },
};

export function IvrScreen({ segment, variant = "after", w = 240, label }: { segment: Segment; variant?: "before" | "after"; w?: number; label?: string }) {
  const s = SEGMENTS[segment];
  return (
    <PhoneFrame w={w} label={label}>
      <Header title={`${s.name} · ¿En qué te ayudamos?`} />
      {variant === "before" ? (
        <>
          <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap="1.5">
            {s.before.map((b) => (
              <Tile key={b} label={b} />
            ))}
          </Grid>
          <CallActions whatsappFirst={false} />
        </>
      ) : (
        <>
          <Text fontSize="10px" fontWeight="semibold" color="app.subtle" textTransform="uppercase">
            Lo más usado
          </Text>
          {s.main.map((m) => (
            <Tile key={m} label={m} featured />
          ))}
          <Text fontSize="10px" fontWeight="semibold" color="app.subtle" textTransform="uppercase" mt="1">
            Más opciones
          </Text>
          {s.rest.map((r) => (
            <Tile key={r} label={r} />
          ))}
          <CallActions whatsappFirst />
        </>
      )}
    </PhoneFrame>
  );
}

/* Hero: los tres segmentos con el diseño final */
export function SegmentsMock() {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8" alignItems="start">
      <IvrScreen segment="prepago" label="Prepago" />
      <IvrScreen segment="hogar" label="Hogar" />
      <IvrScreen segment="plan" label="Plan móvil" />
    </Grid>
  );
}

/* Datos de abandono: 35.000 intercepciones */
export function AbandonMock() {
  const rows = [
    { label: "Abandona el flujo", pct: 55, hi: true },
    { label: "Sigue hacia la llamada", pct: 30 },
    { label: "Usa los accesos de la pantalla", pct: 12 },
    { label: "Va a WhatsApp", pct: 3 },
  ];
  return (
    <Flex direction="column" gap="5">
      {rows.map((r) => (
        <Box key={r.label}>
          <Flex justify="space-between" fontSize="sm" mb="1.5">
            <Text color="app.fg" fontWeight={r.hi ? "semibold" : "normal"}>
              {r.label}
            </Text>
            <Text textStyle="bodyMedium" color={r.hi ? "app.accent" : "app.muted"}>
              {r.pct}%
            </Text>
          </Flex>
          <Box h="2.5" bg="app.border" rounded="full">
            <Box h="full" w={`${r.pct}%`} bg={r.hi ? "app.button" : "app.borderStrong"} rounded="full" />
          </Box>
        </Box>
      ))}
      <Text fontSize="xs" color="app.subtle">
        Datos internos de agosto, previos al rediseño. Base: ~35.000 intercepciones.
      </Text>
    </Flex>
  );
}

/* Pantalla transversal descartada */
export function TransversalMock() {
  return (
    <PhoneFrame w={240} label="Pantalla transversal descartada">
      <Header title="Atajos para todos" />
      <Tile label="Consultar y recargar saldo" note="Prepago" />
      <Tile label="Comprar bolsas" note="Prepago" />
      <Tile label="Fallas de internet" note="Hogar" dashed />
      <Tile label="Revisar y cambiar plan" note="Hogar" dashed />
      <Tile label="Revisar y pagar boleta" note="Plan móvil" dashed />
      <Tile label="Mejorar la señal" note="Plan móvil" dashed />
      <Text fontSize="10px" color="app.subtle" mt="auto">
        Línea punteada: accesos que no corresponden a un cliente mono servicio.
      </Text>
    </PhoneFrame>
  );
}

/* Flujos de permisos por marca */
function Step({ n, children, w = 170 }: { n: string; children: ReactNode; w?: number }) {
  return (
    <Box>
      <Text textStyle="footnoteMedium" color="app.subtle" mb="2">
        {n}
      </Text>
      <Box w={`${w}px`} maxW="100%" borderWidth="1px" borderColor="app.border" rounded="xl" bg="app.bg" p="3" minH="52" display="flex" flexDirection="column" gap="2">
        {children}
      </Box>
    </Box>
  );
}

function Toggle({ label, on }: { label: string; on?: boolean }) {
  return (
    <Flex align="center" justify="space-between" fontSize="10px" borderWidth="1px" borderColor="app.border" rounded="md" p="2">
      {label}
      <Box w="7" h="4" rounded="full" bg={on ? "app.button" : "app.borderStrong"} position="relative">
        <Box position="absolute" top="0.5" left={on ? "3.5" : "0.5"} boxSize="3" rounded="full" bg="white" />
      </Box>
    </Flex>
  );
}

function SuccessBadge({ text }: { text: string }) {
  return (
    <Flex direction="column" align="center" justify="center" flex="1" gap="2" textAlign="center">
      <Flex boxSize="9" rounded="full" bg="app.button" color="app.fg" align="center" justify="center">
        <Check size={18} />
      </Flex>
      <Text fontSize="12px" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  );
}

export function PermissionsMock({ brand }: { brand: "samsung" | "huawei" }) {
  const samsung = brand === "samsung";
  return (
    <Flex gap="5" wrap="wrap" align="flex-start">
      <Step n="1 · Explicación">
        <Text fontSize="12px" fontWeight="semibold">
          Activa las alternativas en pantalla
        </Text>
        <Text fontSize="10px" color="app.muted">
          Estos permisos te muestran ayuda en pantalla cuando marques el 103.
        </Text>
        <Flex mt="auto" rounded="full" bg="app.button" color="app.fg" h="8" align="center" justify="center" fontSize="12px" fontWeight="semibold">
          Ir a ajustes
        </Flex>
      </Step>
      <Step n={samsung ? "2 · Un permiso" : "2 · Dos permisos"}>
        <Flex align="center" gap="1.5" fontSize="10px" color="app.subtle">
          <Settings size={11} /> Ajustes
        </Flex>
        <Toggle label={samsung ? "Mostrar sobre otras apps" : "Aparecer encima"} on />
        {!samsung && <Toggle label="Inicio automático" on />}
        <Text fontSize="10px" color="app.subtle" mt="auto">
          {samsung ? "Vuelve a Mi Movistar para continuar." : "Una explicación por cada permiso."}
        </Text>
      </Step>
      <Step n={samsung ? "3 · Éxito detectado" : "3 · Confirmación"}>
        {samsung ? (
          <SuccessBadge text="¡Listo! Ya puedes marcar el 103" />
        ) : (
          <>
            <Text fontSize="10px" color="app.muted">
              Cuando termines con ambos permisos, avísanos.
            </Text>
            <Flex mt="auto" rounded="full" borderWidth="1px" borderColor="app.buttonHover" color="app.buttonHover" h="8" align="center" justify="center" fontSize="12px" fontWeight="semibold">
              Ya activé los permisos
            </Flex>
          </>
        )}
      </Step>
    </Flex>
  );
}

/* Push → landing → activación */
export function PushLandingMock() {
  return (
    <Flex gap="5" wrap="wrap" align="flex-start">
      <Step n="1 · Push">
        <Flex gap="2" p="2" rounded="lg" bg="app.surface" align="flex-start">
          <Bell size={14} />
          <Box>
            <Text fontSize="10px" fontWeight="semibold">
              Mi Movistar
            </Text>
            <Text fontSize="10px" color="app.muted">
              Resuelve tus dudas sin esperar. Descubre cómo.
            </Text>
          </Box>
        </Flex>
      </Step>
      <Step n="2 · Landing informativa">
        <Text fontSize="12px" fontWeight="semibold">
          Qué encontrarás al marcar 103
        </Text>
        <Tile label="Accesos según tu servicio" />
        <Tile label="Reclamos y solicitudes" />
        <Flex mt="auto" rounded="full" bg="app.button" color="app.fg" h="8" align="center" justify="center" fontSize="12px" fontWeight="semibold">
          Activar permisos
        </Flex>
      </Step>
      <Step n="3 · Activación">
        <SuccessBadge text="Flujo de permisos según tu dispositivo" />
      </Step>
    </Flex>
  );
}
