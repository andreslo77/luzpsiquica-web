// lib/legalDocs.i18n.ts
import type { Lang } from "./i18n";

export type LegalSection = { title: string; body: string };
export type LegalDoc = {
  title: string;
  version: string;
  owner?: string;
  jurisdiction?: string;
  date?: string;
  platform?: string;
  email?: string;
  whatsappNumberPretty?: string;
  whatsappNumberRaw?: string;
  sections: LegalSection[];
};

export const LEGAL_DOCS: Record<
  Lang,
  {
    NORMAS: LegalDoc;
    OPERATIVO: LegalDoc;
  }
> = {
  es: {
    NORMAS: {
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
            "Al registrarse y utilizar la aplicación, y mediante la marcación expresa de la casilla de aceptación correspondiente, el usuario declara haber leído, comprendido y aceptado de forma íntegra y voluntaria las normas, políticas, condiciones y disposiciones de uso operativo de la plataforma aquí descritas.\n\n" +
            "La aceptación de estos términos constituye un requisito indispensable y vinculante para el acceso, registro y uso de la aplicación. En caso de no estar de acuerdo con cualquiera de las disposiciones aquí establecidas, el usuario deberá abstenerse de registrarse o utilizar la plataforma.\n\n" +
            "Los documentos legales, incluyendo Normas y Privacidad y el Documento de Funcionamiento Operativo de la Plataforma, podrán ser consultados en cualquier momento desde esta sección legal.\n",
        },
        {
          title: "2. Naturaleza del servicio",
          body:
            "Luz Psíquica es una aplicación de entretenimiento y orientación personal, cuyo contenido y servicios tienen un carácter exclusivamente informativo y recreativo.\n\n" +
            "La plataforma no ofrece, ni pretende ofrecer, asesoría médica, psicológica, psiquiátrica, legal, financiera, terapéutica ni ningún otro tipo de asesoramiento profesional regulado. La información, opiniones o interacciones generadas dentro de la aplicación no sustituyen, bajo ninguna circunstancia, la consulta con profesionales debidamente certificados en las áreas correspondientes.\n\n" +
            "El usuario reconoce y acepta que el uso de la plataforma se realiza bajo su exclusiva responsabilidad, y que cualquier decisión tomada a partir del contenido o de las interacciones mantenidas en Luz Psíquica es asumida íntegramente por el propio usuario, conforme a las directrices y condiciones establecidas por la plataforma.\n",
        },
        {
          title: "3. Cobro y pago por minutos",
          body:
            "Los servicios ofrecidos dentro de Luz Psíquica se cobran al usuario y se liquidan al psíquico exclusivamente con base en los minutos efectivamente consumidos por concepto de comunicación, ya sea mediante conversación hablada o intercambio de mensajes de texto, realizados dentro de la aplicación.\n\n" +
            "No se reconocerán pagos por tiempo de espera, disponibilidad, conexión activa sin consumo efectivo, resultados obtenidos, promesas, expectativas ni por cualquier otro concepto distinto al uso real, medible y verificable del servicio dentro de la plataforma.\n\n" +
            "Todas las transacciones económicas realizadas dentro de la aplicación se gestionan a través de la plataforma de pagos PayPal, de conformidad con sus propios términos, condiciones y políticas de uso. Luz Psíquica no almacena, procesa ni gestiona directamente información financiera sensible de los usuarios o de los psíquicos.\n\n" +
            "En razón de lo anterior, y al no estar legalmente autorizada para ello, la plataforma no solicita ni está obligada a solicitar, almacenar o verificar números de cuentas bancarias, tarjetas de crédito, tarjetas débito u otros datos financieros personales. El uso de los medios de pago se rige exclusivamente por las condiciones establecidas por PayPal.\n\n" +
            "La relación entre Luz Psíquica y los psíquicos es de carácter estrictamente independiente. En consecuencia, no existe vínculo laboral alguno, ni relación de subordinación, ni obligación de pago de primas, prestaciones sociales, beneficios laborales, indemnizaciones o compensaciones de naturaleza similar.\n\n" +
            "La plataforma no realiza préstamos, anticipos, adelantos de dinero ni garantías de ingresos, y no expide certificaciones laborales, constancias de ingresos, cartas para trámites financieros, subsidios, avales ni documentos de naturaleza análoga.\n\n" +
            "Los minutos consumidos son calculados mediante los sistemas técnicos de medición de la plataforma. En caso de presentarse ajustes técnicos, fallos de conexión, interrupciones del servicio o discrepancias en la medición del tiempo consumido, los registros internos de Luz Psíquica prevalecerán como referencia válida. Cualquier reclamación relacionada con la medición de minutos deberá realizarse conforme a los canales y procedimientos establecidos por la plataforma, sin que ello implique reconocimiento automático de reembolsos, compensaciones o pagos adicionales.\n",
        },
        {
          title: "4. Prohibición de compartir información personal",
          body:
            "Con el fin de proteger la seguridad, la privacidad y el correcto funcionamiento de la plataforma, queda estrictamente prohibido el intercambio de información personal o sensible entre clientes y psíquicos dentro o fuera de la aplicación.\n\n" +
            "Se considera información personal, de manera enunciativa y no limitativa, cualquier dato que permita la identificación, contacto o localización de una persona, incluyendo números de teléfono, direcciones físicas, direcciones de correo electrónico, perfiles en redes sociales, documentos de identidad, datos bancarios, números de cuentas, enlaces de pago, medios de contacto externo u otros datos de naturaleza similar.\n\n" +
            "Asimismo, queda expresamente prohibido trasladar conversaciones, acuerdos, pagos o cualquier tipo de interacción fuera de la aplicación, así como intentar eludir los sistemas de comunicación y pago habilitados por Luz Psíquica.\n\n" +
            "Esta prohibición aplica de manera obligatoria tanto para los clientes como para los psíquicos, y su incumplimiento podrá dar lugar a las medidas correctivas previstas en las normas y condiciones de la plataforma.\n",
        },
        {
          title: "5. Términos y condiciones",
          body:
            "El uso de Luz Psíquica está sujeto al cumplimiento de normas de convivencia, respeto mutuo y observancia de las disposiciones internas establecidas por la plataforma, las cuales tienen como finalidad garantizar un entorno seguro, funcional y adecuado para todos los usuarios.\n\n" +
            "Luz Psíquica se reserva el derecho de suspender temporalmente o cancelar de forma definitiva cuentas de usuarios o psíquicos cuando existan razones operativas, técnicas o de seguridad que lo justifiquen, incluyendo, de manera enunciativa y no limitativa, situaciones de fraude, abuso, acoso, comportamiento inapropiado, uso indebido de la plataforma, intento de elusión de controles internos, o incumplimiento de las normas, políticas y condiciones aquí establecidas.\n\n" +
            "Las medidas adoptadas tendrán un carácter preventivo o correctivo, según el caso, y se aplicarán con el fin de proteger la integridad de la plataforma, a sus usuarios y al correcto funcionamiento de los servicios, sin que ello genere derecho a indemnización, compensación o reclamación alguna frente a Luz Psíquica.\n",
        },
        {
          title: "6. Privacidad y tratamiento de datos",
          body:
            "Luz Psíquica trata únicamente los datos personales mínimos y estrictamente necesarios para el funcionamiento operativo de la plataforma, incluyendo, de manera enunciativa y no limitativa, la identificación de la cuenta, el historial de sesiones, las compras realizadas, el consumo de minutos y la gestión de solicitudes de soporte.\n\n" +
            "En ningún caso se permite a los usuarios intercambiar datos personales entre sí, ni acceder a información personal de otros usuarios o psíquicos, fuera de los mecanismos estrictamente necesarios para la prestación del servicio dentro de la aplicación.\n\n" +
            "Los datos tratados por la plataforma se utilizan exclusivamente para fines operativos, de soporte técnico, seguridad, prevención de fraude, mejora del servicio y cumplimiento de obligaciones legales o regulatorias aplicables. Luz Psíquica no comercializa, vende ni cede datos personales a terceros con fines ajenos a la operación de la plataforma.\n\n" +
            "El tratamiento de los datos se realiza conforme a los principios de legalidad, finalidad, proporcionalidad y seguridad, adoptando las medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, uso indebido o pérdida.\n",
        },
        {
          title: "7. Limitación de responsabilidad",
          body:
            "Luz Psíquica presta sus servicios en la forma y condiciones descritas en la plataforma, sin otorgar garantías expresas o implícitas sobre resultados, exactitud, expectativas personales o consecuencias derivadas del uso de la aplicación.\n\n" +
            "La plataforma no será responsable por decisiones, acciones, omisiones, interpretaciones o resultados derivados directa o indirectamente del uso de los contenidos, servicios o interacciones realizadas dentro de la aplicación, los cuales son asumidos bajo la exclusiva responsabilidad del usuario.\n\n" +
            "Luz Psíquica tampoco será responsable por interrupciones del servicio, errores técnicos, fallos de conectividad, indisponibilidad temporal de la plataforma, pérdida de información, ajustes de medición de minutos, ni por daños directos o indirectos que se deriven de causas técnicas, operativas o de fuerza mayor.\n\n" +
            "En ningún caso la responsabilidad de Luz Psíquica excederá el valor efectivamente pagado por el usuario dentro de la aplicación por los servicios objeto de reclamación, ni dará lugar a indemnizaciones por daños morales, lucro cesante, pérdida de oportunidades, expectativas no cumplidas u otros perjuicios indirectos.\n",
        },
        {
          title: "8. Reembolsos",
          body:
            "Los reembolsos, en caso de aplicar, no son automáticos ni garantizados y estarán sujetos a un proceso de revisión y validación interna por parte de Luz Psíquica, de conformidad con sus controles operativos y mecanismos de prevención de fraude y abuso.\n\n" +
            "La plataforma se reserva el derecho de negar total o parcialmente cualquier solicitud de reembolso cuando existan indicios de uso indebido, fraude, abuso del sistema, intento de elusión de controles, incumplimiento de las normas de la plataforma o comportamientos contrarios a los términos y condiciones establecidos.\n\n" +
            "Cuando un reembolso sea considerado procedente, la evaluación se realizará teniendo en cuenta, entre otros factores, el saldo de minutos no consumidos, el historial de uso del usuario, el tiempo efectivo de utilización del servicio y los registros internos de la plataforma.\n\n" +
            "Las decisiones relacionadas con reembolsos se adoptarán con criterios operativos, técnicos y de seguridad, y no generarán derecho a compensaciones adicionales, intereses, indemnizaciones ni reclamaciones distintas al alcance del reembolso eventualmente concedido.\n",
        },
        {
          title: "9. Faltas graves",
          body:
            "Se consideran faltas graves, de manera enunciativa y no limitativa, los comportamientos que vulneren de forma grave la seguridad, el respeto, la legalidad o la convivencia dentro de la plataforma, incluyendo insultos, amenazas, acoso, difusión de pornografía, contenido sexual explícito, conductas ofensivas, discriminatorias o contrarias a la moral, al orden público y al respeto entre las personas.\n\n" +
            "La comisión de faltas graves podrá dar lugar al cierre definitivo e inmediato de la cuenta del usuario o del psíquico, sin necesidad de advertencia previa, cuando así lo justifiquen la gravedad de los hechos, la reiteración de la conducta o los riesgos para otros usuarios o para la integridad de la plataforma.\n\n" +
            "En los casos de especial gravedad, y cuando existan evidencias internas suficientes y verificables de incumplimiento de las normas, Luz Psíquica podrá proceder al cierre definitivo de la cuenta sin reconocimiento de pagos, saldos acumulados, beneficios pendientes o compensaciones de cualquier naturaleza, sin perjuicio de las acciones legales que pudieran corresponder.\n",
        },
        {
          title: "10. Retiro voluntario del cliente",
          body:
            "El cliente podrá solicitar su retiro voluntario de la plataforma, el cual deberá ser comunicado con una antelación mínima de cinco (5) días calendario.\n\n" +
            "El eventual reembolso del valor correspondiente a minutos no consumidos no es automático ni garantizado, y estará sujeto a un proceso de revisión y validación interna por parte de Luz Psíquica, de conformidad con sus controles operativos y mecanismos de prevención de fraude y abuso.\n\n" +
            "La solicitud de retiro voluntario y su eventual validación no dará lugar a compensaciones adicionales, intereses, indemnizaciones ni reclamaciones distintas al alcance del reembolso que, en caso de proceder, sea aprobado por la plataforma.\n",
        },
        {
          title: "11. Uso de tecnologías incorporadas del dispositivo",
          body:
            "La aplicación Luz Psíquica podrá solicitar acceso a determinadas tecnologías incorporadas del dispositivo del usuario, tales como la cámara y el micrófono, únicamente cuando el propio usuario decida utilizarlas de manera voluntaria dentro de las funcionalidades disponibles de la aplicación.\n\n" +
            "El acceso a la cámara se solicita exclusivamente cuando el usuario opta por subir una imagen, por ejemplo, una fotografía de perfil. El acceso al micrófono se utiliza únicamente durante las interacciones de comunicación por voz dentro de la plataforma. En ningún caso la aplicación utiliza funciones de grabación de video.\n\n" +
            "La aplicación no utiliza la cámara ni el micrófono en segundo plano, ni accede a estas tecnologías sin la interacción directa y el consentimiento explícito del usuario. Asimismo, Luz Psíquica no captura imágenes, audio ni ningún otro contenido sin la autorización expresa del usuario.\n\n" +
            "Las imágenes y audios proporcionados por el usuario se utilizan exclusivamente para fines funcionales y operativos dentro de la aplicación y no se comparten con terceros sin autorización expresa del usuario, salvo cuando sea estrictamente necesario para la prestación del servicio conforme a las condiciones de la plataforma.\n\n" +
            "El usuario podrá revocar en cualquier momento los permisos otorgados a la cámara y al micrófono desde la configuración del sistema operativo de su dispositivo, lo cual podrá limitar o impedir el uso de determinadas funcionalidades de la aplicación.\n",
        },
        {
          title: "12. Contacto",
          body:
            "Para cualquier duda, queja, reclamo o consulta relacionada con el funcionamiento de la aplicación, el usuario podrá comunicarse con Luz Psíquica a través de los canales de contacto habilitados dentro de la plataforma.\n\n" +
            "Las comunicaciones recibidas serán atendidas conforme a los procedimientos internos de la aplicación y dentro de los plazos razonables, según la naturaleza de la solicitud.\n",
        },
      ],
    },

    OPERATIVO: {
      title: "Documento de Funcionamiento Operativo de la Plataforma",
      version: "1.1",
      date: "2026-01-07",
      platform: "Aplicación móvil Luz Psíquica",
      // Si quieres, aquí puedes poner los mismos datos de contacto que en NORMAS
      email: "luzpsiquica1@gmail.com",
      whatsappNumberPretty: "+1 (813) 618-7770",
      whatsappNumberRaw: "+18136187770",
      sections: [
        {
          title: "1. Objeto del documento",
          body:
            "El presente Documento de Funcionamiento Operativo tiene como finalidad describir de manera clara, transparente y técnica el funcionamiento general de la plataforma Luz Psíquica, así como establecer las reglas operativas, técnicas y funcionales bajo las cuales se presta el servicio a clientes y psíquicos. Este documento forma parte integral del marco legal de la plataforma y es de obligatorio cumplimiento para todos los usuarios que utilicen la aplicación.",
        },
        {
          title: "2. Descripción general de la plataforma",
          body:
            "Luz Psíquica es una plataforma digital que permite la comunicación entre clientes y psíquicos mediante servicios de chat y llamadas de voz, utilizando un sistema de minutos prepagados adquiridos por los clientes. Adicionalmente, la plataforma podrá ofrecer contenidos audiovisuales asociados a su actividad, con fines informativos, promocionales, comerciales o de posicionamiento de marca. La plataforma actúa como intermediaria tecnológica, proporcionando la infraestructura técnica, los sistemas de pago, el control de sesiones, la gestión de minutos y la liquidación económica correspondiente a los psíquicos.",
        },
        { title: "3. Roles dentro de la plataforma", body: "" },
        {
          title: "3.1 Cliente",
          body: "Usuario que adquiere minutos y accede a los servicios de consulta mediante chat o llamada.",
        },
        {
          title: "3.2 Psíquico",
          body:
            "Usuario autorizado que presta servicios de consulta a los clientes y recibe una remuneración\neconómica según el tiempo efectivamente consumido.",
        },
        {
          title: "3.3 Administrador",
          body:
            "Usuario encargado de la supervisión, validación, mantenimiento y operación general de la\nplataforma.",
        },

        { title: "4. Funcionamiento operativo del servicio", body: "" },
        {
          title: "4.1 Registro y acceso",
          body:
            "• Los usuarios deben registrarse con información válida.\n" +
            "• Los clientes pueden crear cuenta y comprar minutos.\n" +
            "• Los psíquicos deben ser autorizados por la plataforma antes de prestar el servicio.",
        },
        {
          title: "4.2 Compra de minutos",
          body:
            "• Los minutos se adquieren mediante pasarela de pago.\n" +
            "• Los minutos son prepagados y se consumen en sesiones.\n" +
            "• La plataforma define precios, paquetes, descuentos y reglas operativas.",
        },
        {
          title: "4.3 Inicio de sesión y disponibilidad",
          body:
            "• El cliente selecciona un psíquico disponible.\n" +
            "• La sesión solo inicia si hay minutos suficientes adquiridos por parte del cliente\n" +
            "• La plataforma administra el control de tiempo y consumo.",
        },

        { title: "5. Sesiones, consumo de minutos y control antifraude", body: "" },
        {
          title: "5.1 Control de sesiones",
          body:
            "• El consumo se contabiliza por minuto en chat o llamada.\n" +
            "• El sistema cierra sesiones por inactividad o finalización.\n" +
            "• Se aplican controles para evitar usos anómalos o fraude.",
        },
        {
          title: "5.2 Prohibición de intercambio de datos personales",
          body:
            "• Está prohibido intercambiar datos personales o de contacto.\n" +
            "• Está prohibido sacar la relación comercial fuera de la plataforma.\n" +
            "• El incumplimiento puede implicar suspensión o cierre.",
        },

        { title: "6. Validación y funcionamiento del rol psíquico", body: "" },
        {
          title: "6.1 Condiciones del psíquico",
          body:
            "• El psíquico debe ser aprobado por la plataforma.\n" +
            "• Debe operar bajo las reglas internas.\n" +
            "• Puede ser suspendido por incumplimientos, quejas o fraude.",
        },

        { title: "7. Pago a psíquicos y liquidación económica", body: "" },
        {
          title: "7.1 Liquidación económica",
          body:
            "• La plataforma realiza liquidación según minutos consumidos efectivamente.\n" +
            "• La remuneración se determina conforme a las reglas internas de la plataforma y al registro interno de las transacciones efectuadas.\n" +
            "• Los pagos se agrupan y ejecutan en ciclos definidos.",
        },

        { title: "8. Activos sonoros, musicales y audiovisuales de la plataforma", body: "" },
        {
          title: "8.1 Naturaleza de los activos",
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
          title: "8.2 Origen de los activos",
          body:
            "Los activos sonoros, musicales y audiovisuales utilizados por la plataforma:\n" +
            "• han sido creados específicamente para Luz Psíquica\n" +
            "• se desarrollan mediante procesos creativos propios, que pueden incluir el uso de herramientas de inteligencia artificial generativa, siempre bajo la dirección, control y curaduría de la plataforma\n" +
            "• no corresponden a obras musicales comerciales ni a contenidos audiovisuales de terceros con explotación independiente",
        },
        {
          title: "8.3 Contenidos audiovisuales y difusión externa",
          body:
            "Los contenidos audiovisuales producidos por Luz Psíquica:\n" +
            "• pueden ser comercializados, distribuidos o difundidos dentro y fuera de la aplicación\n" +
            "• pueden publicarse en plataformas digitales y redes sociales\n" +
            "• pueden incluir música, imágenes, animaciones, textos y voces generadas o asistidas por inteligencia artificial\n" +
            "La difusión de estos contenidos no implica cesión de derechos a usuarios, psíquicos ni terceros.",
        },
        {
          title: "8.4 Propiedad intelectual",
          body:
            "• Todos los activos sonoros, musicales y audiovisuales son propiedad exclusiva de Luz Psíquica, o cuentan con las licencias necesarias para su uso.\n" +
            "• No son personalizables por los usuarios.\n" +
            "• No pueden ser extraídos, reutilizados, distribuidos, revendidos ni explotados fuera de la plataforma sin autorización expresa y escrita.",
        },
        {
          title: "8.5 Finalidad de uso",
          body:
            "Los activos descritos:\n" +
            "• cumplen una función técnica, operativa, comunicativa y comercial\n" +
            "• no constituyen obras artísticas independientes para explotación individual\n" +
            "• no generan derechos económicos, autorales ni de participación para los usuarios o psíquicos",
        },

        {
          title: "9. Limitaciones técnicas y operativas",
          body:
            "• La plataforma depende de conectividad a internet.\n" +
            "• Fallos técnicos, interrupciones de red o mantenimiento pueden afectar temporalmente el servicio.\n" +
            "• Luz Psíquica no garantiza disponibilidad continua e ininterrumpida.",
        },
        {
          title: "10. Modificaciones del servicio",
          body:
            "Luz Psíquica se reserva el derecho de:\n" +
            "• modificar funcionalidades\n" +
            "• ajustar reglas operativas\n" +
            "• actualizar sistemas de pago, comunicación o contenidos\n" +
            "Estas modificaciones podrán realizarse para mejorar la experiencia del usuario o por razones técnicas, legales u operativas.",
        },
        {
          title: "11. Aceptación del documento",
          body:
            "El uso de la plataforma implica la aceptación expresa de este Documento de\n" +
            "Funcionamiento Operativo, así como de los demás documentos legales asociados.",
        },
        {
          title: "12. Información adicional",
          body:
            "Responsable del desarrollo tecnológico de la plataforma:\n" +
            "Andrés Loaiza\n" +
            "El diseño, desarrollo técnico, arquitectura funcional y operación tecnológica de la plataforma Luz Psíquica han sido realizados bajo la dirección del responsable mencionado, en coordinación con los objetivos, principios éticos y lineamientos operativos de la plataforma.\n" +
            "Nota final\n" +
            "Este documento se publica como parte del compromiso de Luz Psíquica con la transparencia, la ética tecnológica, la creatividad responsable y la claridad operativa.",
        },
      ],
    },
  },

  en: {
    NORMAS: {
      title: "Rules & Privacy",
      version: "2026-01-04",
      owner: "Claudia Loaiza",
      jurisdiction: "Colombia",
      email: "luzpsiquica1@gmail.com",
      whatsappNumberPretty: "+1 (813) 618-7770",
      whatsappNumberRaw: "+18136187770",
      sections: [
        {
          title: "1. Acceptance of Terms",
          body:
            "By registering and using the application, and by expressly checking the corresponding acceptance box, the user declares that they have read, understood, and voluntarily accepted in full the rules, policies, conditions, and operational use provisions of the platform described herein.\n\n" +
            "Acceptance of these terms constitutes a mandatory and binding requirement for access to, registration on, and use of the application. If the user does not agree with any of the provisions set forth herein, they must refrain from registering or using the platform.\n\n" +
            "The legal documents, including Norms and Privacy and the Operational Functioning Document of the Platform, may be consulted at any time from this legal section.\n",
        },
        {
          title: "2. Nature of the service",
          body:
            "Luz Psíquica is an application for entertainment and personal guidance, whose content and services are exclusively informative and recreational in nature.\n\n" +
            "The platform does not offer, nor does it intend to offer, medical, psychological, psychiatric, legal, financial, therapeutic, or any other type of regulated professional advice. The information, opinions, or interactions generated within the application do not, under any circumstances, replace consultation with duly licensed professionals in the corresponding fields.\n\n" +
            "The user acknowledges and accepts that the use of the platform is carried out under their sole responsibility, and that any decision made based on the content or interactions within Luz Psíquica is assumed entirely by the user, in accordance with the guidelines and conditions established by the platform.\n",
        },
        {
          title: "3. Charging and payment by minutes",
          body:
            "The services offered within Luz Psíquica are charged to the user and settled with the psychic exclusively on the basis of the minutes effectively consumed for communication, whether through spoken conversation or exchange of text messages, carried out within the application.\n\n" +
            "No payments shall be recognized for waiting time, availability, active connection without effective consumption, obtained results, promises, expectations, or for any concept other than the real, measurable, and verifiable use of the service within the platform.\n\n" +
            "All financial transactions carried out within the application are managed through the PayPal payment platform, in accordance with its own terms, conditions, and usage policies. Luz Psíquica does not store, process, or directly manage sensitive financial information of users or psychics.\n\n" +
            "For this reason, and as it is not legally authorized to do so, the platform does not request nor is it obliged to request, store, or verify bank account numbers, credit card numbers, debit card numbers, or other personal financial data. The use of payment methods is governed exclusively by the conditions established by PayPal.\n\n" +
            "The relationship between Luz Psíquica and the psychics is strictly independent in nature. Consequently, there is no employment relationship, no subordination, and no obligation to pay bonuses, employment benefits, social benefits, indemnities, or any compensation of a similar nature.\n\n" +
            "The platform does not grant loans, advances, prepayments, or income guarantees, and does not issue employment certificates, income statements, letters for financial procedures, subsidies, guarantees, or documents of a similar nature.\n\n" +
            "The minutes consumed are calculated through the technical measurement systems of the platform. In the event of technical adjustments, connection failures, service interruptions, or discrepancies in time measurement, the internal records of Luz Psíquica shall prevail as the valid reference. Any claim related to minute measurement must be submitted through the channels and procedures established by the platform, without implying automatic recognition of refunds, compensations, or additional payments.\n",
        },
        {
          title: "4. Prohibition on sharing personal information",
          body:
            "In order to protect the security, privacy, and proper functioning of the platform, the exchange of personal or sensitive information between clients and psychics, whether inside or outside the application, is strictly prohibited.\n\n" +
            "Personal information is understood, by way of example and not limitation, as any data that allows the identification, contact, or location of a person, including telephone numbers, physical addresses, email addresses, social media profiles, identity documents, banking data, account numbers, payment links, external contact methods, or other data of a similar nature.\n\n" +
            "Likewise, it is expressly prohibited to move conversations, agreements, payments, or any type of interaction outside the application, as well as to attempt to circumvent the communication and payment systems enabled by Luz Psíquica.\n\n" +
            "This prohibition applies equally and mandatorily to both clients and psychics, and its violation may give rise to the corrective measures provided for in the platform’s rules and conditions.\n",
        },
        {
          title: "5. Terms and conditions",
          body:
            "The use of Luz Psíquica is subject to compliance with rules of coexistence, mutual respect, and observance of the internal provisions established by the platform, which are intended to ensure a safe, functional, and appropriate environment for all users.\n\n" +
            "Luz Psíquica reserves the right to temporarily suspend or permanently terminate user or psychic accounts when operational, technical, or security reasons so require, including, by way of example and not limitation, situations involving fraud, abuse, harassment, inappropriate behavior, improper use of the platform, attempts to circumvent internal controls, or non-compliance with the rules, policies, and conditions set forth herein.\n\n" +
            "The measures adopted shall be preventive or corrective in nature, as applicable, and shall be applied for the purpose of protecting the integrity of the platform, its users, and the proper functioning of the services, without giving rise to any right to compensation, indemnification, or claim against Luz Psíquica.\n",
        },
        {
          title: "6. Privacy and data processing",
          body:
            "Luz Psíquica processes only the minimum and strictly necessary personal data required for the operational functioning of the platform, including, by way of example and not limitation, account identification, session history, purchases made, minute consumption, and the management of support requests.\n\n" +
            "Under no circumstances are users permitted to exchange personal data with one another or to access personal information of other users or psychics, except through the mechanisms strictly necessary for the provision of the service within the application.\n\n" +
            "The data processed by the platform is used exclusively for operational purposes, technical support, security, fraud prevention, service improvement, and compliance with applicable legal or regulatory obligations. Luz Psíquica does not commercialize, sell, or transfer personal data to third parties for purposes unrelated to the operation of the platform.\n\n" +
            "Data processing is carried out in accordance with the principles of lawfulness, purpose limitation, proportionality, and security, adopting reasonable technical and organizational measures to protect information against unauthorized access, misuse, or loss.\n",
        },
        {
          title: "7. Limitation of liability",
          body:
            "Luz Psíquica provides its services in the manner and under the conditions described on the platform, without granting any express or implied warranties regarding results, accuracy, personal expectations, or consequences derived from the use of the application.\n\n" +
            "The platform shall not be liable for decisions, actions, omissions, interpretations, or outcomes derived directly or indirectly from the use of the content, services, or interactions carried out within the application, which are assumed under the sole responsibility of the user.\n\n" +
            "Luz Psíquica shall also not be liable for service interruptions, technical errors, connectivity failures, temporary unavailability of the platform, loss of information, minute measurement adjustments, or for any direct or indirect damages arising from technical, operational, or force majeure causes.\n\n" +
            "In no event shall Luz Psíquica’s liability exceed the amount effectively paid by the user within the application for the services subject to the claim, nor shall it give rise to compensation for non-material damages, loss of profits, loss of opportunities, unmet expectations, or other indirect damages.\n",
        },
        {
          title: "8. Refunds",
          body:
            "Refunds, where applicable, are not automatic nor guaranteed and are subject to an internal review and validation process carried out by Luz Psíquica, in accordance with its operational controls and fraud and abuse prevention mechanisms.\n\n" +
            "The platform reserves the right to deny, in whole or in part, any refund request where there are indications of improper use, fraud, system abuse, attempts to circumvent controls, non-compliance with platform rules, or behavior contrary to the established terms and conditions.\n\n" +
            "When a refund is deemed applicable, the evaluation shall take into account, among other factors, the balance of unused minutes, the user’s usage history, the effective time of service utilization, and the platform’s internal records.\n\n" +
            "Decisions related to refunds are made based on operational, technical, and security criteria and shall not give rise to additional compensation, interest, indemnification, or claims beyond the scope of the refund, if any, granted.\n",
        },
        {
          title: "9. Serious violations",
          body:
            "Serious violations are understood, by way of example and not limitation, as behaviors that seriously undermine safety, respect, legality, or coexistence within the platform, including insults, threats, harassment, dissemination of pornography, explicit sexual content, offensive or discriminatory conduct, or actions contrary to morality, public order, and mutual respect.\n\n" +
            "The commission of serious violations may result in the immediate and permanent termination of the user’s or psychic’s account, without prior notice, when justified by the seriousness of the facts, repeated conduct, or risks posed to other users or to the integrity of the platform.\n\n" +
            "In cases of particular severity, and where sufficient and verifiable internal evidence of non-compliance with the rules exists, Luz Psíquica may proceed with the definitive closure of the account without recognition of payments, accumulated balances, pending benefits, or compensation of any kind, without prejudice to any legal actions that may be applicable.\n",
        },
        {
          title: "10. Voluntary withdrawal by the client",
          body:
            "The client may request voluntary withdrawal from the platform, which must be communicated with a minimum of five (5) calendar days’ prior notice.\n\n" +
            "Any potential refund corresponding to unused minutes is neither automatic nor guaranteed and shall be subject to an internal review and validation process carried out by Luz Psíquica, in accordance with its operational controls and fraud and abuse prevention mechanisms.\n\n" +
            "The voluntary withdrawal request and its potential validation shall not give rise to additional compensation, interest, indemnification, or claims beyond the scope of any refund that may be approved by the platform.\n",
        },
        {
          title: "11. Use of built-in device technologies",
          body:
            "The Luz Psíquica application may request access to certain built-in technologies of the user’s device, such as the camera and the microphone, solely when the user voluntarily decides to use them within the functionalities available in the application.\n\n" +
            "Access to the camera is requested exclusively when the user chooses to upload an image, for example, a profile photograph. Access to the microphone is used only during voice communication interactions within the platform. Under no circumstances does the application use video recording functions.\n\n" +
            "The application does not use the camera or the microphone in the background, nor does it access these technologies without the user’s direct interaction and explicit consent. Likewise, Luz Psíquica does not capture images, audio, or any other content without the user’s express authorization.\n\n" +
            "Images and audio provided by the user are used exclusively for functional and operational purposes within the application and are not shared with third parties without the user’s express authorization, except where strictly necessary for the provision of the service in accordance with the platform’s conditions.\n\n" +
            "The user may revoke the permissions granted to the camera and microphone at any time through the operating system settings of their device, which may limit or prevent the use of certain functionalities of the application.\n",
        },
        {
          title: "12. Contact",
          body:
            "For any questions, complaints, claims, or inquiries related to the operation of the application, the user may contact Luz Psíquica through the contact channels enabled within the platform.\n\n" +
            "Communications received will be addressed in accordance with the application’s internal procedures and within reasonable timeframes, depending on the nature of the request.\n"
        },
      ],
    },

    OPERATIVO: {
      title: "Platform Operational Document",
      version: "1.1",
      date: "2026-01-07",
      platform: "Luz Psíquica mobile app",
      email: "luzpsiquica1@gmail.com",
      whatsappNumberPretty: "+1 (813) 618-7770",
      whatsappNumberRaw: "+18136187770",
      sections: [
        {
          title: "1. Purpose of this Document",
          body: "[TODO: complete official legal English translation].",
        },
        {
          title: "12. Additional information",
          body: "[TODO: complete official legal English translation].",
        },
      ],
    },
  },
};

export function getLegalDocs(lang: Lang) {
  return LEGAL_DOCS[lang];
}