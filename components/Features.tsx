import { FEATURES } from "@/constants";
import Image from "next/image";

// feature item props
type FeatureItemProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

// feature item
const FeatureItem = ({
  title,
  icon,
  variant,
  description,
}: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      {/* top icon */}
      <div className={`rounded-full p-4 lg:p-7 bg-${variant}-50`}>
        <Image src={icon} alt={`${title}-icon`} width={28} height={28} />
      </div>

      {/* title */}
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      {/* description */}
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

// features
const Features = () => {
  return (
    <section
      className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
      id="features"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* left side */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        {/* right side */}
        <div className="z-10 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />

            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          {/* feature list */}
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
