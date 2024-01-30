import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const Header = ({ setIsOpen }: HeaderProps) => {
  return (
    <div className="relative px-4 pb-5 pt-8 shadow-md sm:px-8 sm:pb-8 sm:pt-8">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-full justify-center pb-4 align-bottom md:w-auto md:justify-start md:py-0">
          <img
            src="/img/logo-long.png"
            alt="logo"
            className="h-12 md:h-11 lg:h-12"
          />
        </div>

        {/* Make phone number clickable */}
        <a
          href="tel:0477838648"
          className="mx-auto flex items-center whitespace-nowrap text-3xl text-oe-orange md:absolute md:right-8 md:top-10 md:pr-14 md:text-2xl lg:text-3xl"
        >
          <FontAwesomeIcon className="pr-4" icon={faPhone} />
          0477 838 648
        </a>

        <button
          className="mx-auto w-full pt-5 text-4xl text-oe-orange md:absolute md:right-5 md:top-10 md:mx-0 md:mt-0 md:w-auto md:pt-0 md:text-3xl lg:text-4xl"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};
