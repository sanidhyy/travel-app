"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NAV_LINKS, SITE_INFO, SOURCE_CODE } from "@/constants";
import { Button } from ".";

// navbar
const Navbar = () => {
  // is nav menu (mobile) open
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* brand logo */}
      <Link href="/">
        <Image
          src={SITE_INFO.logo}
          alt={SITE_INFO.name}
          title={SITE_INFO.name}
          width={74}
          height={29}
        />
      </Link>

      {/* nav links */}
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

      {/* source code btn */}
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

      {/* hamburger (mobile) menu */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenu(true)}
      />

      {/* START: NAVBAR (SMALL DEVICES) */}
      <div className={`navbar-menu relative z-50 ${!isMenu && "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            {/* header brand logo (mobile) */}
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image
                src={SITE_INFO.logo}
                alt={SITE_INFO.name}
                title={SITE_INFO.name}
                width={74}
                height={29}
              />
            </Link>
            {/* close navbar btn */}
            <button className="navbar-close" onClick={() => setIsMenu(false)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* navbar links (mobile) */}
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={`sm-${link.key}`} className="mb-1">
                <Link
                  href={link.href}
                  className="block p-4 hover:bg-slate-50 hover:text-coral-red font-montserrat leading-normal text-md text-slate-gray rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* source code btn */}
          <div className="mt-auto pt-6">
            <Link
              href={SOURCE_CODE.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                type="button"
                title={SOURCE_CODE.title}
                icon={SOURCE_CODE.icon}
                variant="btn_dark_green"
                full
              />
            </Link>
          </div>
        </nav>
      </div>
      {/* END: NAVBAR (SMALL DEVICES) */}
    </nav>
  );
};

export default Navbar;
