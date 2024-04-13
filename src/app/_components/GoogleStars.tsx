import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function GoogleStars() {
  const GoogleIcon = "/svg/google-icon.svg";

  return (
    <div className="align-center mx-auto grid grid-rows-2 items-center justify-center gap-x-3 gap-y-1 px-2 pt-8 lg:flex lg:grid-rows-1 ">
      <span className="flex flex-row items-center gap-2">
        <Image
          src={GoogleIcon}
          alt="Google icon"
          width={32}
          height={32}
          className="h-8 w-8"
        />

        <span className="flex flex-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-8 w-8 text-yellow-500" />
          ))}
        </span>
      </span>
      <span className="flex flex-row items-center justify-center gap-2 text-xl text-white">
        <a href="https://maps.app.goo.gl/tJD59QQGmP8B59zh7">
          5.0 stars on <span className="font-bold">Google</span>
        </a>
      </span>
    </div>
  );
}
