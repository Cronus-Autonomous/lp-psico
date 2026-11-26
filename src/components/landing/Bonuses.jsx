import { Image } from "@/components/ui/image";
import { BONUSES } from "@/data/vital";

export default function Bonuses() {
  return (
    <section className="bonos py-16">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="center mb-2">
            <span className="pill" style={{ color: "#c5a059", border: "1px solid rgba(192, 239, 98, 0.3)" }}>
              BONOS EXCLUSIVOS
            </span>
          </p>
          <h2 className="sec-title text-3xl md:text-4xl font-bold" style={{ color: "#fff" }}>
            Todo lo que te llevás hoy
          </h2>
          <p className="sec-sub mt-2 text-sm md:text-base" style={{ color: "rgba(255,255,255,.75)" }}>
            4 bonos para aplicar con seguridad en cualquier condición.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BONUSES.map((bono) => (
            <div className="bono flex flex-col justify-between rounded-3xl bg-card/10 backdrop-blur-sm border border-white/10 p-6 shadow-soft" style={{ marginInline: "20px" }} key={bono.title}>
              <div>
                <div className="mb-4 overflow-hidden rounded-2xl bg-card/20">
                  <Image src={bono.img} alt={bono.alt} fittingType="fit" loading="lazy" className="w-full object-cover" style={{ height: "300px" }} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#f3cc86" }}>
                  {bono.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">{bono.text}</p>
              </div>
              <div className="valor flex items-center justify-between pt-4 border-t border-white/10">
                <s className="text-sm text-white/60">{bono.value}</s>
                <span className="gratis text-xs md:text-sm font-bold px-3 py-1 rounded-full bg-yellow-400 text-primary border border-primary/30">HOY GRATIS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}