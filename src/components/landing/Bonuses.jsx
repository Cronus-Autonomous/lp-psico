
import { Image } from "@/components/ui/image";
import { BONUSES } from "@/data/vital";

export default function Bonuses() {
  return (
    <section className="bonuses-section">
      <div className="wrap">

        {/* CABEÇALHO */}
        <div className="bonuses-heading">

          <span className="bonuses-eyebrow">
            ✦ REGALOS EXCLUSIVOS ✦
          </span>

          <h2 className="sec-title">
            Y además, recibirás 4 bonos exclusivos
          </h2>

          <p className="sec-sub">
            Tu colección ya incluye dos herramientas clínicas
            completas. Y para llevar tu práctica aún más lejos,
            también recibirás estos 4 recursos complementarios
            sin costo adicional.
          </p>

        </div>

        {/* IDENTIFICAÇÃO DOS BÔNUS */}
        <div className="bonuses-gift-banner">
          <div className="bonuses-gift-icon">
            ✦
          </div>

          <div>
            <strong>
              4 MATERIALES COMPLEMENTARIOS
            </strong>

            <p>
              Incluidos gratuitamente con tu colección clínica.
            </p>
          </div>

          <span className="bonuses-gift-label">
            GRATIS
          </span>
        </div>

        {/* CARDS */}
        <div className="bonuses-grid">

          {BONUSES.map((bono, index) => (
            <article
              className="bonus-card"
              key={bono.title}
            >

              <div className="bonus-card-image">

                <span className="bonus-number">
                  BONO {index + 1}
                </span>

                <Image
                  src={bono.img}
                  alt={bono.alt}
                  fittingType="contain"
                  loading="lazy"
                  className="bonus-image"
                />

              </div>

              <div className="bonus-card-content">

                <h3>
                  {bono.title}
                </h3>

                <p>
                  {bono.text}
                </p>

                <div className="bonus-card-footer">

                  <div className="bonus-value">
                    <span>Valor individual:</span>
                    <s>{bono.value}</s>
                  </div>

                  <span className="bonus-free">
                    ✦ GRATIS
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* FECHAMENTO */}
        <div className="bonuses-footer">
          <span>✦</span>

          <p>
            Recibes los 2 materiales principales
            <strong> + 4 bonos exclusivos </strong>
            en una sola colección.
          </p>

          <span>✦</span>
        </div>

      </div>
    </section>
  );
}
