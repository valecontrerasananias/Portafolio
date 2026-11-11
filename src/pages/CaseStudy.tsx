import type { ReactNode } from "react";
import { Box, Flex, Grid, GridItem, Heading, Link, List, Separator, Text } from "@chakra-ui/react";
import { ArrowRight, Check, Image as ImageIcon, LayoutGrid, LayoutTemplate, Megaphone, Minus, ShieldCheck } from "lucide-react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { AbandonMock, IvrScreen, PermissionsMock, PushLandingMock, TransversalMock } from "../components/mocks";

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

const Body = ({ children, small, ...rest }: { children: ReactNode; small?: boolean; mt?: string }) => (
  <Text maxW="2xl" textStyle={small ? "body" : "bodyLg"} color="app.muted" {...rest}>
    {children}
  </Text>
);

/* Dato destacado: tarjeta con borde continuo; la cifra y su frase en negrita negra (contraste), el resto en gris */
const StatCard = ({ emoji, highlight, children, delay = 0 }: { emoji: string; highlight: string; children: ReactNode; delay?: number }) => (
  <Reveal h="full" delay={delay}>
  <Box rounded="container" borderWidth="1px" borderStyle="solid" borderColor="app.borderStrong" p={{ base: 6, md: 8 }} h="full">
    <Text fontSize="28px" lineHeight="1" mb="4" aria-hidden>
      {emoji}
    </Text>
    <Text textStyle="headline" color="app.muted">
      <Text as="span" fontWeight="700" color="app.fg">
        {highlight}
      </Text>{" "}
      {children}
    </Text>
  </Box>
  </Reveal>
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
      "Los stakeholders buscaban potenciar el uso del IVR para que más clientes pudieran resolver sus consultas a través de alternativas digitales, reduciendo la dependencia del call center.",
      "De 35.000 intercepciones al mes, el 55% abandonaba sin interactuar con pantallas de IVR y alrededor del 30% continuaba hacia la llamada.",
      "Esto motivó una revisión completa de la experiencia, desde la activación de permisos hasta las pantallas para clientes con servicio móvil, internet hogar y/o prepago que aparecen al marcar el 103, con el objetivo de identificar oportunidades para facilitar su uso.",
    ],
  },
  {
    title: "El resultado",
    paragraphs: [
      "Rediseñé la experiencia de IVR, simplificando la activación de permisos y reorganizando las alternativas de autogestión según las necesidades de cada servicio. La propuesta busca facilitar el acceso a alternativas de ayuda y reducir la dependencia de la atención telefónica.",
      "El diseño fue aprobado por stakeholders y se encuentra en desarrollo para Android.",
    ],
  },
  {
    title: "Mi rol",
    paragraphs: [
      "Lideré el diseño UX/UI de la propuesta, desde el análisis de datos y la evaluación de los flujos existentes hasta la reorganización de accesos de las pantallas por segmento de IVR, la mejora de textos de los permisos y el diseño de nuevas pantallas.",
    ],
  },
];

const insights = [
  {
    title: "La activación necesitaba mayor claridad",
    body: "Las instrucciones no siempre explicaban qué permisos debía habilitar el cliente y, según el dispositivo, el flujo podía finalizar sin confirmar su activación.",
  },
  {
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

const annotations = [
  { n: 1, title: "Alternativas destacadas", body: "Las dos más relevantes del segmento, con mayor peso visual.", x: 6, y: 22 },
  { n: 2, title: "Acceso unificado", body: "“Revisar” y “pagar boleta” en un solo acceso.", x: 94, y: 22 },
  { n: 3, title: "Mejorar la señal", body: "Segundo acceso más usado del segmento.", x: 94, y: 34 },
  { n: 4, title: "Solicitudes y reclamos", body: "Acceso nuevo para el motivo de llamada que no tenía respuesta.", x: 94, y: 49 },
  { n: 5, title: "WhatsApp como acción principal", body: "Refuerza el canal digital.", x: 94, y: 85 },
  { n: 6, title: "Continuar llamada", body: "Pasa a secundaria sin quitar la atención telefónica.", x: 94, y: 93 },
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

            <Box mt="12" bg="app.card" rounded={{ base: "24px", md: "32px" }} p={{ base: 6, md: 12 }}>
              <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} columnGap={{ md: 16 }} rowGap={{ base: 10, md: 12 }}>
                {overview.map(({ title, paragraphs }) => (
                  <Box key={title}>
                    <Text textStyle="bodyLgMedium" fontWeight="700" color="app.fg">
                      {title}
                    </Text>
                    <Flex direction="column" gap="4" mt="3">
                      {paragraphs.map((t) => (
                        <Text key={t} textStyle="body" color="app.muted">
                          {t}
                        </Text>
                      ))}
                    </Flex>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Reveal>

        </Container>

        {/* Contexto */}
        <Section label="Contexto">
          <Heading as="h2" maxW="3xl" textStyle="h5" color="app.fg">
            Cuando marcas el 103, la app puede ayudarte antes de que llames al call center.
          </Heading>
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
            <StatCard emoji="🚪" highlight="55% de los clientes abandonaba el flujo">sin interactuar con ninguna pantalla del IVR.</StatCard>
            <StatCard delay={150} emoji="📞" highlight="30% de los clientes seguía hacia la llamada">al call center.</StatCard>
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
              <Card key={h.title} delay={i * 150}>
                <H3 size="headlineMedium">
                  0{i + 1}. {h.title}
                </H3>
                <Body small mt="3">
                  {h.body}
                </Body>
              </Card>
            ))}
          </Grid>
        </Section>

        {/* Pantalla descartada */}
        <Section label="Una exploración descartada">
          <H2>Una pantalla de atajos, y por qué la descarté</H2>
          <Body mt="6">
            Con los datos de los tres segmentos usé IA para explorar una pantalla transversal: una sola vista con los accesos más usados
            de móvil, prepago y hogar. Menos opciones, menos tiempo de decisión (ley de Hick). Visualmente era limpia y tenía lógica.
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

          <Box mt="14">
            <Text textStyle="bodyLgMedium" fontWeight="700" color="app.fg">
              ¿Por qué descarté esta alternativa?
            </Text>
            <Body small mt="3">
              Aunque reducía la cantidad de opciones visibles y posiblemente el tiempo de elección (ley de Hick), presentaba una
              limitación importante: los clientes podían encontrarse con accesos que no correspondían a su servicio.
            </Body>
            <Body small mt="4">
              Conversando con desarrollo, se nos dijo que se podía identificar el servicio asociado al cliente, y se decidió junto con la
              PO mantener pantallas específicas para móvil, prepago y hogar, priorizando las opciones más relevantes para cada uno.
            </Body>
          </Box>
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

          <Iteration
            tag="Segunda oportunidad"
            title="Clientes que rechazaron los permisos"
            intro="En la revisión con stakeholders surgió un caso nuevo: quienes rechazaron los permisos al entrar por primera vez. Diseñé una landing informativa, a la que se llega desde una notificación push, que muestra qué encontrarán y cómo activar los permisos."
          >
            <Surface>
              <PushLandingMock />
            </Surface>
            <Flex mt="8" gap="4" align="flex-start">
              <Box mt="1" flexShrink={0} color="app.fg">
                <LayoutTemplate size={22} strokeWidth={1.5} aria-hidden />
              </Box>
              <Flex direction="column" gap="4">
                <Body small>
                  La pantalla presenta ejemplos de lo que puede encontrar y explica cómo activar los permisos para acceder a alternativas
                  de ayuda en pantalla si deciden marcar el 103.
                </Body>
                <Body small>
                  Esta solución amplió el alcance del proyecto, incorporando un nuevo punto de contacto para comunicar el valor de la
                  funcionalidad.
                </Body>
              </Flex>
            </Flex>
          </Iteration>
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
