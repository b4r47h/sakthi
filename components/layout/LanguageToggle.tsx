'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline" 
      className="ml-4 bg-grey-100 text-gray-800 hover:bg-gray-200 transition-colors"
      title={language === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
    >
      {language === 'ml' ? 'English' : 'മലയാളം'}
    </Button>
  );
}