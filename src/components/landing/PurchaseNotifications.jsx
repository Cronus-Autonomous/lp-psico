
import { useEffect, useState } from "react";
import { PURCHASES } from "@/data/vital";

// Datos ficticios para demostración visual.
// No representan transacciones reales.


const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function PurchaseNotifications({
  productName = "Mapa de las 5 Heridas Emocionales + 60 Mecanismos de Defensa + 4 Bonos",
  displayDuration = 6000,
  minInterval = 4000,
  maxInterval = 9000,
  initialDelay = 2000,
  enabled = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return undefined;
    }

    let timerId;
    let firstTimerId;
    let cancelled = false;

    const showNotification = () => {
      if (cancelled) return;

      setVisible(true);

      // Mantiene la notificación visible durante 6 segundos.
      timerId = window.setTimeout(() => {
        setVisible(false);

        // Espera un intervalo aleatorio antes de mostrar la siguiente.
        const nextInterval = randomBetween(
          minInterval,
          maxInterval
        );

        timerId = window.setTimeout(() => {
          if (cancelled) return;

          setCurrentIndex(
            (current) => (current + 1) % PURCHASES.length
          );

          showNotification();
        }, nextInterval);
      }, displayDuration);
    };

    // Retrasa la primera notificación al entrar en la página.
    firstTimerId = window.setTimeout(
      showNotification,
      initialDelay
    );

    return () => {
      cancelled = true;
      window.clearTimeout(firstTimerId);
      window.clearTimeout(timerId);
    };
  }, [
    enabled,
    displayDuration,
    minInterval,
    maxInterval,
    initialDelay,
  ]);

  if (!enabled) return null;

  const purchase = PURCHASES[currentIndex];

  return (
    <div
      className="purchase-notifications-root"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Notificaciones de demostración"
    >
      <div
        className={`purchase-toast ${
          visible ? "purchase-toast-visible" : ""
        }`}
        role="status"
      >
        <div className="purchase-toast-thumb">
            <img
              src='https://res.cloudinary.com/xiupvhfs/image/upload/v1795567434/Inserir_um_t%C3%ADtulo-removebg-preview.png'
              alt="Vista del producto"
            />
        </div>

        <div className="purchase-toast-content">
          <div className="purchase-toast-heading">
            <p className="purchase-toast-name">
              {purchase.name} de {purchase.city}
            </p>
          </div>

          <p className="purchase-toast-product">
            compró <span className="purchase-toast-dot">•</span>{" "}
            {productName}
          </p>

          <div className="purchase-toast-time">
            {purchase.time} · Hotmart
          </div>
        </div>
      </div>
    </div>
  );
}
