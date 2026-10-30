import type { ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, List, Separator, Text } from "@chakra-ui/react";
import { Check, Home, Minus, Smartphone, Wifi } from "lucide-react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { AbandonMock, IvrScreen, PermissionsMock, PushLandingMock, SegmentsMock, TransversalMock } from "../components/mocks";

/* ---------- primitivas de layout ---------- */

const Container = (p: { children: ReactNode; id?: string }) => (
  <Box as="section" id={p.id} w="full" maxW="6xl" mx="auto" px="6" scrollMarginTop="20">
    {p.children}
  </Box>
);

function Section({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <Container id={id}>
      <Reveal>
        <Grid templateColumns="repeat(12, 1fr)" columnGap="8" rowGap="4" borderTopWidth="1px" borderColor="app.border" pt="10">
          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Text textStyle="footnoteMedium" color="app.subtle">
              {label}
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 9 }}>{children}</GridItem>
        </Grid>
      </Reveal>
    </Container>
  );
}

const H2 = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" maxW="2xl" textStyle={{ base: "mh4", md: "h4" }} color="app.fg">
    {children}
  </Heading>
);

/* size: h5 (24) · headlineMedium (20) · bodyLgMedium (18) · bodyMedium (16) */
const H3 = ({ children, size = "h5", ...rest }: { children: ReactNode; size?: string; mt?: string }) => (
  <Heading as="h3" textStyle={size} color="app.fg" {...rest}>
    {children}
  </Heading>
);

const Body = ({ children, small, ...rest }: { children: ReactNode; small?: boolean; mt?: string }) => (
  <Text maxW="2xl" textStyle={small ? "body" : "bodyLg"} color="app.muted" {...rest}>
    {children}
  </Text>
);

const Stat = ({ value, children }: { value: string; children: ReactNode }) => (
  <Flex align="baseline" gap="4">
    <Text textStyle="h3" color="app.accent" flexShrink={0}>
      {value}
    </Text>
    <Text maxW="sm" textStyle="footnote" color="app.muted">
      {children}
    </Text>
  </Flex>
);

/* Dato destacado: tarjeta con borde continuo; la cifra y su frase en #17D5FF, el resto en gris */
const StatCard = ({ highlight, children }: { highlight: string; children: ReactNode }) => (
  <Box rounded="container" borderWidth="1px" borderStyle="solid" borderColor="app.borderStrong" p={{ base: 6, md: 8 }}>
    <Text textStyle="headline" color="app.muted">
      <Text as="span" fontWeight="600" color="app.button">
        {highlight}
      </Text>{" "}
      {children}
    </Text>
  </Box>
);

const Callout = ({ children }: { children: ReactNode }) => (
  <Box mt="16" rounded="container" bg="app.accentSoft" p={{ base: 8, md: 10 }}>
    <Text maxW="2xl" textStyle="headlineMedium" color="app.fg">
      {children}
    </Text>
  </Box>
);

const Surface = ({ children }: { children: ReactNode }) => (
  <Box rounded="container" bg="app.surface" p={{ base: 6, md: 12 }}>
    {children}
  </Box>
);

/* ---------- contenido ---------- */

const meta = [
  { label: "Rol", value: ["UX/UI Designer"] },
  { label: "Equipo", value: ["Product Owner", "Stakeholders", "Desarrollo Android"] },
  { label: "Herramientas", value: ["Figma", "Looker Studio"] },
  { label: "Estado", value: ["Diseño aprobado", "En desarrollo"] },
];

const hypotheses = [
  {
    title: "Accesos mal priorizados",
    body: "Las pantallas reunían muchas opciones con el mismo peso, sin reflejar lo que cada cliente buscaba.",
  },
  {
    title: "Activar el IVR era confuso",
    body: "Las instrucciones no explicaban qué permisos habilitar y, según el dispositivo, el flujo terminaba sin confirmar la activación.",
  },
];

const segments = [
  { icon: Smartphone, title: "Prepago", body: "41% consultar y recargar saldo · 14,8% comprar bolsas." },
  { icon: Home, title: "Hogar", body: "14,5% resolver fallas de internet · 7,3% revisar y cambiar plan." },
  { icon: Wifi, title: "Plan móvil", body: "6% revisar y pagar boleta · 5,5% mejorar la señal." },
];

const rules = [
  ["Destacar dos alternativas", "Las dos más relevantes de cada segmento ganan protagonismo."],
  ["Agrupar funciones relacionadas", "Menos opciones sueltas, más sentido en cada bloque."],
  ["Retirar lo que no se usa", "Se quitan los accesos con baja interacción."],
  ["Sumar solicitudes y reclamos", "Un acceso nuevo en los tres segmentos para el motivo de llamada sin respuesta."],
];

const annotations = [
  { n: 1, title: "Alternativas destacadas", body: "Las dos más relevantes del segmento, con mayor peso visual.", x: 6, y: 22 },
  { n: 2, title: "Acceso unificado", body: "“Revisar” y “pagar boleta” en un solo acceso.", x: 94, y: 22 },
  { n: 3, title: "Mejorar la señal", body: "Segundo acceso más usado del segmento.", x: 94, y: 34 },
  { n: 4, title: "Solicitudes y reclamos", body: "Acceso nuevo para el motivo de llamada que no tenía respuesta.", x: 94, y: 49 },
  { n: 5, title: "WhatsApp como acción principal", body: "Refuerza el canal digital.", x: 94, y: 85 },
  { n: 6, title: "Continuar llamada", body: "Pasa a secundaria sin quitar la atención telefónica.", x: 94, y: 93 },
];

const metrics = [
  ["Abandono (55%)", "debería bajar si la pantalla comunica mejor."],
  ["Interacción con accesos (12%)", "debería subir si la jerarquía por segmento es acertada."],
  ["Uso del acceso de reclamos", "muestra si cubrí el vacío que dejaban las llamadas."],
  ["Activación de permisos", "compara el flujo nuevo con el anterior, por marca."],
];

const lessons = [
  {
    title: "La IA acelera el análisis, pero no decide.",
    body: "La pantalla transversal fue la mejor prueba: me dio una buena propuesta y la descarté con contexto que ella no tenía.",
  },
  {
    title: "Hablar con desarrollo y con la PO cambia el diseño.",
    body: "El dato de que el servicio ya era identificable cambió la decisión central.",
  },
];

/* ---------- página ---------- */

export default function CaseStudy() {
  return (
    <Box id="top" minH="100vh" bg="app.bg" color="app.fg">
      <Nav />

      <Flex as="main" direction="column" gap="28" pb="28">
        {/* Hero */}
        <Container>
          <Reveal pt="20">
            <Text textStyle="footnote" color="app.subtle">
              Caso de estudio · Mi Movistar
            </Text>
            <Heading as="h1" mt="4" maxW="4xl" textStyle={{ base: "mh1", md: "h1" }} lineHeight="1.05">
              IVR Mi Movistar: transformando llamadas en oportunidades de autogestión
            </Heading>
            <Text mt="6" maxW="2xl" textStyle="headline" color="app.muted">
              Rediseñé la experiencia de autogestión del IVR para que los clientes resuelvan sus dudas sin llamar al call center.
            </Text>

            <Grid as="dl" mt="14" templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" }} gap="8" borderTopWidth="1px" borderColor="app.border" pt="8">
              {meta.map((m) => (
                <Box key={m.label}>
                  <Text as="dt" textStyle="footnoteMedium" color="app.subtle">
                    {m.label}
                  </Text>
                  {m.value.map((v) => (
                    <Text as="dd" key={v} mt="1.5" textStyle="body">
                      {v}
                    </Text>
                  ))}
                </Box>
              ))}
            </Grid>
          </Reveal>

          <Reveal mt="16">
            <Surface>
              <SegmentsMock />
            </Surface>
          </Reveal>
        </Container>

        {/* Contexto */}
        <Section label="Contexto">
          <Text maxW="3xl" textStyle="headlineMedium" fontSize="24px" lineHeight="34px">
            Cuando marcas el 103, la app puede ayudarte antes de que llames al call center.
          </Text>
          <Body mt="6">
            El IVR es el sistema de atención telefónica automatizado de Movistar. En la app Mi Movistar, al marcar el 103 el cliente ve
            en pantalla alternativas de ayuda para resolver su consulta sin esperar a un ejecutivo.
          </Body>
          <Body mt="4">
            Para el negocio, cada cliente que se autogestiona es una llamada menos al call center. Mi trabajo fue mejorar esa experiencia
            en Android, junto con el Product Owner y el equipo de desarrollo.
          </Body>
        </Section>

        {/* Problema */}
        <Section label="El problema">
          <H2>¿Por qué 19.000 personas veían la pantalla y no hacían nada?</H2>
          <Body mt="6">
            En agosto hubo cerca de 35.000 intercepciones de IVR. La mayoría no usaba lo que se le ofrecía. Antes de rediseñar nada,
            quería saber por qué.
          </Body>
          <Grid mt="10" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="6">
            <StatCard highlight="55% de los clientes abandonaba el flujo">sin interactuar con ninguna pantalla del IVR.</StatCard>
            <StatCard highlight="30% de los clientes seguía hacia la llamada">al call center.</StatCard>
          </Grid>
          <Box mt="12" maxW="lg">
            <AbandonMock />
          </Box>
        </Section>

        {/* Hipótesis */}
        <Section label="Hipótesis">
          <H2>Dos sospechas: lo que ofrecían las pantallas y los permisos previos</H2>
          <Body mt="6">
            Revisé todo el recorrido, desde la activación de permisos hasta las pantallas por segmento, y planteé dos hipótesis.
          </Body>
          <Grid mt="12" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} columnGap="12" rowGap="10">
            {hypotheses.map((h, i) => (
              <Box key={h.title} borderTopWidth="1px" borderColor="app.border" pt="5">
                <Text textStyle="footnoteMedium" color="app.subtle">
                  Hipótesis {i + 1}
                </Text>
                <H3 size="headlineMedium" mt="1">
                  {h.title}
                </H3>
                <Body small mt="3">
                  {h.body}
                </Body>
              </Box>
            ))}
          </Grid>

          <Box mt="20">
            <H3>Pista 1: cada segmento buscaba algo distinto</H3>
            <Body small mt="3">
              Analicé los clics de abril a junio en Looker Studio y los convertí en porcentajes por segmento. Usé IA (ChatGPT) para
              procesarlos más rápido, agrupar accesos similares y detectar opciones con poca interacción. El criterio para decidir fue
              mío.
            </Body>
            <Grid mt="8" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, minmax(0, 1fr))" }} gap="8">
              {segments.map((s) => {
                const Icon = s.icon;
                return (
                  <Box key={s.title}>
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                    <H3 size="bodyLgMedium" mt="4">
                      {s.title}
                    </H3>
                    <Body small mt="2">
                      {s.body}
                    </Body>
                  </Box>
                );
              })}
            </Grid>
            <Text mt="8" textStyle="headlineMedium" color="app.fg">
              Cada segmento necesitaba su propia jerarquía.
            </Text>
          </Box>

          <Grid mt="20" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap={{ base: 6, md: 12 }} borderYWidth="1px" borderColor="app.border" py="10">
            <Box>
              <H3>Pista 2: lo que se pedía no coincidía con por qué llamaban</H3>
              <Body small mt="3">
                Un reporte de Atención Digital mostró cinco motivos como cobros no reconocidos, consultas de boleta y problemas técnicos.
                Entre ellos había muchos reclamos por visitas técnicas incumplidas y fallas, y ninguna pantalla ofrecía un acceso para
                ingresarlos. Ahí había un vacío que llenar.
              </Body>
            </Box>
            <Box pt="1">
              <Stat value="40%">de las llamadas se concentraba en cinco motivos</Stat>
            </Box>
          </Grid>
        </Section>

        {/* Pantalla descartada */}
        <Section label="Una exploración descartada">
          <H2>Una pantalla de atajos, y por qué la descarté</H2>
          <Body mt="6">
            Con los datos de los tres segmentos usé IA para explorar una pantalla transversal: una sola vista con los accesos más usados
            de móvil, prepago y hogar. Menos opciones, menos tiempo de decisión (ley de Hick). Visualmente era limpia y tenía lógica.
          </Body>

          <Grid mt="14" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(5, minmax(0, 1fr))" }} gap="10" alignItems="start">
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="10">
                <ProsCons heading="Lo que ganaba" positive items={[["Menos opciones", "Decisión más rápida."], ["Una sola vista", "Simple de construir y mantener."]]} />
                <ProsCons heading="Lo que costaba" items={[["Accesos ajenos", "Un cliente mono servicio vería opciones que no le corresponden."], ["Contexto ignorado", "Desarrollo confirmó que el servicio ya era identificable."]]} />
              </Grid>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Surface>
                <TransversalMock />
              </Surface>
            </GridItem>
          </Grid>

          <Body mt="10">Expuse mis argumentos al Product Owner y acordamos mantener pantallas específicas por segmento.</Body>
          <Callout>Reducir opciones no sirve si son las opciones equivocadas.</Callout>
        </Section>

        {/* Pantallas por segmento */}
        <Section label="Solución: pantallas por segmento">
          <H2>Cada servicio, sus propias prioridades</H2>
          <Grid mt="12" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="12" alignItems="start">
            <Box>
              <H3>Reglas de diseño en los tres segmentos</H3>
              <List.Root as="ol" listStyle="none" m="0" mt="6" gap="6">
                {rules.map(([t, b], i) => (
                  <List.Item key={t} display="flex" gap="4">
                    <Text textStyle="footnoteMedium" color="app.subtle">
                      0{i + 1}
                    </Text>
                    <Box>
                      <Text textStyle="bodyMedium">
                        {t}
                      </Text>
                      <Text mt="1" textStyle="body" color="app.muted">
                        {b}
                      </Text>
                    </Box>
                  </List.Item>
                ))}
              </List.Root>
            </Box>
            <Box>
              <H3>Decisiones por segmento</H3>
              <Body small mt="3">
                <b>Plan móvil:</b> unifiqué “revisar” y “pagar boleta” en un solo acceso, junto con mejorar la señal.
              </Body>
              <Body small mt="3">
                <b>Hogar:</b> protagonismo a fallas de internet y consulta de plan; agrupé boleta y sumé reclamos.
              </Body>
              <Body small mt="3">
                <b>Prepago:</b> mantuve saldo y bolsas como protagonistas, retiré una opción que no correspondía y sumé “agregar un
                prepago” y reclamos.
              </Body>
              <Body small mt="3">
                <b>Decisión transversal:</b> WhatsApp pasó a ser la acción principal y continuar la llamada quedó como secundaria. Así
                se refuerza el canal digital sin quitar la atención telefónica a quien la necesite.
              </Body>
            </Box>
          </Grid>

          <Box mt="16">
            <Surface>
              <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="10">
                <IvrScreen segment="plan" variant="before" label="Antes · Plan móvil" />
                <IvrScreen segment="plan" variant="after" label="Después · Plan móvil" />
              </Grid>
              <Grid mt="12" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="10">
                <IvrScreen segment="hogar" variant="after" w={190} label="Hogar" />
                <IvrScreen segment="prepago" variant="after" w={190} label="Prepago" />
              </Grid>
            </Surface>
          </Box>
        </Section>

        {/* Diseño anotado */}
        <Container>
          <Reveal>
            <Surface>
              <Box position="relative" w="270px" maxW="100%" mx="auto">
                <IvrScreen segment="plan" variant="after" w={270} />
                {annotations.map((a) => (
                  <Flex
                    key={a.n}
                    position="absolute"
                    left={`${a.x}%`}
                    top={`${a.y}%`}
                    ml="-11px"
                    mt="-11px"
                    boxSize="22px"
                    rounded="full"
                    bg="app.fg"
                    color="app.bg"
                    align="center"
                    justify="center"
                    fontFamily="display"
                    fontSize="10px"
                    fontWeight="medium"
                    boxShadow="0 0 0 4px var(--chakra-colors-app-surface)"
                    aria-hidden
                  >
                    {a.n}
                  </Flex>
                ))}
              </Box>
            </Surface>
            <List.Root as="ol" listStyle="none" m="0" mt="10" display="grid" gridTemplateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }} columnGap="10" rowGap="6">
              {annotations.map((a) => (
                <List.Item key={a.n} display="flex" gap="3">
                  <Flex boxSize="22px" flexShrink={0} rounded="full" borderWidth="1px" borderColor="app.borderStrong" align="center" justify="center" textStyle="smallMedium" fontSize="10px">
                    {a.n}
                  </Flex>
                  <Box>
                    <Text textStyle="footnoteMedium">
                      {a.title}
                    </Text>
                    <Text mt="1" textStyle="footnote" color="app.muted">
                      {a.body}
                    </Text>
                  </Box>
                </List.Item>
              ))}
            </List.Root>
          </Reveal>
        </Container>

        {/* Permisos */}
        <Section label="Solución: activación de permisos">
          <H2>Activar la experiencia en cada dispositivo</H2>
          <Body mt="6">
            El IVR requiere permisos de Android, y la experiencia de activación variaba según la marca.
          </Body>

          <Box mt="14">
            <H3>Mensaje inicial</H3>
            <Body small mt="3">
              El original hablaba de “una alternativa al call center” sin decir qué permitir. Lo rediseñé para explicar qué hacen los
              permisos y que, al marcar 103, se verán alternativas en pantalla.
            </Body>
          </Box>

          <Iteration
            tag="Samsung"
            title="Volver a la app y recibir confirmación"
            intro="El cliente activa un permiso en ajustes, pero no sabía que debía volver a la app ni recibía confirmación. Agregué instrucciones específicas y una pantalla de éxito cuando la app detecta el permiso."
          >
            <Surface>
              <PermissionsMock brand="samsung" />
            </Surface>
          </Iteration>

          <Iteration
            tag="Huawei y Xiaomi"
            title="Dos permisos que la app no puede verificar"
            intro="Requieren dos permisos y, por restricciones técnicas, la app no puede comprobar que ambos estén activos. Diseñé una explicación por cada permiso y un botón “Ya activé los permisos”, que da feedback sin presentarse como verificación técnica."
          >
            <Surface>
              <PermissionsMock brand="huawei" />
            </Surface>
          </Iteration>

          <Iteration
            tag="Segunda oportunidad"
            title="Clientes que rechazaron los permisos"
            intro="En la revisión con stakeholders surgió un caso nuevo: quienes rechazaron los permisos al entrar por primera vez. Diseñé una landing informativa, a la que se llega desde una notificación push, que muestra qué encontrarán y cómo activar los permisos."
          >
            <Surface>
              <PushLandingMock />
            </Surface>
          </Iteration>

          <Callout>Una misma necesidad no siempre se resuelve con la misma interacción. La experiencia debe adaptarse a lo que cada dispositivo permite.</Callout>
        </Section>

        {/* Resultados */}
        <Section label="Resultados">
          <H2>Diseño aprobado, en desarrollo y con una hipótesis por comprobar</H2>
          <Body mt="6">El diseño fue aprobado por stakeholders y está en desarrollo en Android. Aún no hay métricas posteriores al lanzamiento.</Body>

          <Box mt="16">
            <H3>Cómo sabré si funcionó</H3>
            <List.Root listStyle="none" m="0" mt="6" gap="4" maxW="2xl">
              {metrics.map(([t, b]) => (
                <List.Item key={t} display="flex" gap="3">
                  <Box mt="1" flexShrink={0} color="app.fg">
                    <Check size={16} strokeWidth={2} aria-hidden />
                  </Box>
                  <Text textStyle="body" color="app.muted">
                    <Text as="span" fontWeight="600" color="app.fg">
                      {t}:
                    </Text>{" "}
                    {b}
                  </Text>
                </List.Item>
              ))}
            </List.Root>
          </Box>

          <Box mt="16" borderTopWidth="1px" borderColor="app.border" pt="8">
            <H3>Limitaciones</H3>
            <Body small mt="3">
              Validé con stakeholders y con datos de uso, lo que respalda la priorización pero no la comprensión de los textos ni de los
              flujos de permisos por clientes. Tras el lanzamiento lo evaluaría con pruebas breves en Samsung y Huawei/Xiaomi.
            </Body>
          </Box>
        </Section>

        {/* Lo que aprendí */}
        <Section id="aprendizajes" label="Lo que aprendí">
          <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} columnGap="12" rowGap="10">
            {lessons.map((l, i) => (
              <Flex key={l.title} gap="4">
                <Text textStyle="footnoteMedium" color="app.subtle">
                  0{i + 1}
                </Text>
                <Box>
                  <H3 size="headlineMedium">{l.title}</H3>
                  <Body small mt="2">
                    {l.body}
                  </Body>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Section>

        {/* Qué sigue */}
        <Section id="siguiente" label="Qué sigue">
          <Box rounded="container" bg="app.accentSoft" p={{ base: 8, md: 10 }}>
            <Text maxW="2xl" textStyle="headlineMedium" color="app.fg">
              Incorporar un motion graphic en el flujo de permisos que muestre los pasos, para complementar las instrucciones escritas,
              sobre todo en dispositivos con configuración adicional.
            </Text>
          </Box>
        </Section>
      </Flex>

      <Separator borderColor="app.border" />
      <Flex as="footer" maxW="6xl" mx="auto" px="6" py="8" wrap="wrap" justify="space-between" gap="4" textStyle="footnote" color="app.subtle">
        <Text>Tu nombre © 2026</Text>
        <Text>UX/UI Designer</Text>
      </Flex>
    </Box>
  );
}

/* ---------- bloques reutilizables ---------- */

function Iteration({ tag, title, intro, children }: { tag: string; title: string; intro: string; children: ReactNode }) {
  return (
    <Box mt="16">
      <Text textStyle="footnoteMedium" color="app.subtle">
        {tag}
      </Text>
      <H3 size="h5" mt="2">
        {title}
      </H3>
      <Body small mt="3">
        {intro}
      </Body>
      <Box mt="8">{children}</Box>
    </Box>
  );
}

function ProsCons({ heading, items, positive = false }: { heading: string; items: [string, string][]; positive?: boolean }) {
  const Icon = positive ? Check : Minus;
  return (
    <Box>
      <Text textStyle="footnoteMedium">
        {heading}
      </Text>
      <List.Root listStyle="none" m="0" mt="4" gap="4">
        {items.map(([t, b]) => (
          <List.Item key={t} display="flex" gap="3">
            <Box mt="0.5" flexShrink={0} color={positive ? "app.fg" : "app.subtle"}>
              <Icon size={16} strokeWidth={2} aria-hidden />
            </Box>
            <Text textStyle="body" color="app.muted">
              <Text as="span" fontWeight="semibold" color="app.fg">
                {t}.
              </Text>{" "}
              {b}
            </Text>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
