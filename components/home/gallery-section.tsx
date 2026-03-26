import Image from "next/image";

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="scroll-mt-32 mt-16 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:p-10"
    >
      <div className="max-w-3xl space-y-4 text-center mx-auto">
        <h2 className="text-3xl font-bold text-[#164e89] md:text-4xl">Галерия</h2>
        <p className="leading-relaxed text-[#164e89]">
          Ето някои от значимите моменти от историята на нашето училище.
          Нека заедно създадем нови спомени и снимки, които да продължат да вдъхновяват следващите
          поколения роменролановци!
        </p>
      </div>

      <div className="mt-8 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className="break-inside-avoid overflow-hidden rounded-xl border border-[#164e89]/10 bg-[#e6e6e6]/55"
          >
            <Image
              src={`/gallery/${item}.jpg`}
              alt={`Галерия снимка ${item}`}
              width={400}
              height={item % 3 === 0 ? 288 : item % 2 === 0 ? 240 : 176}
              className={`w-full ${item % 3 === 0 ? "h-72" : item % 2 === 0 ? "h-60" : "h-44"} object-cover`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

