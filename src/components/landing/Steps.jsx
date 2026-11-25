
import { STEPS } from "@/data/vital";
import CtaButton from "./CtaButton";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function Steps() {
    /** @type {import("react").RefObject<HTMLVideoElement>} */

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const VIDEO_URL =
    "https://res.cloudinary.com/xiupvhfs/video/upload/q_auto/f_auto/v1794348503/Con_Vital_su_Biblioteca_Inteligente.mp4";

  const VIDEO_POSTER =
    "https://res.cloudinary.com/xiupvhfs/image/upload/v1794540410/2026-11-13_00-25.png";

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      setVideoError(false);
      await video.play();
    } catch (error) {
      console.error("Erro ao iniciar vídeo:", error);
      setVideoError(true);
    }
  };

  return (
    <section className="alt py-16">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="sec-title text-3xl md:text-4xl font-bold">
            Así de simple:{" "}
            <span className="amber">Abre, Elige y Aplica</span>
          </h2>

          <p className="sec-sub mt-2 text-muted-foreground">
            Sin armar la sesión desde cero. Sin improvisar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* VÍDEO */}
          <div className="lg:col-span-6">
            <div className="hero-media rounded-2xl overflow-hidden shadow-lift border border-border/50 bg-card">
              <div className="video-wrap relative w-full aspect-video">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={VIDEO_POSTER}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => {
                    setVideoError(true);
                    setIsPlaying(false);
                  }}
                  aria-label="Presentación de la biblioteca inteligente"
                >
                  <source src={VIDEO_URL} type="video/mp4" />
                  Tu navegador no puede reproducir este vídeo.
                </video>

                {!isPlaying && !videoError && (
                  <button
                    type="button"
                    className="hero-play-button absolute inset-0 z-10 m-auto flex items-center justify-center"
                    onClick={handlePlay}
                    aria-label="Reproducir video"
                  >
                    <Play size={38} fill="currentColor" />
                  </button>
                )}

                {videoError && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/80 p-4 text-center text-white">
                    <p className="text-sm">
                      No fue posible cargar el vídeo.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const video = videoRef.current;
                        if (!video) return;
                        setVideoError(false);
                        video.load();
                      }}
                      className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
                    >
                      Intentar nuevamente
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {STEPS.map((s) => (
              <div
                className="step flex items-start gap-4 p-3.5 rounded-xl bg-card border border-border/40 shadow-soft transition-all hover:border-primary/40"
                key={s.n}
              >
                <div className="num shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-display font-bold flex items-center justify-center text-sm">
                  {s.n}
                </div>

                <div>
                  <b className="text-sm md:text-base font-semibold block">
                    {s.title}
                  </b>

                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <CtaButton sub="Acceso inmediato · Garantía de 7 días">
            QUIERO MI ACCESO AHORA
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
