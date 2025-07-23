import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import LanguageToggle from '@/components/LanguageToggle';
import HeroSection from '@/components/HeroSection';
import AudioListSection from '@/components/AudioListSection';
import AudioPlayer from '@/components/AudioPlayer';
import NarrativeSection from '@/components/NarrativeSection';
import CollaborationSection from '@/components/CollaborationSection';
import { content, AudioContent } from '@/data/content';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('id');
  const [currentAudio, setCurrentAudio] = useState<AudioContent | null>(null);
  const [audioProgress, setAudioProgress] = useState<Record<string, number>>({});
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  const currentContent = content[currentLanguage];

  // Load saved audio progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('audioProgress');
    if (savedProgress) {
      setAudioProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save audio progress to localStorage
  const saveAudioProgress = (audioId: string, progress: number) => {
    const newProgress = { ...audioProgress, [audioId]: progress };
    setAudioProgress(newProgress);
    localStorage.setItem('audioProgress', JSON.stringify(newProgress));
  };

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    toast({
      title: lang === 'id' ? 'Bahasa diubah ke Bahasa Indonesia' : 'Language changed to English',
      description: lang === 'id' ? 'Semua konten akan ditampilkan dalam Bahasa Indonesia' : 'All content will be displayed in English',
    });
  };

  const handleStartJourney = () => {
    const firstAudio = currentContent.audioList.items[0];
    setCurrentAudio(firstAudio);
    setShowAudioPlayer(true);
    
    // Scroll to audio list section
    const audioSection = document.getElementById('audio-list');
    if (audioSection) {
      audioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayAudio = (audio: AudioContent) => {
    setCurrentAudio(audio);
    setShowAudioPlayer(true);
    
    // Show toast notification
    toast({
      title: currentLanguage === 'id' ? 'Audio Dimulai' : 'Audio Started',
      description: audio.title,
    });
  };

  const handleAudioProgress = (progress: number) => {
    if (currentAudio) {
      saveAudioProgress(currentAudio.id, progress);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-forest-green/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-forest-green-dark">
            {currentLanguage === 'id' ? 'Sumpang Bita' : 'Sumpang Bita'}
          </h1>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-forest-green hover:text-forest-green-dark transition-colors">
              {currentLanguage === 'id' ? 'Beranda' : 'Home'}
            </a>
            <a href="#audio-list" className="text-forest-green hover:text-forest-green-dark transition-colors">
              {currentLanguage === 'id' ? 'Audio' : 'Audio'}
            </a>
            <a href="#narrative" className="text-forest-green hover:text-forest-green-dark transition-colors">
              {currentLanguage === 'id' ? 'Tentang Kami' : 'About Us'}
            </a>
          </nav>
          
          <LanguageToggle 
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </header>

      {/* Hero Section */}
      <div id="hero">
        <HeroSection
          title={currentContent.hero.title}
          subtitle={currentContent.hero.subtitle}
          ctaButton={currentContent.hero.ctaButton}
          onStartJourney={handleStartJourney}
        />
      </div>

      {/* Audio Player - Fixed when active */}
      {showAudioPlayer && currentAudio && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-sm border-t border-forest-green/20">
          <div className="container mx-auto max-w-4xl">
            <AudioPlayer
              audioSrc={currentAudio.audioUrl}
              title={currentAudio.title}
              onProgressChange={handleAudioProgress}
              initialProgress={audioProgress[currentAudio.id] || 0}
            />
          </div>
        </div>
      )}

      {/* Audio List Section */}
      <div id="audio-list">
        <AudioListSection
          title={currentContent.audioList.title}
          audioItems={currentContent.audioList.items}
          onPlayAudio={handlePlayAudio}
          activeAudioId={currentAudio?.id}
        />
      </div>

      {/* Narrative Section */}
      <div id="narrative">
        <NarrativeSection
          title={currentContent.narrative.title}
          content={currentContent.narrative.content}
          imageUrl={currentContent.narrative.imageUrl}
        />
      </div>

      {/* Collaboration Section */}
      <CollaborationSection title={currentContent.collaboration.title} />

      {/* Footer */}
      <footer className="bg-forest-green-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sumpang Bita</h3>
              <p className="text-white/80 leading-relaxed">
                {currentLanguage === 'id' 
                  ? 'Melestarikan warisan budaya melalui teknologi dan narasi edukatif.'
                  : 'Preserving cultural heritage through technology and educational narratives.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">
                {currentLanguage === 'id' ? 'Kontak' : 'Contact'}
              </h3>
              <p className="text-white/80">
                Email: info@sumpangbita.id<br />
                Phone: +62 811 4567 890
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">
                {currentLanguage === 'id' ? 'Ikuti Kami' : 'Follow Us'}
              </h3>
              <div className="flex gap-4">
                <span className="text-white/80">📱 Instagram</span>
                <span className="text-white/80">📘 Facebook</span>
                <span className="text-white/80">🐦 Twitter</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 Sumpang Bita. {currentLanguage === 'id' ? 'Semua hak dilindungi.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>

      {/* Padding for fixed audio player */}
      {showAudioPlayer && <div className="h-32" />}
    </div>
  );
};

export default Index;