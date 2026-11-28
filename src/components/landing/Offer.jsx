
import CtaButton from "./CtaButton";

const PLAN_FEATURES = [
  {
    title: "Mapa de las 5 Heridas Emocionales",
    desc: "Guía clínica para identificar patrones emocionales y máscaras defensivas.",
  },
  {
    title: "60 Mecanismos de Defensa (Freud)",
    desc: "Atlas visual para comprender las defensas inconscientes del ego.",
  },
  {
    title: "4 bonos clínicos exclusivos",
    desc: "Recursos complementarios para profundizar tus investigaciones y sesiones.",
  },
  {
    title: "Más de 280 ilustraciones",
    desc: "Contenido visual, organizado y listo para consultar e imprimir.",
  },
];

export default function Offer() {
  return (
    <section id="comprar" className="offer-v2">
      <div className="wrap">

        {/* INTRODUCCIÓN */}
        <div className="offer-intro">
          <span className="offer-eyebrow">
            ✦ COLECCIÓN CLÍNICA COMPLETA ✦
          </span>

          <h2>
            Todo este conocimiento psicoanalítico en una sola colección.
          </h2>

          <p>
            Dos materiales principales y 4 bonos exclusivos
            para ampliar tus recursos de exploración clínica.
          </p>
        </div>

        {/* TARJETA DE OFERTA */}
        <div className="offer-card">

          <div className="offer-ribbon">
            COLECCIÓN COMPLETA
          </div>

          <h3>
            Mapa de las 5 Heridas Emocionales
            <span> + </span>
            60 Mecanismos de Defensa
          </h3>

          <p className="offer-description">
            Todo lo que necesitas para comprender las heridas
            emocionales, identificar las defensas del ego
            y profundizar en la exploración psicológica.
          </p>

          {/* PRECIO */}
          <div className="offer-price-box">

            <span className="offer-price-label">
              INVERSIÓN ÚNICA
            </span>

            <div className="offer-price">
              <span>US$</span> 9
            </div>

            <span className="offer-price-caption">
              Un solo pago · Sin suscripciones
            </span>

          </div>

          {/* INCLUYE */}
          <div className="offer-includes-title">
            TU COLECCIÓN INCLUYE:
          </div>

          <ul className="offer-features">
            {PLAN_FEATURES.map((feature, index) => (
              <li key={feature.title}>
                <span className="offer-check">✓</span>

                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="offer-action">
            <CtaButton sub="Acceso digital inmediato · Garantía de 7 días">
              OBTENER MI COLECCIÓN AHORA
            </CtaButton>

            <p className="offer-security">
              🔒 Compra segura · Acceso inmediato después del pago
            </p>
          </div>

        </div>

        {/* GARANTÍA */}
        <div className="guarantee-v2">

          <div className="guarantee-seal">
            <img
              src="https://res.cloudinary.com/xiupvhfs/image/upload/v1795568913/SELO-BLOCO-08-3-1.png"
              alt="Garantía de 7 días"
              loading="lazy"
            />
          </div>

          <div className="guarantee-copy">

            <span className="guarantee-eyebrow">
              TU COMPRA ESTÁ PROTEGIDA
            </span>

            <h3>
              7 días para conocer y evaluar tu colección.
            </h3>

            <p>
              Accede a todos los materiales, explora su contenido
              y descubre cómo pueden complementar tu práctica.
              Si decides que no es lo que esperabas, puedes
              solicitar el reembolso dentro de los primeros
              7 días, conforme a las condiciones de garantía.
            </p>

            <strong>
              Tu decisión, con tranquilidad y sin riesgos innecesarios.
            </strong>

          </div>

        </div>

        {/* CIERRE */}
        <div className="offer-final-note">
          <span>✦</span>
          <p>
            Una colección completa de herramientas clínicas,
            disponible por <strong>US$ 9.</strong>
          </p>
          <span>✦</span>
        </div>

      </div>
    </section>
  );
}
