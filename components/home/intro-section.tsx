import Image from "next/image";

export function IntroSection() {
  return (
    <section className="mt-16 grid items-center gap-8 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
      <div className="order-2 space-y-4 text-[#164e89] md:order-1">
        <h2 className="text-3xl font-bold">Въведение</h2>
        <p className="leading-relaxed">
          През 60-те години на своето съществуване, ГПЧЕ „Ромен Ролан“ е преминало през
          множество етапи на развитие, но юбилейният ни месец ще бъде специален!
        </p>
        <p className="leading-relaxed">
          Каним всички роменролановци, учители, родители и приятели на училището да се
          присъединят към нас в поредица от събития, които ще отбележат нашата
          забележителна история и постижения.
        </p>
        <p className="leading-relaxed">
          Ще се състоят както академични, така и културни инициативи, които ще ни
          обединят и ще ни напомнят за това, какво означава да бъдеш част от тази
          невероятна общност.
        </p>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6]">
          <Image
            src="/img2.jpg"
            alt="Snimka_2"
            width={960}
            height={640}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

