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
      ctaButton: "Mulai Jelajah Audio"
    },
    audioList: {
      title: "Daftar Audio Jelajah Budaya Sumpang Bita",
      items: [
        {
          id: "intro",
          title: "Pengantar dan Sejarah Singkat",
          description: "Mulai perjalananmu dengan narasi singkat tentang asal usul Sumpang Bita, warisan budaya, dan pentingnya preservasi arkeologi.",
          imageUrl: "/src/assets/card-history.jpg",
          audioUrl: "/audio/intro-id.mp3",
          duration: "5:30"
        },
        {
          id: "map",
          title: "Peta Kawasan dan Panduan Jelajah",
          description: "Bukit pinta interpretatif untuk menjelaskan jalur teman penting, serta petunjuk wisata dan kawasan kiki.",
          imageUrl: "/src/assets/card-map.jpg",
          audioUrl: "/audio/map-id.mp3",
          duration: "7:15"
        },
        {
          id: "artifacts",
          title: "Etika dan Aturan Berkunjung",
          description: "Jelajah aturan berkunjung dan cara manjaga keseimbangan lingkungan serta warisan budaya yang ada.",
          imageUrl: "/src/assets/card-artifacts.jpg",
          audioUrl: "/audio/artifacts-id.mp3",
          duration: "4:45"
        },
        {
          id: "ethics",
          title: "Deskripsi Titik Titik Menarik",
          description: "Temukan kisah menarik di balik rumusan bending dan pemandangan amteek, dan ritual yang memerikat.",
          imageUrl: "/src/assets/card-ethics.jpg",
          audioUrl: "/audio/ethics-id.mp3",
          duration: "8:20"
        }
      ]
    },
    narrative: {
      title: "Dari Suara ke Cerita, Dari Cerita ke Aksi",
      content: "Disusun dalam langkah-langkah kecil yang kami tapaki selama KKN Kebangsaan ke-13 di Balocci Baru, narasi-narasi ini lahir dari proses riset, pengamatan, dan refleksi atas warisan yang tak hanya terlibat, tapi juga terdengar. Suara-suara itu kami rangkai menjadi cerita-cerita yang tak sekadar didengar, tapi diharapkan bisa menggerakkan. Menggerakkan siapa pun yang datang, untuk lebih peduli, lebih memahami, dan ikut menjaga makna yang ada.",
      imageUrl: "/src/assets/card-history.jpg"
    },
    collaboration: {
      title: "Kolaborasi Bersama"
    }
  },
  en: {
    hero: {
      title: "Exploring Sumpang Bita Archaeological Park",
      subtitle: "Enjoy cultural tourism with direct audio experience from our educational narratives.",
      ctaButton: "Start Audio Journey"
    },
    audioList: {
      title: "Sumpang Bita Cultural Exploration Audio List",
      items: [
        {
          id: "intro",
          title: "Introduction and Brief History",
          description: "Start your journey with a brief narrative about the origins of Sumpang Bita, cultural heritage, and the importance of archaeological preservation.",
          imageUrl: "/src/assets/card-history.jpg",
          audioUrl: "/audio/intro-en.mp3",
          duration: "5:30"
        },
        {
          id: "map",
          title: "Area Map and Exploration Guide",
          description: "Interpretive guide to explain important friend routes, as well as tourist directions and edge areas.",
          imageUrl: "/src/assets/card-map.jpg",
          audioUrl: "/audio/map-en.mp3",
          duration: "7:15"
        },
        {
          id: "artifacts",
          title: "Ethics and Visiting Rules",
          description: "Explore visiting rules and ways to maintain environmental balance and existing cultural heritage.",
          imageUrl: "/src/assets/card-artifacts.jpg",
          audioUrl: "/audio/artifacts-en.mp3",
          duration: "4:45"
        },
        {
          id: "ethics",
          title: "Description of Interesting Points",
          description: "Discover interesting stories behind bending formulas and amteek views, and rituals that bind.",
          imageUrl: "/src/assets/card-ethics.jpg",
          audioUrl: "/audio/ethics-en.mp3",
          duration: "8:20"
        }
      ]
    },
    narrative: {
      title: "From Voice to Story, From Story to Action",
      content: "Composed in small steps that we have taken during the 13th National KKN in Balocci Baru, these narratives were born from the process of research, observation, and reflection on heritage that is not only involved, but also heard. Those voices we weave into stories that are not just heard, but hopefully can move. Moving anyone who comes, to be more caring, more understanding, and help preserve the meaning that exists.",
      imageUrl: "/src/assets/card-history.jpg"
    },
    collaboration: {
      title: "Collaboration Together"
    }
  }
};