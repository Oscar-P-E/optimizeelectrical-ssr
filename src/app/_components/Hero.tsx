import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import GoogleStars from "./GoogleStars";

type HeroProps = {
  scrollToContact: () => void;
};

export const Hero = ({ scrollToContact }: HeroProps) => {
  // const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 + 0.3, duration: 0.5 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 } },
  };

  // useEffect(() => {
  //   if (videoLoaded) {
  //     document.getElementById("opacity")?.classList.add("bg-opacity-50");
  //   }
  // }, [videoLoaded]);

  useEffect(() => {
    if (videoRef.current) {
      void videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative">
      {/* Background video */}
      <video
        autoPlay
        ref={videoRef}
        loop
        muted
        playsInline
        poster="/img/optimize-electrical-poster.jpg"
        className="absolute z-10 h-full w-full object-cover"
        // onPlay={() => setVideoLoaded(true)}
      >
        <source
          src="/video/optimize-electrical-no-audio.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content of hero section */}
      <div
        id="opacity"
        className="relative z-20 flex h-screen flex-col items-center justify-center bg-oe-blue bg-opacity-50 pb-16"
      >
        {/* <div className="pt-2"></div> */}

        <motion.h1
          className="max-w-screen-lg px-4 text-center text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Need A Reliable Electrician on the Sunshine Coast?
        </motion.h1>

        <ul className="flex flex-col gap-2 pb-10 pt-8 sm:gap-3 sm:pt-10">
          {[
            "Lifetime Workmanship Guarantee",
            "No Call Out Charges or Travel Costs",
            "All Types of Electrical Work",
          ].map((item, i) => (
            <motion.li
              key={item}
              className="text-center text-xl text-white sm:text-2xl"
              variants={listItemVariants}
              custom={i} // custom prop to set delay
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="pr-2 text-oe-orange sm:pr-3"
                icon={faCheck}
              />
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="pt-1"></div>
        <motion.button
          className="relative z-10 transform rounded-xl bg-oe-orange px-6 py-2 text-xl text-white transition duration-300 hover:scale-105 sm:px-8 sm:text-2xl"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={scrollToContact}
        >
          Contact Us
        </motion.button>
<div className="pt-4">
        <GoogleStars />
        </div>

        <div className="pb-4"></div>
      </div>
    </div>
  );
};
