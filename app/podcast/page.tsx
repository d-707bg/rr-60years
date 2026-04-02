import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const podcastEpisodes = [
  {
    id: 1,
    title: "Епизод 1: Иванка Сотирова",
    description: "Разговор с Иванка Сотирова, бивш директор (1996 - 2012)",
    youtubeId: "zvqtXbnVJxM",
    duration: "45:32",
    date: "2024-03-15",
    guest: "Иванка Сотирова - бивш директор",
    image: "/podcast-episode-1.jpg"
  }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#164e89] mb-4">
            Подкаст Поредица
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            60 години ГПЧЕ „Ромен Ролан“ - Специална подкаст поредица посветена на юбилея на училището
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {podcastEpisodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-gray-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                    title={episode.title}
                    className="w-full h-full"
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
                      <span className="text-gray-500 text-sm">{episode.duration}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-[#164e89] mb-3">
                      {episode.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {episode.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <p><strong>Гост:</strong> {episode.guest}</p>
                      <p><strong>Дата:</strong> {new Date(episode.date).toLocaleDateString('bg-BG')}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#096fa7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#164e89] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      </main>
      
      <Footer />
    </div>
  );
}
