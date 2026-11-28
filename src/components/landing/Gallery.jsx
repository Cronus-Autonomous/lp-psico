
import { useState } from "react";
import { Image } from "@/components/ui/image";
import { GALLERY } from "@/data/vital";
import GalleryLightbox from "./GalleryLightbox";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const current = GALLERY[index];

  if (!current) return null;

  const selectImage = (k) => {
    setIndex(k);
  };

  const openImage = () => {
    setOpen(current);
  };

  return (
    <section className="product-gallery">
      <div className="wrap">

        <div className="product-gallery-heading">
          <h2 className="sec-title">
            Así se ve por dentro
          </h2>

          <p className="sec-sub">
            Explora nuestros materiales y descubre todo
            lo que encontrarás en esta colección clínica.
          </p>
        </div>

        <div className="product-gallery-layout">

          {/* MINIATURAS */}
          <div
            className="product-thumbnails"
            role="group"
            aria-label="Galería de imágenes del producto"
          >
            {GALLERY.map((item, k) => (
              <button
                key={item.src}
                type="button"
                className={`product-thumb ${
                  index === k ? "active" : ""
                }`}
                onClick={() => selectImage(k)}
                aria-label={`Ver imagen ${k + 1}: ${item.alt}`}
                aria-pressed={index === k}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fittingType="contain"
                  loading={k === 0 ? "eager" : "lazy"}
                />
              </button>
            ))}
          </div>

          {/* IMAGEM PRINCIPAL */}
          <div className="product-main-area">

            <button
              type="button"
              className="product-main-image"
              onClick={openImage}
              aria-label={`Ampliar imagen: ${current.alt}`}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fittingType="contain"
                loading="eager"
              />

              <span className="product-zoom-hint">
                <span>⌕</span>
                Ampliar imagen
              </span>
            </button>

            {/* NAVEGAÇÃO */}
            <div className="product-gallery-controls">

              <button
                type="button"
                className="product-gallery-arrow"
                onClick={() =>
                  selectImage(
                    (index - 1 + GALLERY.length) %
                    GALLERY.length
                  )
                }
                aria-label="Imagen anterior"
                disabled={GALLERY.length <= 1}
              >
                ‹
              </button>

              <span className="product-gallery-counter">
                <strong>{index + 1}</strong>
                {" / "}
                {GALLERY.length}
              </span>

              <button
                type="button"
                className="product-gallery-arrow"
                onClick={() =>
                  selectImage((index + 1) % GALLERY.length)
                }
                aria-label="Imagen siguiente"
                disabled={GALLERY.length <= 1}
              >
                ›
              </button>

            </div>

            <p className="product-gallery-hint">
              👆 Selecciona una muestra o haz clic en la
              imagen para ampliar y explorar los detalles.
            </p>

          </div>
        </div>
      </div>

      <GalleryLightbox
        item={open}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
