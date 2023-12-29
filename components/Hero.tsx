import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="col-span-2 grid grid-cols-2 max-md:grid-cols-1 gap-6 ">
      <div className="md:col-span-2 relative h-80">
        <Image
          src="/assets/images/image-web-3-desktop.jpg"
          alt="hero"
          fill
          className="object-cover "
        />
      </div>
      <h1 className="text-6xl max-md:text-4xl font-bold">
        The Bright Future of Web 3.0?
      </h1>
      <div className="flex flex-col justify-between max-md:gap-6">
        <p className="text-neutral-600">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-primary-red text-white py-3 px-12 tracking-[4px] w-fit hover:bg-neutral-950">
          READ MORE
        </button>
      </div>
    </section>
  );
}

export default Hero;
