import Image from "next/image";
import { Button } from ".";

// get app
const GetApp = () => {
  return (
    <section className="flex-center w-full flex-col pb-[100px]" id="download">
      <div className="get-app">
        {/* left side */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          {/* title */}
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          {/* subtitle */}
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>

          {/* download btn wrapper */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* app store btn */}
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />

            {/* play store btn */}
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
