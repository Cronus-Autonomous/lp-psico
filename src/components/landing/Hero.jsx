
import { createElement, useRef } from "react";
import CtaButton from "./CtaButton";


export default function Hero() {
  const videoRef = useRef(null);  

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill" style={{ color: "#2b7351" }}>
            COLECCIÓN CLÍNICA
          </span>

          <h1>
            Mapa de Las 5 Heridas Emocionales y 60 Mecanismos De Defensa
          </h1>

          <p className="sub sub-small">
            Un completo kit de herramientas clínicas para identificar las heridas emocionales, reconocer las máscaras defensivas y comprender los mecanismos inconscientes que condicionan la personalidad y el comportamiento humano.
          </p>
        </div>
        {createElement("img", {
          src: "https://res.cloudinary.com/xiupvhfs/image/upload/v1795556911/Inserir_um_t%C3%ADtulo-Photoroom.png",
          alt: "kit de herramientas clínicas para identificar las heridas emocionales",
          className: "max-md:-mt-[100px]"
        })}
        <CtaButton sub="Acceso inmediato · Garantía de 7 días">
          DESCARGAR AHORA
        </CtaButton>
      </div>
    </header>
  );
}
