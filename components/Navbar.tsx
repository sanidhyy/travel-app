import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SITE_INFO, SOURCE_CODE } from "@/constants";
import { Button } from ".";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src={SITE_INFO.logo}
          alt={SITE_INFO.name}
          title={SITE_INFO.name}
          width={74}
          height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold active:text-green-50"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href={SOURCE_CODE.url} target="_blank" rel="noreferrer noopener">
          <Button
            type="button"
            title={SOURCE_CODE.title}
            icon={SOURCE_CODE.icon}
            variant="btn_dark_green"
          />
        </Link>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
