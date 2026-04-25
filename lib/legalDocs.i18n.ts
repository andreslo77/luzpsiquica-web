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
      version: "2026-04-24",
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
            "El tratamiento de los datos se realiza conforme a los principios de legalidad, finalidad, proporcionalidad y seguridad, adoptando las medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, uso indebido o pérdida.\n\n" +
            "Para los usuarios que soliciten su vinculación como psíquicos dentro de la plataforma, Luz Psíquica podrá requerir información adicional de identificación, incluyendo copia del documento oficial de identidad vigente, con el fin exclusivo de verificar la identidad real del solicitante, su mayoría de edad, la autenticidad de los datos suministrados y el cumplimiento de las obligaciones contractuales y legales aplicables.\n\n" +
            "Dicha información será tratada conforme a los principios de legalidad, finalidad, libertad, proporcionalidad, seguridad y confidencialidad establecidos en la Ley 1581 de 2012 y demás normas concordantes, y será utilizada únicamente para la validación y formalización del vínculo contractual, prevención de fraude y cumplimiento de obligaciones regulatorias.\n\n" +
            "En ningún caso esta información será comercializada, cedida o utilizada para fines distintos a los aquí descritos, y será conservada únicamente por el tiempo estrictamente necesario para el cumplimiento de la finalidad para la cual fue recolectada.\n",
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
          title: "8. Naturaleza del servicio y carácter no reembolsable",
          body:
            "En la plataforma, el uso de los servicios de chat y/o llamada se factura bajo la modalidad de minuto iniciado, minuto cobrado. En virtud de lo anterior, cualquier fracción de minuto que haya sido iniciada será considerada como un minuto completo para efectos de su contabilización y cobro.\n\n" +
            "La presente política aplica tanto al consumo de minutos por parte del cliente como al cómputo del tiempo efectivamente atendido por el psíquico, con el fin de garantizar una compensación equitativa por el tiempo dedicado, así como una medición clara, objetiva y transparente del servicio prestado. La duración de cada interacción es registrada automáticamente por el sistema, y el usuario reconoce y acepta expresamente esta modalidad de facturación desde el momento en que hace uso de la plataforma.\n\n" +
            "Los minutos adquiridos dentro de la plataforma Luz Psíquica constituyen créditos digitales de uso exclusivo dentro del ecosistema del servicio, y no representan dinero en efectivo, depósitos, saldos retirables, instrumentos financieros ni valores transferibles. En consecuencia, todas las compras de minutos realizadas dentro de la aplicación son finales, definitivas y no reembolsables, incluyendo aquellos casos en los que el usuario decida no utilizar total o parcialmente los minutos adquiridos.\n\n" +
            "El no uso del servicio por parte del usuario, ya sea total o parcial, no genera derecho a devolución de dinero, compensación, indemnización ni reconocimiento económico de ninguna naturaleza. Los minutos no podrán ser convertidos en dinero, transferidos a terceros, retirados de la plataforma ni reclamados como saldo a favor fuera del entorno de Luz Psíquica.\n\n" +
            "El usuario reconoce expresamente que, al realizar una compra dentro de la plataforma, adquiere un servicio digital de consumo inmediato o bajo demanda, y renuncia, en la medida permitida por la ley aplicable, a cualquier derecho de retracto, desistimiento o devolución posterior. De manera excepcional, la plataforma podrá evaluar solicitudes únicamente cuando existan fallas técnicas comprobables, atribuibles directamente a Luz Psíquica, que hayan impedido de manera efectiva la prestación del servicio.\n\n" +
            "En tales casos, cualquier medida se limitará estrictamente a la corrección del error o a la reposición proporcional del servicio dentro de la plataforma, sin que ello implique devolución monetaria. La plataforma se reserva el derecho de rechazar cualquier solicitud cuando existan indicios de fraude, abuso, uso indebido del sistema, intento de elusión de controles, manipulación técnica o incumplimiento de las normas establecidas. Las decisiones adoptadas por Luz Psíquica en relación con estas disposiciones serán definitivas dentro del ámbito operativo de la plataforma y no generarán derecho a compensaciones adicionales, intereses, indemnizaciones ni reclamaciones distintas a los ajustes técnicos que, en caso de proceder, se determinen.\n",
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
            "El usuario podrá solicitar en cualquier momento el retiro voluntario de la plataforma mediante el uso de los mecanismos y herramientas habilitados dentro de la aplicación.\n\n" +
            "Una vez realizada la solicitud y confirmada de manera expresa por el usuario, la eliminación de la cuenta se efectuará de forma inmediata, dando por terminada la relación entre el usuario y la plataforma, sin perjuicio del cumplimiento de las obligaciones previamente adquiridas.\n\n" +
            "El retiro voluntario no genera, en ningún caso, derecho a reembolso, compensación, indemnización ni devolución de los valores pagados por servicios adquiridos, incluidos los minutos no consumidos al momento de la eliminación de la cuenta.\n\n" +
            "Los minutos disponibles al momento del retiro no podrán ser convertidos en dinero, transferidos ni reclamados como saldo a favor fuera de la plataforma.\n\n" +
            "El usuario reconoce y acepta expresamente que los servicios adquiridos tienen carácter no reembolsable, y que esta condición ha sido informada de manera clara y previa al uso de la plataforma.\n\n" +
            "La solicitud de retiro y su procesamiento se realizarán conforme a los procedimientos internos de Luz Psíquica, sin que ello implique obligación de reconocimiento económico alguno por parte de la plataforma.\n",
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
      date: "2026-01-04",
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
        {
          title: "5.3 No reembolso, no retiro y no transferencia",
          body:
            "Todas las compras de minutos son finales y no reembolsables, salvo supuestos excepcionales de falla técnica comprobable atribuible directamente a la plataforma. Los minutos adquiridos no pueden ser retirados, convertidos en dinero, transferidos a terceros ni reclamados como devolución por falta de uso voluntario del servicio. El no uso total o parcial de los minutos no genera derecho a reembolso, compensación, indemnización ni reconocimiento económico de ninguna naturaleza. En caso de incidente técnico validado por Luz Psíquica, cualquier medida correctiva se limitará estrictamente a un ajuste técnico interno o a la reposición proporcional del servicio, sin obligación de devolución monetaria.",
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
      version: "2026-04-24",
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
            "Data processing is carried out in accordance with the principles of lawfulness, purpose limitation, proportionality, and security, adopting reasonable technical and organizational measures to protect information against unauthorized access, misuse, or loss.\n\n" +
            "Users requesting to be formally engaged as psychics on the platform may be required to provide additional identification information, including a copy of a valid official identity document, for the exclusive purpose of verifying the applicant’s true identity, legal age, authenticity of the provided data, and compliance with applicable contractual and legal obligations.\n\n" +
            "Such information shall be processed in accordance with the principles of legality, purpose limitation, consent, proportionality, security, and confidentiality established under applicable data protection regulations, including Colombian Law 1581 of 2012. The data will be used solely for contractual validation, fraud prevention, and regulatory compliance purposes.\n\n" +
            "Under no circumstances shall this information be sold, transferred, or used for purposes other than those expressly stated herein, and it shall be retained only for the time strictly necessary to fulfill its intended purpose.\n",
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
            "On the platform, the use of chat and/or call services is billed under the “started minute, charged minute” model. Accordingly, any fraction of a minute that has been initiated shall be considered a full minute for billing and accounting purposes.\n\n" +
            "This policy applies both to the consumption of minutes by the client and to the calculation of the time effectively attended by the psychic, in order to ensure fair compensation for the time dedicated, as well as a clear, objective, and transparent measurement of the service provided.\n\n" +
            "The duration of each interaction is automatically recorded by the system, and the user expressly acknowledges and accepts this billing model from the moment they use the platform.\n\n" +
            "Minutes purchased within the Luz Psíquica platform constitute digital credits for exclusive use within the service ecosystem and do not represent cash, deposits, withdrawable balances, financial instruments, or transferable securities.\n\n" +
            "Accordingly, all purchases of minutes made within the application are final, definitive, and non-refundable, including cases where the user chooses not to use all or part of the purchased minutes.\n\nNon-use of the service by the user, whether total or partial, does not generate any right to refund, compensation, indemnification, or any form of monetary recognition.\n\n" +
            "Minutes may not be converted into money, transferred to third parties, withdrawn from the platform, or claimed as a balance outside the Luz Psíquica environment.\n\nThe user expressly acknowledges that, by making a purchase within the platform, they are acquiring a digital service for immediate or on-demand consumption, and waives, to the extent permitted by applicable law, any right of withdrawal, cancellation, or subsequent refund.\n\n" +
            "Exceptionally, the platform may evaluate requests only in cases of verifiable technical failures directly attributable to Luz Psíquica that have effectively prevented the provision of the service.\n\n" +
            "In such cases, any measure shall be strictly limited to correcting the error or proportionally restoring the service within the platform, without implying any monetary refund.\n\n" +
            "The platform reserves the right to reject any request where there are indications of fraud, abuse, misuse of the system, attempts to bypass controls, technical manipulation, or breach of the established rules.\n\n" +
            "Decisions made by Luz Psíquica in relation to these provisions shall be final within the operational scope of the platform and shall not give rise to additional compensation, interest, indemnification, or claims beyond the technical adjustments that may be determined, if applicable.\n",
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
            "The user may request voluntary withdrawal from the platform at any time through the mechanisms and tools made available within the application.\n\n" +
            "Once the request has been submitted and expressly confirmed by the user, the account will be immediately deleted, thereby terminating the relationship between the user and the platform, without prejudice to the fulfillment of previously acquired obligations.\n\n" +
            "Voluntary withdrawal does not, under any circumstances, give rise to any right to refund, compensation, indemnification, or reimbursement of amounts paid for acquired services, including unused minutes at the time of account deletion.\n\n" +
            "Any remaining minutes at the time of withdrawal cannot be converted into money, transferred, or claimed as a balance outside the platform.\n\n" +
            "The user expressly acknowledges and agrees that the services acquired are non-refundable in nature, and that this condition has been clearly communicated prior to the use of the platform.\n\n" +
            "The withdrawal request and its processing shall be carried out in accordance with the internal procedures of Luz Psíquica, without implying any obligation of financial compensation on the part of the platform.\n",
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

    // dentro de: en: { ... OPERATIVO: { ... } }
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
          title: "1. Purpose of this document",
          body:
            "This Operational Functioning Document aims to clearly, transparently, and technically describe the general operation of the Luz Psíquica platform, and to establish the operational, technical, and functional rules under which the service is provided to clients and psychics. This document is an integral part of the platform’s legal framework and is mandatory for all users who use the application.",
        },
        {
          title: "2. General description of the platform",
          body:
            "Luz Psíquica is a digital platform that enables communication between clients and psychics through chat and voice call services, using a prepaid minutes system purchased by clients. Additionally, the platform may offer audiovisual content related to its activity for informational, promotional, commercial, or brand-positioning purposes. The platform acts as a technological intermediary, providing the technical infrastructure, payment systems, session control, minutes management, and the corresponding economic settlement to psychics.",
        },

        { title: "3. Roles within the platform", body: "" },
        {
          title: "3.1 Client",
          body: "User who purchases minutes and accesses consultation services via chat or call.",
        },
        {
          title: "3.2 Psychic",
          body:
            "Authorized user who provides consultation services to clients and receives financial\ncompensation according to the time effectively consumed.",
        },
        {
          title: "3.3 Administrator",
          body:
            "User in charge of supervision, validation, maintenance, and the overall operation of the\nplatform.",
        },

        { title: "4. Operational service flow", body: "" },
        {
          title: "4.1 Registration and access",
          body:
            "• Users must register with valid information.\n" +
            "• Clients can create an account and purchase minutes.\n" +
            "• Psychics must be authorized by the platform before providing the service.",
        },
        {
          title: "4.2 Purchase of minutes",
          body:
            "• Minutes are purchased through a payment gateway.\n" +
            "• Minutes are prepaid and consumed in sessions.\n" +
            "• The platform defines prices, packages, discounts, and operational rules.",
        },
        {
          title: "4.3 Login and availability",
          body:
            "• The client selects an available psychic.\n" +
            "• The session starts only if the client has enough purchased minutes.\n" +
            "• The platform manages time and consumption control.",
        },

        { title: "5. Sessions, minute consumption, and anti-fraud control", body: "" },
        {
          title: "5.1 Session control",
          body:
            "• Consumption is counted per minute in chat or call.\n" +
            "• The system closes sessions due to inactivity or completion.\n" +
            "• Controls are applied to prevent abnormal usage or fraud.",
        },
        {
          title: "5.2 Prohibition of exchanging personal data",
          body:
            "• Exchanging personal or contact information is prohibited.\n" +
            "• Taking the commercial relationship outside the platform is prohibited.\n" +
            "• Violations may result in suspension or closure.",
        },
        {
          title: "5.3 No Refunds, No Withdrawal and No Transfers",
          body:
            "All minute purchases are final and non-refundable, except in exceptional cases of verifiable technical failure directly attributable to the platform. Purchased minutes cannot be withdrawn, converted into money, transferred to third parties, or claimed for refund due to voluntary non-use of the service. Full or partial non-use of the minutes does not entitle the user to any refund, compensation, indemnification, or financial recognition of any kind. In the event of a validated technical incident by Luz Psíquica, any corrective action shall be strictly limited to an internal technical adjustment or proportional service replacement, without any obligation of monetary refund.",
        },

        { title: "6. Validation and operation of the psychic role", body: "" },
        {
          title: "6.1 Psychic conditions",
          body:
            "• The psychic must be approved by the platform.\n" +
            "• Must operate under internal rules.\n" +
            "• May be suspended due to breaches, complaints, or fraud.",
        },

        { title: "7. Payments to psychics and financial settlement", body: "" },
        {
          title: "7.1 Financial settlement",
          body:
            "• The platform settles based on minutes effectively consumed.\n" +
            "• Compensation is determined according to the platform’s internal rules and the internal record of completed transactions.\n" +
            "• Payments are grouped and executed in defined cycles.",
        },

        { title: "8. Sound, music, and audiovisual assets of the platform", body: "" },
        {
          title: "8.1 Nature of the assets",
          body:
            "The platform uses digital assets that include, among others:\n" +
            "• incoming call ringtones\n" +
            "• notification sounds and system alerts\n" +
            "• music embedded in audiovisual content\n" +
            "• promotional, informational, or commercial videos\n" +
            "These assets are an integral part of Luz Psíquica’s functional, communicative, and brand experience.",
        },
        {
          title: "8.2 Origin of the assets",
          body:
            "The sound, music, and audiovisual assets used by the platform:\n" +
            "• have been created specifically for Luz Psíquica\n" +
            "• are developed through proprietary creative processes, which may include the use of generative AI tools, always under the platform’s direction, control, and curation\n" +
            "• are not commercial music works nor third-party audiovisual content intended for independent exploitation",
        },
        {
          title: "8.3 Audiovisual content and external distribution",
          body:
            "Audiovisual content produced by Luz Psíquica:\n" +
            "• may be marketed, distributed, or shared within and outside the application\n" +
            "• may be published on digital platforms and social networks\n" +
            "• may include music, images, animations, texts, and voices generated or assisted by AI\n" +
            "Distributing such content does not imply any transfer of rights to users, psychics, or third parties.",
        },
        {
          title: "8.4 Intellectual property",
          body:
            "• All sound, music, and audiovisual assets are the exclusive property of Luz Psíquica, or are used under the necessary licenses.\n" +
            "• They are not customizable by users.\n" +
            "• They may not be extracted, reused, distributed, resold, or exploited outside the platform without express written authorization.",
        },
        {
          title: "8.5 Purpose of use",
          body:
            "The assets described:\n" +
            "• serve a technical, operational, communicative, and commercial function\n" +
            "• are not independent artistic works for individual exploitation\n" +
            "• do not generate economic, authorship, or participation rights for users or psychics",
        },

        {
          title: "9. Technical and operational limitations",
          body:
            "• The platform depends on internet connectivity.\n" +
            "• Technical failures, network interruptions, or maintenance may temporarily affect the service.\n" +
            "• Luz Psíquica does not guarantee continuous and uninterrupted availability.",
        },
        {
          title: "10. Service modifications",
          body:
            "Luz Psíquica reserves the right to:\n" +
            "• modify functionalities\n" +
            "• adjust operational rules\n" +
            "• update payment, communication, or content systems\n" +
            "These modifications may be made to improve the user experience or for technical, legal, or operational reasons.",
        },
        {
          title: "11. Acceptance of this document",
          body:
            "Using the platform implies express acceptance of this Operational Functioning Document,\n" +
            "as well as the other associated legal documents.",
        },
        {
          title: "12. Additional information",
          body:
            "Person responsible for the technological development of the platform:\n" +
            "Andrés Loaiza\n" +
            "The design, technical development, functional architecture, and technological operation of the Luz Psíquica platform have been carried out under the direction of the responsible person mentioned, in coordination with the platform’s objectives, ethical principles, and operational guidelines.\n" +
            "Final note\n" +
            "This document is published as part of Luz Psíquica’s commitment to transparency, technological ethics, responsible creativity, and operational clarity.",
        },
      ],
    },
  },
};

export function getLegalDocs(lang: Lang) {
  return LEGAL_DOCS[lang];
}