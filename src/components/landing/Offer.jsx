import { createElement } from "react";
import CtaButton from "./CtaButton";
import OfferCountdown from "./OfferCountdown";

const PLAN_FEATURES = [
  "acceso completo a las dos obras principales",
  "Los 4 bonos exclusivos",
  "+280 ilustraciones exclusivas",
  "Garantía incondicional de 7 días",
];

export default function Offer() {
  return (
    <section id="comprar">
      <div className="wrap">
        <OfferCountdown />
        <div className="plan best" style={{ maxWidth: 520, margin: "0 auto" }}>
          <h3>Coleccíon clínica - Mapa de Las 5 Heridas Emocionales y 60 Mecanismos De Defensa</h3>
          <p className="old">
            Antes: <s>US$ $267</s>
          </p>
          <div className="now">US$ 9</div>
          <ul className="feats">
            {PLAN_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <CtaButton sub="Acceso inmediato · Garantía de 7 días">DESCARGAR AHORA</CtaButton>
        </div>
        {createElement("img", {
                src: "https://res.cloudinary.com/xiupvhfs/image/upload/v1795568913/SELO-BLOCO-08-3-1.png",
                alt: "Garantía de 7 días",
                className: ""
        })}
        <div className="guarantee">
          <span>
            Si el material no supera tus expectativas, te devolvemos el 100% de tu dinero. Sin preguntas.
          </span>
        </div>
      </div>
    </section>
  );
}