import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

type SideMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
};

export const SideMenu = (props: SideMenuProps) => {
  const { isOpen, setIsOpen, scrollToSection } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 bg-oe-orange p-6 h-full overflow-auto ease-in-out transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="text-white text-xl" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex flex-col pt-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            HOME
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("services");
            }}
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            RESIDENTIAL
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("services");
            }}
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            COMMERCIAL
          </a>
          <a
            href="#service-areas"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("service-areas");
            }}
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            FIND AN ELECTRICIAN NEAR YOU
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("contact");
            }}
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
};
