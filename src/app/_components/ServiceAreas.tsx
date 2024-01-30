import { motion } from "framer-motion";

export const ServiceAreas = () => {
  const suburbs = [
    { name: "Beerwah", image: "/img/suburbs/beerwah.jpg" },
    { name: "Caloundra", image: "/img/suburbs/caloundra.jpg" },
    { name: "Maleny", image: "/img/suburbs/maleny.jpg" },
    {
      name: "Glass House Mountains",
      image: "/img/suburbs/glass-house-mountains.jpg",
    },
    { name: "Glenview", image: "/img/suburbs/glenview.jpg" },
    { name: "Sippy Downs", image: "/img/suburbs/sippy-downs.jpg" },
    { name: "Mooloolaba", image: "/img/suburbs/mooloolaba.jpg" },
    { name: "Nambour", image: "/img/suburbs/nambour.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      id="service-areas"
      className="flex min-h-screen flex-col items-center justify-center bg-white py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.h2
          className="mb-14 text-3xl font-bold md:mb-20 md:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Areas We Service
        </motion.h2>
        <div className="grid grid-cols-2 gap-12 px-8 lg:grid-cols-4 lg:gap-16">
          {suburbs.map((suburb, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="h-24 w-24 overflow-hidden rounded-full shadow-lg md:h-32 md:w-32 lg:h-40 lg:w-40"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={suburb.image}
                  alt={suburb.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold">{suburb.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
