
import { FAQ } from "@/data/vital";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section faq-v2">
      <div className="wrap faq-container">

        <div className="faq-header">
          <span className="faq-eyebrow">
            ¿TIENES DUDAS?
          </span>

          <h2>
            Preguntas frecuentes
          </h2>

          <p>
            Todo lo que necesitas saber antes de acceder
            a tu colección clínica.
          </p>
        </div>

        <div className="faq-list">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-question-text">
                    {item.q}
                  </span>

                  <span
                    className={`faq-icon ${isOpen ? "active" : ""}`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={answerId}
                  className="faq-answer-wrapper"
                  hidden={!isOpen}
                >
                  <div className="faq-answer">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-bottom">
          <div className="faq-bottom-icon">✦</div>

          <h3>
            ¿Listo para profundizar tu conocimiento clínico?
          </h3>

          <p>
            Accede ahora a los dos materiales principales
            y recibe los 4 bonos exclusivos.
          </p>

          <a href="#comprar" className="faq-cta">
            QUIERO MI COLECCIÓN
            <span> → </span>
          </a>

          <span className="faq-bottom-note">
            Acceso inmediato · Pago único · Garantía de 7 días
          </span>
        </div>

      </div>
    </section>
  );
}
