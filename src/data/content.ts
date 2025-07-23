export interface AudioContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  duration: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  audioList: {
    title: string;
    items: AudioContent[];
  };
  narrative: {
    title: string;
    content: string;
    imageUrl: string;
  };
  collaboration: {
    title: string;
  };
}

export const content: Record<string, Content> = {
  id: {
    hero: {
      title: "Jelajah Taman Purbakala Sumpang Bita",
      subtitle: "Nikmati wisata budaya dengan pengalaman audio langsung dari narasi edukatif kami.",
      ctaButton: "Mulai Jelajah Audio",
    },
    audioList: {
      title: "Daftar Audio Jelajah Budaya Sumpang Bita",
      items: [
        {
          id: "intro",
          title: "Pengantar dan Sejarah Singkat",
          description: "Mulai perjalananmu dengan narasi singkat tentang asal-usul Sumpang Bita, warisan budaya, dan jejak peradaban prasejarah.",
          imageUrl: "/Frame01.png",
          audioUrl: "/audio-id/audio-1-id.mp3",
          duration: "0:57",
        },
        {
          id: "map",
          title: "Peta Kawasan dan Panduan Jelajah",
          description: "Ikuti peta interaktif untuk menjelajahi jalur aman, lokasi penting, serta fasilitas wisata di kawasan ini.",
          imageUrl: "/Frame02.png",
          audioUrl: "/audio-id/audio-2-id.mp3",
          duration: "7:15",
        },
        {
          id: "artifacts",
          title: "Etika dan Aturan Berkunjung",
          description: "Pelajari aturan berkunjung dan cara menjaga kelestarian lingkungan serta warisan budaya yang ada.",
          imageUrl: "/Frame03.png",
          audioUrl: "/audio-id/audio-3-id.mp3",
          duration: "4:45",
        },
        {
          id: "ethics",
          title: "Deskripsi Titik Titik Menarik",
          description: "Temukan kisah menarik di balik lukisan dinding gua, peninggalan artefak, dan nilai-nilai budaya lokal yang memikat.",
          imageUrl: "/Frame04.png",
          audioUrl: "/audio-id/audio-4-id.mp3",
          duration: "8:20",
        },
      ],
    },
    narrative: {
      title: "Dari Suara ke Cerita, Dari Cerita ke Aksi",
      content:
        "Disusun dalam langkah-langkah kecil yang kami tapaki selama KKN Kebangsaan ke-13 di Balocci Baru, narasi-narasi ini lahir dari proses riset, pengamatan, dan refleksi atas warisan yang tak hanya terlibat, tapi juga terdengar. Suara-suara itu kami rangkai menjadi cerita-cerita yang tak sekadar didengar, tapi diharapkan bisa menggerakkan. Menggerakkan siapa pun yang datang, untuk lebih peduli, lebih memahami, dan ikut menjaga makna yang ada.",
      imageUrl: "/tentangkami.png",
    },
    collaboration: {
      title: "Kolaborasi Bersama",
    },
  },
  en: {
    hero: {
      title: "Exploring Sumpang Bita Archaeological Park",
      subtitle: "Enjoy cultural tourism with direct audio experience from our educational narratives.",
      ctaButton: "Start Audio Journey",
    },
    audioList: {
      title: "Sumpang Bita Cultural Exploration Audio List",
      items: [
        {
          id: "intro",
          title: "Introduction and Brief History",
          description: "Start your journey with a short narrative about the origins of Sumpang Bita, its cultural heritage, and traces of prehistoric civilization.",
          imageUrl: "/Frame01.png",
          audioUrl: "/audio-en/audio-1-en.mp3",
          duration: "0:57",
        },
        {
          id: "map",
          title: "Area Map and Exploration Guide",
          description: "Follow the interactive map to explore safe routes, important locations, and tourist facilities in the area.",
          imageUrl: "/Frame02.png",
          audioUrl: "/audio-en/audio-2-en.mp3",
          duration: "7:15",
        },
        {
          id: "artifacts",
          title: "Ethics and Visiting Rules",
          description: "Learn about visiting rules and how to preserve the environment and existing cultural heritage.",
          imageUrl: "/Frame03.png",
          audioUrl: "/audio-en/audio-3-en.mp3",
          duration: "4:45",
        },
        {
          id: "ethics",
          title: "Description of Interesting Points",
          description: "Discover the fascinating stories behind cave paintings, artifacts, and captivating local cultural values.",
          imageUrl: "/Frame04.png",
          audioUrl: "/audio-en/audio-4-en.mp3",
          duration: "8:20",
        },
      ],
    },
    narrative: {
      title: "From Voice to Story, From Story to Action",
      content:
        "Composed in small steps that we have taken during the 13th National KKN in Balocci Baru, these narratives were born from the process of research, observation, and reflection on heritage that is not only involved, but also heard. Those voices we weave into stories that are not just heard, but hopefully can move. Moving anyone who comes, to be more caring, more understanding, and help preserve the meaning that exists.",
      imageUrl: "/tentangkami.png",
    },
    collaboration: {
      title: "Collaboration Together",
    },
  },
};