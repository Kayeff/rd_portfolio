"use client";
import { geistMono } from "@/fonts/fonts";
import moment from "moment";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState<string>(
    moment().format("LTS")
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentDate(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return <p className={`${geistMono.className}`}>{currentDate}</p>;
}
