
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">

        {/* TEXTO PRINCIPAL */}
        <div className="hero-copy">

          <span
            className="pill"
            style={{ color: "#2b7351" }}
          >
            COLECCIÓN CLÍNICA
          </span>

          <h1>
            Descifra las heridas emocionales y descubre
            las defensas que las ocultan.
          </h1>

          <p className="sub sub-small">
            Una colección de herramientas clínicas para
            profundizar en la comprensión de las heridas
            emocionales y los mecanismos inconscientes del ego.
          </p>

          {/* BENEFICIOS */}
          <div className="hero-benefits">
            <span>✓ 2 guías clínicas especializadas</span>
            <span>✓ 4 bonos exclusivos incluidos</span>
            <span>✓ Acceso digital inmediato</span>
          </div>

          {/* PRECIO */}
          <div className="hero-price">
            <span className="hero-price-label">
              COLECCIÓN COMPLETA POR SOLO
            </span>

            <strong>US$ 9</strong>

            <span className="hero-price-detail">
              Pago único · Sin suscripciones
            </span>
          </div>

          {/* CTA */}
          <CtaButton sub="Acceso inmediato · Garantía de 7 días">
            QUIERO MI COLECCIÓN AHORA
          </CtaButton>

          <p className="hero-security">
            🔒 Pago seguro · Garantía de 7 días
          </p>

        </div>

        {/* IMAGEN DOS PRODUTOS */}
        <div className="hero-visual">
          <img
            src="https://res.cloudinary.com/xiupvhfs/image/upload/v1795871318/Inserir_um_t%C3%ADtulo__3_-removebg-preview.png"
            alt="Colección clínica: Mapa de las 5 Heridas Emocionales y 60 Mecanismos de Defensa"
            className="hero-product-image"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

      </div>
    </header>
  );
}
