import React from "react";
import Head from "next/head";

import {
  cvLightEnglishLinks,
  cvLightPolishLinks,
  cvDarkEnglishLinks,
  cvDarkPolishLinks,
} from "@/links";
interface CvLanguages {
  language: "pl" | "en";
  isDarkMode: boolean;
}
const cv: React.FC<CvLanguages> = ({ language, isDarkMode }) => {
  return (
    <>
      <Head>
        <title>Mateusz | CV</title>
        <meta
          name="description"
          content="I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <section className="max-w-[940px] mx-auto pt-[120px] pb-24">
        <h2 className="text-center text-color-text-primary">CV</h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4286%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src={(language === "en" && !isDarkMode
              ? cvLightEnglishLinks[0]
              : language === "en" && isDarkMode
              ? cvDarkEnglishLinks[0]
              : language === "pl" && !isDarkMode
              ? cvLightPolishLinks[0]
              : language === "pl" && isDarkMode
              ? cvDarkPolishLinks[0]
              : undefined
            )?.replace(/&#x2F;/g, "/")}
            title="Resume"
          ></iframe>
        </div>
        <a
          href={(language === "en" && !isDarkMode
            ? cvLightEnglishLinks[1]
            : language === "en" && isDarkMode
            ? cvDarkEnglishLinks[1]
            : language === "pl" && !isDarkMode
            ? cvLightPolishLinks[1]
            : language === "pl" && isDarkMode
            ? cvDarkPolishLinks[1]
            : undefined
          )?.replace(/&#x2F;/g, "/")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "en" ? "View full CV" : "Zobacz pełne CV"}
        </a>
      </section>
    </>
  );
};

export default cv;
