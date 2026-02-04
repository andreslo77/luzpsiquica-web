// lib/legalDocs.ts
export const LEGAL_NORMAS = {
  title: "Normas y Privacidad",
  version: "2026-01-04",
  owner: "Claudia Loaiza",
  jurisdiction: "Colombia",
  email: "luzpsiquica1@gmail.com",
  whatsappNumberPretty: "+1 (813) 618-7770",
  whatsappNumberRaw: "+18136187770",
  sections: [
    {
      title: "1. Aceptación de términos",
      body:
        "Al usar la App, y al marcar la casilla de aceptación durante el registro, el usuario acepta las normas,\n" +
        "políticas, condiciones y uso operativo de la app aquí descritas. Estos documentos pueden consultarse en \n" +
        "cualquier momento desde esta sección legal.",
    },
    {
      title: "2. Naturaleza del servicio",
      body:
        "Luz Psíquica es una aplicación de entretenimiento y orientación personal. No ofrece asesoría médica,\n" +
        "psicológica, legal, financiera ni profesional. El usuario es responsable de sus decisiones.",
    },
    {
      title: "3. Cobro y pago por minutos",
      body:
        "El servicio se cobra al usuario y se liquida al psíquico exclusivamente con base en los minutos \n" +
        "efectivamente consumidos (hablados o texteados) dentro de la aplicación. La relación con los psíquicos \n" +
        "es de carácter independiente, por lo que no existen primas, prestaciones ni beneficios laborales. \n" +
        "La plataforma no realiza préstamos, anticipos ni adelantos, y no expide certificaciones laborales, \n" +
        "cartas para trámites financieros, subsidios o documentos similares.",
    },
    {
      title: "4. Prohibición de compartir información personal",
      body:
        "Está prohibido compartir información personal (teléfono, dirección, redes sociales, documentos, cuentas,\n" +
        "enlaces de pago u otros datos sensibles) entre clientes y psíquicos. También está prohibido sacar pagos o\n" +
        "conversaciones fuera de la App.",
    },
    {
      title: "5. Términos y condiciones",
      body:
        "El uso de Luz Psíquica está sujeto a reglas de convivencia, cumplimiento de normas internas y respeto.\n" +
        "La App podrá suspender o cerrar cuentas por razones operativas o de seguridad: fraude, abuso, acoso,\n" +
        "intento de elusión de controles, o incumplimiento de estas normas.",
    },
    {
      title: "6. Privacidad y tratamiento de datos",
      body:
        "La App trata datos mínimos necesarios para operar: identificación de cuenta, historial de sesiones, compras,\n" +
        "consumos de minutos y soporte. No se permite a usuarios intercambiar datos personales entre sí.\n" +
        "Los datos se usan para operación, soporte, seguridad antifraude y cumplimiento.",
    },
    {
      title: "7. Reembolsos (alto nivel)",
      body:
        "Los reembolsos (si aplican) se estudian bajo validación interna y controles antifraude. Si existen indicios\n" +
        "de fraude o abuso, la App podrá negar el reembolso. Cuando aplique, se evaluará el saldo de minutos no\n" +
        "consumidos y el historial de uso.",
    },
    {
      title: "8. Faltas graves",
      body:
        "Insultos, amenazas, pornografía, contenido sexual explícito, conductas contrarias a la moral y el respeto\n" +
        "implican cierre definitivo. En casos graves, la cuenta podrá cerrarse sin pagos acumulados cuando existan\n" +
        "evidencias internas suficientes de incumplimiento.",
    },
    {
      title: "9. Retiro voluntario del cliente",
      body:
        "El retiro voluntario debe reportarse con mínimo 5 días de anticipación. El dinero correspondiente\n" +
        "a minutos no consumidos podrá ser retribuido sujeto a validación interna y controles antifraude.",
    },
    {
      title: "10. Contacto",
      body:
        "Para cualquier duda, queja, reclamo o consulta sobre el funcionamiento de la app:",
    },
  ],
};

export const LEGAL_OPERATIVO = {
  title: "Documento Operativo",
  version: "1.1",
  date: "2026-01-07",
  platform: "Aplicación móvil Luz Psíquica",
  sections: [
    {
      heading: "1. Objeto del documento",
      body:
        "El presente Documento de Funcionamiento Operativo tiene como finalidad describir de manera clara, transparente y técnica el funcionamiento general de la plataforma Luz Psíquica, así como establecer las reglas operativas, técnicas y funcionales bajo las cuales se presta el servicio a clientes y psíquicos. Este documento forma parte integral del marco legal de la plataforma y es de obligatorio cumplimiento para todos los usuarios que utilicen la aplicación.",
    },
    {
      heading: "2. Descripción general de la plataforma",
      body:
        "Luz Psíquica es una plataforma digital que permite la comunicación entre clientes y psíquicos mediante servicios de chat y llamadas de voz, utilizando un sistema de minutos prepagados adquiridos por los clientes. Adicionalmente, la plataforma podrá ofrecer contenidos audiovisuales asociados a su actividad, con fines informativos, promocionales, comerciales o de posicionamiento de marca. La plataforma actúa como intermediaria tecnológica, proporcionando la infraestructura técnica, los sistemas de pago, el control de sesiones, la gestión de minutos y la liquidación económica correspondiente a los psíquicos.",
    },
    { heading: "3. Roles dentro de la plataforma", body: "" },
    {
      heading: "3.1 Cliente",
      body:
        "Usuario que adquiere minutos y accede a los servicios de consulta mediante chat o llamada.",
    },
    {
      heading: "3.2 Psíquico",
      body:
        "Usuario autorizado que presta servicios de consulta a los clientes y recibe una remuneración\n" +
        "económica según el tiempo efectivamente consumido.",
    },
    {
      heading: "3.3 Administrador",
      body:
        "Usuario encargado de la supervisión, validación, mantenimiento y operación general de la\n" +
        "plataforma.",
    },

    { heading: "4. Funcionamiento operativo del servicio", body: "" },
    {
      heading: "4.1 Registro y acceso",
      body:
        "• Los usuarios deben registrarse con información válida.\n" +
        "• Los clientes pueden crear cuenta y comprar minutos.\n" +
        "• Los psíquicos deben ser autorizados por la plataforma antes de prestar el servicio.",
    },
    {
      heading: "4.2 Compra de minutos",
      body:
        "• Los minutos se adquieren mediante pasarela de pago.\n" +
        "• Los minutos son prepagados y se consumen en sesiones.\n" +
        "• La plataforma define precios, paquetes, descuentos y reglas operativas.",
    },
    {
      heading: "4.3 Inicio de sesión y disponibilidad",
      body:
        "• El cliente selecciona un psíquico disponible.\n" +
        "• La sesión solo inicia si hay minutos suficientes adquiridos por parte del cliente\n" +
        "• La plataforma administra el control de tiempo y consumo.",
    },

    { heading: "5. Sesiones, consumo de minutos y control antifraude", body: "" },
    {
      heading: "5.1 Control de sesiones",
      body:
        "• El consumo se contabiliza por minuto en chat o llamada.\n" +
        "• El sistema cierra sesiones por inactividad o finalización.\n" +
        "• Se aplican controles para evitar usos anómalos o fraude.",
    },
    {
      heading: "5.2 Prohibición de intercambio de datos personales",
      body:
        "• Está prohibido intercambiar datos personales o de contacto.\n" +
        "• Está prohibido sacar la relación comercial fuera de la plataforma.\n" +
        "• El incumplimiento puede implicar suspensión o cierre.",
    },

    { heading: "6. Validación y funcionamiento del rol psíquico", body: "" },
    {
      heading: "6.1 Condiciones del psíquico",
      body:
        "• El psíquico debe ser aprobado por la plataforma.\n" +
        "• Debe operar bajo las reglas internas.\n" +
        "• Puede ser suspendido por incumplimientos, quejas o fraude.",
    },

    { heading: "7. Pago a psíquicos y liquidación económica", body: "" },
    {
      heading: "7.1 Liquidación económica",
      body:
        "• La plataforma realiza liquidación según minutos consumidos efectivamente.\n" +
        "• La remuneración se determina conforme a las reglas internas de la plataforma y al registro interno de las transacciones efectuadas.\n" +
        "• Los pagos se agrupan y ejecutan en ciclos definidos.",
    },

    { heading: "8. Activos sonoros, musicales y audiovisuales de la plataforma", body: "" },
    {
      heading: "8.1 Naturaleza de los activos",
      body:
        "La plataforma utiliza activos digitales que incluyen, entre otros:\n" +
        "• ringtones de llamadas entrantes\n" +
        "• sonidos de notificación y alertas del sistema\n" +
        "• música incorporada en contenidos audiovisuales\n" +
        "• videos promocionales, informativos o comerciales\n" +
        "Estos activos forman parte integral de la experiencia funcional, comunicativa y de marca\n" +
        "de Luz Psíquica.",
    },
    {
      heading: "8.2 Origen de los activos",
      body:
        "Los activos sonoros, musicales y audiovisuales utilizados por la plataforma:\n" +
        "• han sido creados específicamente para Luz Psíquica\n" +
        "• se desarrollan mediante procesos creativos propios, que pueden incluir el uso de herramientas de inteligencia artificial generativa, siempre bajo la dirección, control y curaduría de la plataforma\n" +
        "• no corresponden a obras musicales comerciales ni a contenidos audiovisuales de terceros con explotación independiente",
    },
    {
      heading: "8.3 Contenidos audiovisuales y difusión externa",
      body:
        "Los contenidos audiovisuales producidos por Luz Psíquica:\n" +
        "• pueden ser comercializados, distribuidos o difundidos dentro y fuera de la aplicación\n" +
        "• pueden publicarse en plataformas digitales y redes sociales\n" +
        "• pueden incluir música, imágenes, animaciones, textos y voces generadas o asistidas por inteligencia artificial\n" +
        "La difusión de estos contenidos no implica cesión de derechos a usuarios, psíquicos ni terceros.",
    },
    {
      heading: "8.4 Propiedad intelectual",
      body:
        "• Todos los activos sonoros, musicales y audiovisuales son propiedad exclusiva de Luz Psíquica, o cuentan con las licencias necesarias para su uso.\n" +
        "• No son personalizables por los usuarios.\n" +
        "• No pueden ser extraídos, reutilizados, distribuidos, revendidos ni explotados fuera de la plataforma sin autorización expresa y escrita.",
    },
    {
      heading: "8.5 Finalidad de uso",
      body:
        "Los activos descritos:\n" +
        "• cumplen una función técnica, operativa, comunicativa y comercial\n" +
        "• no constituyen obras artísticas independientes para explotación individual\n" +
        "• no generan derechos económicos, autorales ni de participación para los usuarios o psíquicos",
    },

    {
      heading: "9. Limitaciones técnicas y operativas",
      body:
        "• La plataforma depende de conectividad a internet.\n" +
        "• Fallos técnicos, interrupciones de red o mantenimiento pueden afectar temporalmente el servicio.\n" +
        "• Luz Psíquica no garantiza disponibilidad continua e ininterrumpida.",
    },
    {
      heading: "10. Modificaciones del servicio",
      body:
        "Luz Psíquica se reserva el derecho de:\n" +
        "• modificar funcionalidades\n" +
        "• ajustar reglas operativas\n" +
        "• actualizar sistemas de pago, comunicación o contenidos\n" +
        "Estas modificaciones podrán realizarse para mejorar la experiencia del usuario o por razones técnicas, legales u operativas.",
    },
    {
      heading: "11. Aceptación del documento",
      body:
        "El uso de la plataforma implica la aceptación expresa de este Documento de\n" +
        "Funcionamiento Operativo, así como de los demás documentos legales asociados.",
    },
    {
      heading: "12. Información adicional",
      body:
        "Responsable del desarrollo tecnológico de la plataforma:\n" +
        "Andrés Loaiza\n" +
        "El diseño, desarrollo técnico, arquitectura funcional y operación tecnológica de la plataforma Luz Psíquica han sido realizados bajo la dirección del responsable mencionado, en coordinación con los objetivos, principios éticos y lineamientos operativos de la plataforma.\n" +
        "Nota final\n" +
        "Este documento se publica como parte del compromiso de Luz Psíquica con la transparencia, la ética tecnológica, la creatividad responsable y la claridad operativa.",
    },
  ],
};