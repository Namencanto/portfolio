import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import english from "../static/languages/en.json";
import polish from "../static/languages/pl.json";
import { useState } from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // AVAILABLE LANGUAGES
  const languageData = {
    en: english,
    pl: polish,
  };

  const [language, setLanguage] = useState<keyof typeof languageData>("en");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const currentLanguage = languageData[language];
  // Add currentLanguage variable to props
  pageProps = {
    ...pageProps,
    currentLanguage,
    isDarkMode,
    language,
  };

  const toggleLanguage = (lang: "en" | "pl") => {
    setLanguage(lang);
  };

  return (
    <>
      <Navbar
        languageData={currentLanguage.navbar}
        toggleLanguage={toggleLanguage}
        language={language}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};
export default App;
