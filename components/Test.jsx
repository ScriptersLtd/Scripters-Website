"use client";
import Socials from "./Socials";

export default function Test() {
  return (
    <div
      className="relative w-[100vw] text-center flex flex-col items-center justify-center bg-neutral-900"
    >
      <div className="flex items-center justify-center py-14 px-2 mt-24">
        <p className="text-transparent bg-clip-text bg-fixed bg-center bg-cover uppercase bg-[url('/office.jpg')] font-black text-[55px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[140px]">
          The first rule is HARDWORK
        </p>
      </div>
      <Socials />
    </div>
  );
}
