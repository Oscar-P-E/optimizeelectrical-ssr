import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faTools,
  faHammer,
  faBolt,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div
      id="services"
      className="mx-auto cursor-default bg-white py-12 text-oe-blue md:py-36 lg:max-w-[90%]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Residential Electrician Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faHome}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Residential Electrician</h2>
            <p className=" mb-4">
              Our skilled electricians can handle all your home electrical
              needs, from general repair to electrical upgrades, we have the
              solution. By going with a qualified, experienced electrician, you
              save hundreds of dollars in the long run, and countless headaches.
            </p>
          </div>

          {/* Commercial Electrician Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faBuilding}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Commercial Electrician</h2>
            <p className=" mb-4">
              We provide a wide range of commercial electrical services to
              businesses, from electrical repair and upgrades to maintenance.
              Our experience and knowledge also enable us to provide
              energy-saving and lighting solutions like LED retrofits.
            </p>
          </div>

          {/* Electrical Upgrades Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faTools}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Electrical Upgrades</h2>
            <p className=" mb-4">
              Upgrade your electrical systems with our expert services for
              improved performance and safety. Our experienced electricians can
              provide sound advice, service, repair, or replacement of your
              electrical panel, circuit breakers, or wiring.
            </p>
          </div>

          {/* Home Renovations Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faHammer}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Home Renovations</h2>
            <p className=" mb-4">
              If you’re knee-deep in home renovation, you’re going to need a
              qualified electrician on hand to help make sure the wiring and
              electrics are up to scratch. Small or big, we can help with your
              home renovation electrical needs.
            </p>
          </div>

          {/* Emergency Electrician Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faBolt}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Emergency Electrician</h2>
            <p className=" mb-4">
              For urgent electrical issues, our emergency service team is ready
              to respond promptly to ensure your safety and comfort. At Optimize
              Electrical, we’re just around the corner.
            </p>
          </div>

          {/* Moving Home Card */}
          <div className="transform rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon
              icon={faTruckMoving}
              size="3x"
              className="mb-5 text-oe-orange"
            />
            <h2 className="mb-4 text-2xl font-bold">Moving Home</h2>
            <p className=" mb-4">
              Moving home often reveals electrical problems. Or perhaps there is
              something you’d like to change. We will work to your budget and
              use our many years of electrical experience to help you out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
