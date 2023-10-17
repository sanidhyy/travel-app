import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SITE_INFO,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// footer column props
type FooterColumnProps = {
  title: string;
  children: ReactNode;
};

// footer column
const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="flex flex-col gap-5">
    {/* title */}
    <h4 className="bold-18 whitespace-nowrap">{title}</h4>
    {/* children */}
    {children}
  </div>
);

// footer
const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* brand logo */}
          <Link href="/" className="mb-10">
            <Image
              src={SITE_INFO.logo}
              alt={SITE_INFO.name}
              title={SITE_INFO.name}
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* footer links */}
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                {/* each column links */}
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              {/* footer contact links */}
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <p
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    {/* link label */}
                    <span className="whitespace-nowrap">{link.label}:</span>
                    {/* link url */}
                    <Link
                      href={link.url}
                      className="medium-14 whitespace-nowrap text-blue-70"
                      title={link.value}
                    >
                      {link.value}
                    </Link>
                  </p>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              {/* footer social links */}
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      key={link.label}
                      title={link.label}
                    >
                      {/* social icon */}
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* break line */}
        <hr className="border bg-gray-20" />

        {/* brand copyright */}
        <p className="regular-14 w-full text-center text-gray-30">
          &copy; {new Date().getFullYear()}-
          {(new Date().getFullYear() % 100) + 1} {/* brand name */}
          <Link href="/" className="text-green-50 font-bold-50">
            {SITE_INFO.name}
          </Link>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
