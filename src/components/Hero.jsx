import { profile } from "../data";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";

function Hero() {
  const whatsappLink =
    "https://wa.me/" +
    profile.phone +
    "?text=" +
    encodeURIComponent("Namaste, mujhe website banwani hai");

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Order.", "Affordable Price"],
      typeSpeed: 100,
      backSpeed: 100,
      typedelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative  py-12 ">
      <div className="relative z-15">
        {" "}
        <div className="App ">
          <span className="text-2xl text-green-600 font-bold" ref={el} />
        </div>
        <h1 className="text-3xl  md:text-5xl font-bold text-black leading-tight mt-4 z-15">
          {profile.headline}
        </h1>
        <p className="text-stone-900 mt-3 z-55">{profile.subtext}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#demos"
            className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
          >
            Click Me For Demo !
          </a>
          <a
            href={whatsappLink}
            className="border-2 border-red-700 text-black font-semibold px-6 py-3 rounded-xl z-1999"
          >
            Click Me For WhatsApp
          </a>
        </div>
      </div>
      {/* <div className="bg-green-500 absolute left-190 top-10 rounded-[50%] blur-2xl h-100 w-100">
        ; hai
      </div> */}
      <motion.div
        className="box bg-green-500 fixed left-60 sm:left-100 md:left-200 top-10 rounded-[50%] blur-3xl h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-80 z-1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 2,
          backgroundColor: [
            "rgb(0, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(255, 0, 0)",
            "rgb(255, 0, 0)",
          ],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          backgroundColor: {
            duration: 2,
            times: [0, 0.49, 0.5, 1],
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ x: 100 }}
      />
      {/* <motion.div
        className="fixed -z-10 pointer-events-none rounded-full bg-green-500 blur-3xl
             top-10 right-0
             h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-80 md:right-10"
        animate={{ scale: 1.5 }}
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
        layout
      /> */}
    </section>
  );
}

export default Hero;
