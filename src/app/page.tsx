"use client";


import { useState } from "react";
import { Header } from "./_components/Header";
import { SideMenu } from "./_components/SideMenu";
import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Services } from "./_components/Services";
import { ServicesList } from "./_components/ServicesList";
import { ServiceAreas } from "./_components/ServiceAreas";
import { Testimonials } from "./_components/Testimonials";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
// import { useTawkTo } from "./hooks/useTawkTo";
import { Helmet } from "react-helmet";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // useTawkTo();

  const videoJsonLd = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: "Optimize Electrical Video",
    description: "Optimize Electrical on the Sunshine Coast, Queensland",
    thumbnailUrl: "/img/optimize-electrical-poster.jpg",
    uploadDate: "2021-11-08T08:00:00+08:00",
    duration: "PT31S", // PT = Period of Time
    contentUrl: "/video/optimize-electrical-no-audio.mp4",
  };

  return (
    <div>
      <Helmet>
        <title>Optimize Electrical</title>
        <meta
          name="description"
          content="Your local electrician on the Sunshine Coast, Beerwah 4519, Caloundra 4551, Nambour 4560, electrician near me"
        />
        <meta property="og:image" content="/img/Screenshot.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(videoJsonLd)}
        </script>
      </Helmet>

      <SideMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

      <div className="flex flex-col">
        <Header setIsOpen={setIsOpen} />
        <Hero scrollToContact={() => scrollToSection("contact")} />
      </div>

      <About />
      <Services />
      <ServicesList />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
