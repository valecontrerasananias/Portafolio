import type { ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, Link, List, Separator, Text } from "@chakra-ui/react";
import { ArrowRight, Check, CircleCheckBig, DoorOpen, Phone, type LucideIcon, Image as ImageIcon, LayoutGrid, Megaphone, Minus, Scale, ShieldCheck } from "lucide-react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { AbandonMock, PermissionsMock, TransversalMock } from "../components/mocks";

/* ---------- primitivas de layout ---------- */

const Container = (p: { children: ReactNode; id?: string }) => (
  <Box as="section" id={p.id} w="full" maxW="6xl" mx="auto" px="6" scrollMarginTop="20">
    {p.children}
  </Box>
);

/* Pre-título en forma de tag (píldora) */
const Tag = ({ children }: { children: ReactNode }) => (
  <Text as="span" display="inline-flex" alignItems="center" px="4" py="1.5" rounded="full" bg="app.accentSoft" color="app.fg" textStyle="footnoteMedium" fontWeight="600">
    {children}
  </Text>
);

function Section({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <Container id={id}>
      <Reveal>
        <Grid templateColumns="repeat(12, 1fr)" columnGap="8" rowGap="4" borderTopWidth="1px" borderColor="app.border" pt="10">
          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Tag>{label}</Tag>
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

const Body = ({ children, small, ...rest }: { children: ReactNode; small?: boolean; mt?: string; maxW?: string }) => (
  <Text maxW="2xl" textStyle={small ? "body" : "bodyLg"} color="app.muted" {...rest}>
    {children}
  </Text>
);

/* Imagen placeholder: reemplazar por la imagen final */
const PlaceholderImage = ({ label = "Imagen", ...rest }: { label?: string; mt?: string }) => (
  <Flex
    w="full"
    aspectRatio={{ base: "4 / 3", md: "16 / 8" }}
    bg="app.card"
    rounded={{ base: "24px", md: "32px" }}
    direction="column"
    align="center"
    justify="center"
    gap="3"
    color="app.subtle"
    {...rest}
  >
    <ImageIcon size={40} strokeWidth={1.5} aria-hidden />
    <Text textStyle="footnote">{label}</Text>
  </Flex>
);

/* Ícono dentro de un contenedor azul de la paleta (#17D5FF) */
const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
  <Flex boxSize="12" rounded="14px" bg="app.button" color="app.fg" align="center" justify="center" flexShrink={0}>
    <Icon size={22} strokeWidth={1.75} aria-hidden />
  </Flex>
);

/* Card con ícono: "white" (fondo blanco con sombra suave) o "gray" (fondo gris del sitio). Sin botones ni acciones. */
const FeatureCard = ({ icon, tone = "white", delay = 0, children }: { icon: LucideIcon; tone?: "white" | "gray"; delay?: number; children: ReactNode }) => (
  <Reveal h="full" delay={delay}>
    <Box
      h="full"
      p={{ base: 6, md: 8 }}
      rounded="24px"
      bg={tone === "white" ? "app.bg" : "app.card"}
      borderWidth={tone === "white" ? "1px" : 0}
      borderColor="app.border"
      boxShadow={tone === "white" ? "0 8px 30px rgba(0, 0, 0, 0.06)" : "none"}
    >
      <IconBadge icon={icon} />
      <Box mt="6">{children}</Box>
    </Box>
  </Reveal>
);

/* Dato destacado: la cifra y su frase en negrita negra, el resto en gris */
const StatCard = ({ icon, highlight, children, delay = 0 }: { icon: LucideIcon; highlight: string; children: ReactNode; delay?: number }) => (
  <FeatureCard icon={icon} delay={delay}>
    <Text textStyle="headline" color="app.muted">
      <Text as="span" fontWeight="700" color="app.fg">
        {highlight}
      </Text>{" "}
      {children}
    </Text>
  </FeatureCard>
);

/* Card de contenido: fondo gris claro y esquinas amplias, sin bordes ni divisores */
const Card = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <Reveal h="full" delay={delay}>
    <Box bg="app.card" rounded={{ base: "24px", md: "32px" }} p={{ base: 6, md: 8 }} h="full">
      {children}
    </Box>
  </Reveal>
);

const Surface = ({ children }: { children: ReactNode }) => (
  <Box rounded="container" bg="app.surface" p={{ base: 6, md: 12 }}>
    {children}
  </Box>
);

/* ---------- contenido ---------- */

const meta = [
  { label: "Rol", value: ["UX/UI Designer"] },
  { label: "Equipo", value: ["Product Owner", "Stakeholders"] },
  { label: "Herramientas", value: ["Figma", "Looker Studio"] },
  { label: "Período", value: ["Mayo 2026 - Diciembre 2026"] },
];

const overview = [
  {
    title: "Sobre IVR",
    paragraphs: [
      "El IVR es un sistema de atención telefónica automatizado que permite realizar consultas y gestiones sin hablar con un ejecutivo.",
      "En la App Mi Movistar, una vez activados los permisos, esta funcionalidad intercepta las llamadas al 103 y muestra en pantalla alternativas de ayuda según el servicio del cliente (móvil, hogar o prepago), para que pueda resolver sus consultas sin necesidad de continuar la llamada.",
    ],
  },
  {
    title: "El desafío",
    paragraphs: [
      "Potenciar el uso del IVR para que más clientes pudieran resolver sus consultas a través de alternativas digitales, reduciendo la dependencia del call center.",
    ],
  },
  {
    title: "Mi rol",
    paragraphs: [
      "Lideré el diseño UX/UI de la propuesta, desde el análisis de datos y la evaluación de los flujos existentes hasta la reorganización de accesos de las pantallas de IVR y la mejora de textos de los permisos.",
    ],
  },
  {
    title: "El resultado",
    paragraphs: [
      "Rediseñé la experiencia de IVR, simplificando la activación de permisos y reorganizando las alternativas de autogestión según las necesidades de cada servicio con la idea de facilitar el acceso a alternativas de ayuda y reducir la dependencia de la atención telefónica.",
    ],
  },
];

const insights = [
  {
    icon: ShieldCheck,
    title: "La activación necesitaba mayor claridad",
    body: "Las instrucciones no siempre explicaban qué permisos debía habilitar el cliente y, según el dispositivo, el flujo podía finalizar sin confirmar su activación.",
  },
  {
    icon: LayoutGrid,
    title: "Los accesos de ayuda necesitaban una mejor jerarquía",
    body: "El análisis de interacciones reveló diferencias en el uso de los accesos según el segmento, lo que permitió identificar cuáles priorizar, reorganizar o simplificar.",
  },
];

const rules = [
  ["Destacar dos alternativas", "Las dos más relevantes de cada segmento ganan protagonismo."],
  ["Agrupar funciones relacionadas", "Menos opciones sueltas, más sentido en cada bloque."],
  ["Retirar lo que no se usa", "Se quitan los accesos con baja interacción."],
  ["Sumar solicitudes y reclamos", "Un acceso nuevo en los tres segmentos para el motivo de llamada sin respuesta."],
];

const decisions = [
  ["Plan móvil", "Unifiqué “revisar” y “pagar boleta” en un solo acceso, junto con mejorar la señal."],
  ["Hogar", "Protagonismo a fallas de internet y consulta de plan; agrupé boleta y sumé reclamos."],
  ["Prepago", "Mantuve saldo y bolsas como protagonistas, retiré una opción que no correspondía y sumé “agregar un prepago” y reclamos."],
  [
    "Decisión transversal",
    "WhatsApp pasó a ser la acción principal y continuar la llamada quedó como secundaria. Así se refuerza el canal digital sin quitar la atención telefónica a quien la necesite.",
  ],
];

const improvements = [
  { icon: LayoutGrid, title: "Autogestión", body: "Accesos reorganizados según las prioridades de cada segmento." },
  { icon: ShieldCheck, title: "Activación", body: "Instrucciones y flujos de permisos adaptados a distintos dispositivos." },
  { icon: Megaphone, title: "Comunicación", body: "Una landing informativa para clientes que todavía no han activado la funcionalidad." },
];

const lessons = [
  {
    title: "La IA como aliada en el análisis.",
    body: "Incorporar herramientas de inteligencia artificial me permitió agilizar el procesamiento de datos, identificar oportunidades de mejora y explorar alternativas de diseño, manteniendo mi criterio para evaluar las propuestas y tomar decisiones.",
  },
  {
    title: "La importancia de mantener una comunicación constante.",
    body: "Trabajar de cerca con la Product Owner y desarrollo fue clave para alinear las decisiones de diseño con los objetivos del negocio, resolver dudas y ajustar la propuesta durante el proceso.",
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
            <Tag>Caso de estudio · Mi Movistar</Tag>
            <Heading as="h1" mt="4" textStyle={{ base: "mh1", md: "h1" }} lineHeight="1.05">
              IVR Mi Movistar:
              <br />
              transformando llamadas en oportunidades de autogestión
            </Heading>
            <Text mt="6" textStyle="headline" color="app.muted">
              Una experiencia más clara para encontrar alternativas de ayuda sin depender de la atención telefónica.
            </Text>

            <Grid as="dl" mt="10" templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" }} gap="8" borderTopWidth="1px" borderColor="app.border" pt="8">
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

            {/* Imagen principal del caso (placeholder: reemplazar por la imagen final) */}
            <Flex
              mt="12"
              w="full"
              aspectRatio={{ base: "4 / 3", md: "16 / 8" }}
              bg="app.card"
              rounded={{ base: "24px", md: "32px" }}
              direction="column"
              align="center"
              justify="center"
              gap="3"
              color="app.subtle"
            >
              <ImageIcon size={40} strokeWidth={1.5} aria-hidden />
              <Text textStyle="footnote">Imagen principal del caso</Text>
            </Flex>

            <Flex direction="column" gap="5" mt="12">
              {overview.map(({ title, paragraphs }) => (
                <Flex key={title} direction="column" gap="5">
                  {paragraphs.map((t, i) => (
                    <Text key={t} textStyle="body" color="app.muted">
                      {i === 0 && (
                        <Text as="span" fontWeight="700" color="app.fg">
                          {title}:
                        </Text>
                      )}{" "}
                      {t}
                    </Text>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Reveal>

        </Container>

        {/* Contexto */}
        <Section label="Contexto">
          <Heading as="h2" maxW="3xl" textStyle="h5" color="app.fg">
            Una experiencia de autogestión que necesitaba mejorar.
          </Heading>
          <Body mt="6">
            IVR es el sistema de atención telefónica automatizado de Movistar. En la App Mi Movistar, cuando un cliente marca el 103, la
            llamada se intercepta y aparecen en pantalla alternativas de ayuda según su servicio (móvil, hogar o prepago), para que pueda
            resolver su consulta sin esperar a un ejecutivo.
          </Body>
          <Text mt="8" maxW="2xl" fontSize="24px" lineHeight="1.35" fontWeight="700" color="app.fg">
            Para el negocio, cada cliente que se autogestiona es una llamada menos al call center.
          </Text>
        </Section>

        {/* Problema */}
        <Section label="El problema">
          <H2>¿Por qué 19.000 personas veían la pantalla del IVR y no hacían nada?</H2>
          <Body mt="6">
            En agosto hubo cerca de 35.000 intercepciones de IVR. La mayoría de clientes no usaba lo que se le ofrecía. Antes de
            rediseñar nada, quería saber por qué.
          </Body>
          <Grid mt="10" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="6">
            <StatCard icon={DoorOpen} highlight="55% de los clientes abandonaba el flujo">sin interactuar con ninguna pantalla del IVR.</StatCard>
            <StatCard delay={150} icon={Phone} highlight="30% de los clientes seguía hacia la llamada">al call center.</StatCard>
          </Grid>
          <Box mt="12" maxW="lg">
            <AbandonMock />
          </Box>
        </Section>

        {/* Insights */}
        <Section label="Insights">
          <H2>Dos hallazgos que definieron el rediseño</H2>
          <Body mt="6">
            Tras analizar el recorrido completo del IVR, desde la activación de permisos hasta las opciones de ayuda, identifiqué dos
            aspectos clave que orientaron las decisiones de diseño.
          </Body>
          <Grid mt="12" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap="6">
            {insights.map((h, i) => (
              <FeatureCard key={h.title} icon={h.icon} tone="gray" delay={i * 150}>
                <Text textStyle="footnoteMedium" color="app.subtle">
                  0{i + 1}.
                </Text>
                <H3 size="headlineMedium" mt="3">
                  {h.title}
                </H3>
                <Body small mt="3">
                  {h.body}
                </Body>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* Pantalla descartada */}
        <Section label="Una exploración descartada">
          <H2>Una pantalla de atajos, y por qué la descarté</H2>
          <Body mt="6">
            A partir de los datos de interacción, utilicé IA para explorar una pantalla transversal que reuniera los accesos más
            utilizados de móvil, hogar y prepago.
          </Body>

          <Box mt="12">
            <Surface>
              <TransversalMock />
            </Surface>
          </Box>

          <Grid mt="12" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} columnGap="12" rowGap="10">
            <ProsCons
              heading="Puntos a favor"
              positive
              items={["Se priorizaron accesos con más clics de cada segmento.", "Menos opciones a la vista: más rápida la decisión."]}
            />
            <ProsCons
              heading="Puntos en contra"
              items={[
                "Ruido para el cliente mono-servicio: ve opciones que no le aplican.",
                "Si es posible identificar qué servicio tiene el cliente, conviene derivarlo directo a la pantalla de ese servicio.",
                "Para dudas menos frecuentes, el usuario puede profundizar en la pantalla específica de cada segmento.",
                "Prepago tiene poca interacción frente a móvil y hogar: por volumen de clics y las opciones visibles no son útiles para ellos (solo revisa y recarga tu saldo).",
              ]}
            />
          </Grid>

          <Reveal mt="14">
            <Box bg="app.card" rounded={{ base: "24px", md: "32px" }} p={{ base: 6, md: 10 }}>
          <Box>
            <Flex align="center" gap="3">
              <Box color="app.fg" flexShrink={0}>
                <Scale size={22} strokeWidth={1.5} aria-hidden />
              </Box>
              <H3 size="bodyLgMedium">El trade-off: simplicidad vs. relevancia</H3>
            </Flex>
            <Body small mt="3" maxW="none">
              La propuesta permitía reducir las opciones visibles y priorizar los accesos con más interacciones. Sin embargo, gran parte
              de clientes podían encontrarse con accesos que no correspondían a su servicio contratado.
            </Body>
          </Box>

          <Box mt="10">
            <Flex align="center" gap="3">
              <Box color="app.fg" flexShrink={0}>
                <CircleCheckBig size={22} strokeWidth={1.5} aria-hidden />
              </Box>
              <H3 size="bodyLgMedium">La decisión</H3>
            </Flex>
            <Body small mt="3" maxW="none">
              Tras confirmar con desarrollo que era posible identificar el servicio de cada cliente, decidimos junto con la Product Owner
              descartar la pantalla transversal y mantener experiencias diferenciadas por segmento.
            </Body>
          </Box>
            </Box>
          </Reveal>
        </Section>

        {/* Pantallas por segmento */}
        <Section label="Solución">
          <H2>Cada servicio, sus propias prioridades</H2>
          <Box mt="12">
            <H3>Pantallas por segmento: reglas de diseño</H3>
            <NumberedList items={rules} />
          </Box>
          <Box mt="14">
            <H3>Decisiones por segmento</H3>
            <NumberedList items={decisions} />
          </Box>

          <Reveal mt="16">
            <PlaceholderImage label="Imagen de las pantallas por segmento" />
          </Reveal>
        </Section>

        {/* Permisos */}
        <Section label="Solución">
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
        </Section>

        {/* Segunda oportunidad */}
        <Section label="Solución">
          <H2>Una segunda oportunidad para activar el IVR</H2>
          <Body mt="6">
            En la revisión con stakeholders surgió un caso nuevo: quienes rechazaron los permisos al entrar por primera vez. Diseñé una
            landing informativa, a la que se llega desde una notificación push, que muestra qué encontrarán y cómo activar los permisos.
          </Body>
          <Reveal mt="12">
            <PlaceholderImage label="Imagen de la landing informativa" />
          </Reveal>
        </Section>

        {/* Resultados */}
        <Section label="Resultados">
          <H2>Diseño aprobado y en desarrollo</H2>
          <Body mt="6">La propuesta abarca tres mejoras:</Body>

          <Grid mt="8" templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, minmax(0, 1fr))" }} gap="6">
            {improvements.map((it, i) => {
              const Icon = it.icon;
              return (
                <Card key={it.title} delay={i * 150}>
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                  <H3 size="bodyLgMedium" mt="4">
                    {it.title}
                  </H3>
                  <Body small mt="2">
                    {it.body}
                  </Body>
                </Card>
              );
            })}
          </Grid>

          <Body mt="8">
            Aunque las soluciones responden a oportunidades identificadas durante el análisis, estoy a la espera de métricas posteriores
            al lanzamiento que permitan comprobar su impacto.
          </Body>
        </Section>

        {/* Lo que aprendí */}
        <Section id="aprendizajes" label="Lo que aprendí">
          <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} columnGap="12" rowGap="10">
            {lessons.map((l, i) => (
              <Reveal key={l.title} display="flex" gap="4" delay={i * 150}>
                <Text textStyle="footnoteMedium" color="app.subtle">
                  0{i + 1}
                </Text>
                <Box>
                  <H3 size="headlineMedium">{l.title}</H3>
                  <Body small mt="2">
                    {l.body}
                  </Body>
                </Box>
              </Reveal>
            ))}
          </Grid>
        </Section>

        {/* Próximo caso de estudio (contenido de ejemplo: reemplazar título, texto, enlace e imagen) */}
        <Container id="siguiente">
          <Reveal>
            <Heading as="h2" textAlign="center" textStyle={{ base: "mh4", md: "h4" }}>
              Próximo caso de estudio
            </Heading>
            <Link
              href="#top"
              mt="10"
              display="grid"
              gridTemplateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }}
              overflow="hidden"
              bg="app.card"
              rounded={{ base: "24px", md: "32px" }}
              _hover={{ textDecoration: "none" }}
              role="group"
              className="group"
            >
              <Flex direction="column" justify="center" gap="6" p={{ base: 6, md: 12 }} order={{ base: 2, md: 1 }}>
                <Text textStyle="footnoteMedium" fontWeight="600" letterSpacing="0.04em" textTransform="uppercase" color="app.fg">
                  Empresa | 2024
                </Text>
                <Heading as="h3" textStyle={{ base: "mh4", md: "h4" }} lineHeight="1.15" color="app.fg">
                  Título del próximo caso de estudio
                </Heading>
                <Text textStyle="headline" color="app.muted">
                  Breve descripción del proyecto en una o dos líneas.
                </Text>
                <Flex
                  alignSelf="flex-start"
                  align="center"
                  gap="2"
                  px="6"
                  h="12"
                  rounded="full"
                  bg="app.button"
                  color="app.fg"
                  textStyle="footnoteMedium"
                  fontWeight="700"
                  letterSpacing="0.04em"
                  textTransform="uppercase"
                  transition="background 0.2s, transform 0.15s"
                  _groupHover={{ bg: "#52aed0" }}
                  _groupActive={{ bg: "#52aed0", transform: "scale(0.97)" }}
                >
                  Ver caso de estudio
                  <Box display="flex" transition="transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)" _groupHover={{ transform: "translateX(6px)" }}>
                    <ArrowRight size={16} aria-hidden />
                  </Box>
                </Flex>
              </Flex>
              <Flex bg="app.button" align="center" justify="center" p={{ base: 8, md: 12 }} minH="72" order={{ base: 1, md: 2 }}>
                <Flex w="full" maxW="sm" aspectRatio="4 / 3" bg="app.bg" rounded="24px" direction="column" align="center" justify="center" gap="2" color="app.subtle">
                  <ImageIcon size={32} strokeWidth={1.5} aria-hidden />
                  <Text textStyle="footnote">Imagen del próximo caso</Text>
                </Flex>
              </Flex>
            </Link>
          </Reveal>
        </Container>
      </Flex>

      <Separator borderColor="app.border" />
      <Flex as="footer" maxW="6xl" mx="auto" px="6" py="8" wrap="wrap" justify="space-between" gap="4" textStyle="footnote" color="app.subtle">
        <Text>Valentina Contreras © 2026</Text>
        <Text>UX/UI Designer</Text>
      </Flex>
    </Box>
  );
}

/* ---------- bloques reutilizables ---------- */

/* Lista numerada: número, título y descripción con el mismo estilo en todas las listas */
function NumberedList({ items }: { items: string[][] }) {
  return (
    <List.Root as="ol" listStyle="none" m="0" mt="6" gap="6" maxW="2xl">
      {items.map(([t, b], i) => (
        <List.Item key={t}>
          <Reveal display="flex" gap="4" delay={i * 90}>
            <Text textStyle="footnoteMedium" color="app.subtle" minW="6" flexShrink={0}>
              0{i + 1}
            </Text>
            <Box>
              <Text textStyle="bodyMedium">{t}</Text>
              <Text mt="1" textStyle="body" color="app.muted">
                {b}
              </Text>
            </Box>
          </Reveal>
        </List.Item>
      ))}
    </List.Root>
  );
}

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

function ProsCons({ heading, items, positive = false }: { heading: string; items: string[]; positive?: boolean }) {
  const Icon = positive ? Check : Minus;
  const tone = positive ? "app.positive" : "app.negative";
  return (
    <Box>
      <Text textStyle="bodyLgMedium" fontWeight="700" color={tone}>
        {heading}
      </Text>
      <List.Root listStyle="none" m="0" mt="4" gap="3">
        {items.map((t, i) => (
          <List.Item key={t}>
            <Reveal display="flex" gap="3" delay={i * 90}>
              <Box mt="1" flexShrink={0} color={tone}>
                <Icon size={18} strokeWidth={2.5} aria-hidden />
              </Box>
              <Text textStyle="body" color="app.muted">
                {t}
              </Text>
            </Reveal>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
