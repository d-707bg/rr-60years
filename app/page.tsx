export default function Home() {
	return (
		<main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
			<section className="relative overflow-hidden rounded-2xl border border-[#0b2e4a]/10 bg-white shadow-sm">
				<div
					className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(28,78,117,0.18),transparent_45%),radial-gradient(circle_at_75%_30%,rgba(11,46,74,0.16),transparent_48%),linear-gradient(180deg,rgba(11,46,74,0.04),rgba(255,255,255,0)_55%)]"
					aria-hidden
				/>
				<div className="relative grid gap-10 p-7 md:grid-cols-[1.1fr,0.9fr] md:p-10">
					<div className="space-y-5">
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
							Юбилейна седмица · 17 – 25 април
						</p>
						<h1 className="font-[var(--font-playfair)] text-3xl leading-tight text-[#0b2e4a] md:text-5xl">
							ГПЧЕ „Ромен Ролан“
							<span className="block">празнува 60 години</span>
						</h1>
						<p className="max-w-xl text-base leading-relaxed text-[#2d5876] md:text-lg">
							Покана към ученици, алумни и приятели на гимназията – да се
							върнем за спомени и да създадем нови.
						</p>
						<div className="flex flex-wrap gap-3">
							<a
								href="#programa"
								className="inline-flex items-center rounded-md bg-[#1c4e75] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2e4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c4e75] focus-visible:ring-offset-2"
							>
								Виж програмата
							</a>
							<a
								href="#galeria"
								className="inline-flex items-center rounded-md border border-[#0b2e4a]/20 bg-white px-4 py-2 text-sm font-semibold text-[#1c4e75] transition hover:border-[#0b2e4a]/30 hover:bg-[#f4f8fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c4e75] focus-visible:ring-offset-2"
							>
								Галерия
							</a>
						</div>
					</div>

					<div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
						<div className="space-y-4">
							<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
								Събития и срещи
							</p>
							<p className="text-sm leading-relaxed text-[#2d5876]">
								Концерти, изложби, срещи на випуски и отворени врати – седмица,
								която събира поколенията.
							</p>
							<div className="rounded-xl bg-[#f4f8fb] p-4">
								<p className="text-sm font-semibold text-[#0b2e4a]">
									Стара Загора · ГПЧЕ „Ромен Ролан“
								</p>
								<p className="mt-1 text-xs text-[#2d5876]">
									1964 → 2024 · 60 години езици, приятелства и бъдеще
								</p>
							</div>
							<a
								href="/dareniya"
								className="inline-flex items-center justify-center rounded-md bg-[#0b2e4a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#082236] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c4e75] focus-visible:ring-offset-2"
							>
								Подкрепи юбилея
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-10 grid gap-6 md:grid-cols-3">
				<div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
						За юбилея
					</p>
					<p className="mt-2 font-[var(--font-playfair)] text-xl text-[#0b2e4a]">
						Истории и хора
					</p>
					<p className="mt-2 text-sm leading-relaxed text-[#2d5876]">
						Шест десетилетия, в които училището е дом на езиците и на духа на
						града.
					</p>
				</div>
				<div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
						Седмица на събитията
					</p>
					<p className="mt-2 font-[var(--font-playfair)] text-xl text-[#0b2e4a]">
						17 – 25 април
					</p>
					<p className="mt-2 text-sm leading-relaxed text-[#2d5876]">
						Програма с концерти, изложби и срещи на випуски – за всеки, който
						се чувства част от общността.
					</p>
				</div>
				<div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
						Дарения
					</p>
					<p className="mt-2 font-[var(--font-playfair)] text-xl text-[#0b2e4a]">
						Заедно го правим възможно
					</p>
					<p className="mt-2 text-sm leading-relaxed text-[#2d5876]">
						Виж дарителската информация и помогни юбилейната седмица да бъде
						достъпна за всички.
					</p>
					<a
						href="/dareniya"
						className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1c4e75] hover:underline"
					>
						Към даренията →
					</a>
				</div>
			</section>

			<section
				id="programa"
				className="mt-10 rounded-2xl border border-[#0b2e4a]/10 bg-white p-7 shadow-sm md:p-10"
			>
				<div className="grid gap-8 md:grid-cols-[1fr,1.05fr] md:items-start">
					<div className="space-y-3">
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
							Програма
						</p>
						<h2 className="font-[var(--font-playfair)] text-2xl text-[#0b2e4a] md:text-3xl">
							Какво да очаквате
						</h2>
						<p className="text-sm leading-relaxed text-[#2d5876] md:text-base">
							Тук можем да подредим точните дни и часове. Засега е базова
							структура, която лесно се допълва.
						</p>
					</div>
					<div className="grid gap-4">
						<div className="rounded-xl border border-[#0b2e4a]/10 bg-[#f4f8fb] p-5">
							<p className="text-sm font-semibold text-[#0b2e4a]">
								Откриване на юбилейната седмица
							</p>
							<p className="mt-1 text-sm text-[#2d5876]">
								Тържествено събитие и среща на общността.
							</p>
						</div>
						<div className="rounded-xl border border-[#0b2e4a]/10 bg-[#f4f8fb] p-5">
							<p className="text-sm font-semibold text-[#0b2e4a]">
								Изложби и ученически инициативи
							</p>
							<p className="mt-1 text-sm text-[#2d5876]">
								Истории, снимки и проекти от поколенията.
							</p>
						</div>
						<div className="rounded-xl border border-[#0b2e4a]/10 bg-[#f4f8fb] p-5">
							<p className="text-sm font-semibold text-[#0b2e4a]">
								Концерт и срещи на випуски
							</p>
							<p className="mt-1 text-sm text-[#2d5876]">
								Вечер за спомени, музика и нови планове.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="galeria"
				className="mt-10 rounded-2xl border border-[#0b2e4a]/10 bg-white p-7 shadow-sm md:p-10"
			>
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
						Галерия
					</p>
					<h2 className="font-[var(--font-playfair)] text-2xl text-[#0b2e4a] md:text-3xl">
						Моменти от училището
					</h2>
					<p className="max-w-3xl text-sm leading-relaxed text-[#2d5876] md:text-base">
						Тук можем да добавим истински снимки (ако ми дадеш папка/линкове).
						За момента са плейсхолдър панели, за да се усеща като „слайдер“
						на оригиналния сайт.
					</p>
				</div>

				<div className="mt-6 grid gap-4 md:grid-cols-3">
					<div className="aspect-[4/3] rounded-xl border border-[#0b2e4a]/10 bg-[linear-gradient(135deg,#e9f2f9,#ffffff)]" />
					<div className="aspect-[4/3] rounded-xl border border-[#0b2e4a]/10 bg-[linear-gradient(135deg,#ffffff,#eef3f7)]" />
					<div className="aspect-[4/3] rounded-xl border border-[#0b2e4a]/10 bg-[linear-gradient(135deg,#edf5fb,#ffffff)]" />
				</div>
			</section>
		</main>
	);
}
