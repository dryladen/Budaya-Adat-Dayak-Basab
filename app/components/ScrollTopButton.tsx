"use client";
import { ArrowUp } from "lucide-react";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollTopButton = () => {
  return (
    <>
      <button
        className={`fixed bottom-0 right-0 sm:right-5 backdrop-blur-lg backdrop-saturate-200  rounded-xl p-2 mr-2 mb-4 sm:mb-[71px] z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
      >
        <ArrowUp className="inline-block h-6 w-6 text-gray-600" />
      </button>
    </>
  );
};

export default ScrollTopButton;
