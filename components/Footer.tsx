"use client";
import Heading from "./Heading";
import { getTodaysDate } from "@/utils/getTodaysDate";
import Overlay from "./Overlay";

export default function Footer() {
  return (
    <footer className="w-full min-h-[20vh] relative flex items-center justify-center overflow-clip">
      <div className="container flex items-center flex-col gap-10">
        <Heading
          text={
            <>
              Good design feels invisible,{" "}
              <span className="italic mr-1">yet</span> it’s the first thing you
              notice.
            </>
          }
          className="text-4xl"
        />

        <div className="w-full flex items-center justify-between">
          <p className="font-semibold text-lg tracking-tight">&copy; 2025</p>
          <p className="text-lg">
            Made by{" "}
            <span className="font-semibold tracking-tight">Kaif Saiyed</span>
          </p>
          <p className="font-semibold text-lg tracking-tight">
            {getTodaysDate()}
          </p>
        </div>
      </div>
      <Overlay />
    </footer>
  );
}
