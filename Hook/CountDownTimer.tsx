"use client";
import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/21/2023 6:15:02"); // تاریخ هدف برای شمارش معکوس
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d >= 0 ? d : 0); // مقدار روزها را برابر با صفر یا عدد محاسبه شده قرار دهید

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h >= 0 ? h : 0); // مقدار ساعت‌ها را برابر با صفر یا عدد محاسبه شده قرار دهید

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m >= 0 ? m : 0); // مقدار دقیقه‌ها را برابر با صفر یا عدد محاسبه شده قرار دهید

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s >= 0 ? s : 0); // مقدار ثانیه‌ها را برابر با صفر یا عدد محاسبه شده قرار دهید

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
        clearInterval(interval); // تایمر را غیرفعال کنید
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-2 sm:flex-row md:w-fit">
      {/* seconds */}
      <div className="flex  flex-col items-center w-fit justify-center">
        <div
          className="mb-2  flex  items-center justify-center rounded-2xl p-4"
          style={{
            backgroundColor: "rgba(46, 29, 114, 0.65)",
            borderRadius: "10px",
            width: "45px",
            height: "45px",
          }}
        >
          <p className="mx-4 my-3 flex items-center justify-center text-2xl font-medium text-white">
            {seconds}
          </p>
        </div>

        <p className="w-fit text-18 font-light text-white">ثانیه</p>
      </div>

      {/* dot */}
      <div className=" hidden h-fit items-start justify-center px-2 pt-2 text-xl text-white sm:flex">
        :
      </div>

      <div className="flex  flex-col items-center w-fit justify-center">
        <div
          className="mb-2  flex  items-center justify-center rounded-2xl p-4"
          style={{
            backgroundColor: "rgba(46, 29, 114, 0.65)",
            borderRadius: "10px",
            width: "45px",
            height: "45px",
          }}
        >
          <p className="mx-4 flex items-center justify-center py-3 text-2xl font-medium text-white">
            {minutes}
          </p>
        </div>
        <p className="w-fit text-18 font-light text-white">دقیقه</p>
      </div>

      {/* dot */}
      <div className=" hidden h-fit items-start justify-center px-2 pt-2 text-xl text-white sm:flex">
        :
      </div>

      <div className="flex  flex-col items-center w-fit justify-center">
        <div
          className="mb-2  flex  items-center justify-center rounded-2xl p-4"
          style={{
            backgroundColor: "rgba(46, 29, 114, 0.65)",
            borderRadius: "10px",
            width: "45px",
            height: "45px",
          }}
        >
          <p className="mx-4 flex items-center justify-center py-3 text-2xl font-medium text-white">
            {hours}
          </p>
        </div>
        <p className="w-fit text-18 font-light text-white">ساعت</p>
      </div>

      {/* dot */}
      <div className=" hidden h-fit items-start justify-center px-2 pt-2 text-xl text-white sm:flex">
        :
      </div>

      {/* hours */}
      <div className="flex  flex-col items-center w-fit justify-center">
        <div
          className="mb-2  flex  items-center justify-center rounded-2xl p-4"
          style={{
            backgroundColor: "rgba(46, 29, 114, 0.65)",
            borderRadius: "10px",
            width: "45px",
            height: "45px",
          }}
        >
          <p className="mx-4 flex items-center justify-center py-3 text-2xl font-medium text-white">
            {days}
          </p>
        </div>
        <p className="w-fit text-18 font-light text-white">روز</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
