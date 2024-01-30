export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img
            src="/img/logo-stacked.png"
            alt="Optimize Electrical Logo"
            className="h-12 md:h-24 mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex flex-col text-sm md:text-base gap-1">
            <span className="whitespace-nowrap">
              Phone:{" "}
              <a
                href="tel:+61477838648"
                className="text-oe-orange hover:text-orange-300 transition-colors"
              >
                0477 838 648
              </a>
            </span>
            <span className="whitespace-nowrap">
              Email:{" "}
              <a
                href="mailto:optimizeelectrical@gmail.com"
                className="text-oe-orange hover:text-orange-300 transition-colors"
              >
                optimizeelectrical@gmail.com
              </a>
            </span>
            <span>
              Licence no: <span className="font-mono">91512</span>
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Optimize Electrical. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
