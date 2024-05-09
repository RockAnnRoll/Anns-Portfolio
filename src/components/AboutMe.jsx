import React from "react";
import SubHeader from "./SubHeader";

function AboutMe() {
  return (
    <div className="all-about-me">
      <SubHeader text="Om Mig" />
      <p className="about-me-text">
        Jag heter Ann, är 41 år, och bor tillsammans med min katt Gibson i
        Stockholm. Jag är uppvuxen i Uppsala men har sedan dess bott i Lund,
        Göteborg och i Spanien tills jag landade i Stockholm för 5 år sedan.
      </p>
      <p className="about-me-text">
        Jag har en fil. kand i psykologi och har även studerat ämnen som
        pedagogik, sociologi, arbetsrätt m.m. Efter mina studier på
        universitetet har jag bland annat arbetat som samordnare för studenter
        med funktionsvariationer, HR-administratör och haft diverse andra
        arbeten inom administration.
      </p>
      <p className="about-me-text">
        Mitt stora intresse för webbutveckling startade när jag jobbade med stöd
        till studenter med funktionsvariationer och då blev webbansvarig för
        verksamhetens webbplats (CMS-system). I och med
        webbtillgänglighetsdirektivet som trädde i kraft 2018 blev jag tvungen
        att bli mer insatt i digital tillgänglighet och de lagar som fanns.
        Våren år 2021 studerade jag därför en kurs i digital tillgänglighet på
        mittuniversitetet och mitt intresse för webbutveckling ökade
        ytterligare. Under HT 2023-VT 2024 har jag läst första året på
        frontend-utbildning Yrkeshögskolan.
      </p>
    </div>
  );
}

export default AboutMe;
