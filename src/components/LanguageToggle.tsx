import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  const languages = [
    { code: 'id', label: '🇮🇩 Bahasa Indonesia', shortLabel: '🇮🇩 ID' },
    { code: 'en', label: '🇺🇸 English', shortLabel: '🇺🇸 EN' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-background/90 backdrop-blur-sm border-forest-green/20 hover:bg-forest-green/10 transition-all duration-300"
        >
          {currentLang?.shortLabel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border-forest-green/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className="hover:bg-forest-green/10 cursor-pointer"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;