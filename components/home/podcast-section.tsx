import Link from "next/link";

const podcastEpisodes = [
  {
    id: 1,
    title: "Епизод 1: Иванка Сотирова",
    description: "Разговор с Иванка Сотирова, директор на гимназията в периода 1996 - 2012 г. - човек с ключова роля за утвърждаването на ГПЧЕ \"Ромен Ролан\" като едно от водещите училища в България.",
    youtubeId: "zvqtXbnVJxM",
    image: "/podcast-episode-1.jpg"
  }
];

export function PodcastSection() {
  const displayEpisodes = podcastEpisodes.slice(0, 3);
  const hasMoreEpisodes = podcastEpisodes.length > 3;

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#164e89] mb-4">
          Подкаст Поредица
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Срещи с изявени личности, свързани с миналото и настоящето на <br/> ГПЧЕ "Ромен Ролан"
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 mb-8">
        {displayEpisodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  className="w-full h-full absolute top-0 left-0 border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#164e89] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Епизод {episode.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#164e89] mb-3">
                    {episode.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {episode.description}
                  </p>
                </div>
                
                <div className="mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#096fa7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#164e89] transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Гледайте в YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreEpisodes && (
        <div className="text-center">
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 bg-[#164e89] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#096fa7] transition-colors"
          >
            Виж всички епизоди
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
