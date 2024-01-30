import { motion } from "framer-motion";

export const About = () => {
  // Initial and animate states for the motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-oe-blue bg-opacity-10 px-4 py-8 text-center text-oe-blue sm:gap-12 sm:px-8 sm:py-36">
      <motion.h1
        className="px-1 text-2xl font-bold sm:text-3xl md:px-12 md:text-4xl lg:text-5xl xl:w-[70%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to Optimize Electrical
      </motion.h1>
      <motion.p
        className="text-md px-1 sm:text-lg sm:leading-relaxed md:px-12 md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:w-[70%] xl:leading-relaxed"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Optimize Electrical is your local family owned and operated Electrician.
        We can help you with any size electrical job, from changing a light
        globe, to a full re-wire. Whether it be for your home, office, business,
        shop, or outdoor entertainment areas – we can help you with all your
        electrical needs.
      </motion.p>
    </div>
  );
};
