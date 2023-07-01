import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="relative mt-48 bg-slate-900">
      <Newsletter />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col">
          <div className="flex flex-col pb-8">
            <p className="pb-5 text-right text-lg font-bold text-white">
              من کی هستم
            </p>
            <p className="text-right text-lg font-bold text-white">
              من مهدی نظری طراح و برنامه نویس وبسایت یا بقولی فرانت اند دولوپرم
              که از سال ۱۳۹۸ تا الان توی حوضه تکنولوژی و استارت آپ دارم فعالیت
              میکنم . هدف من کمک به علاقمندانی هست که مسیر برنامه نویسی رو
              میخوان طی کنن و بدنبال منتور و مشاور برای حل چالش ها و داشتن یه
              راهنمای مطمئن برای مسیرشونه در کنار اون تو...
            </p>
          </div>
          <div className="w-full">
            <ul className="flex w-full flex-col items-start">
              <li className="flex gap-2">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                      stroke="#F1891E"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#F1891E"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                <p className=" text-base font-normal text-grey-300">ایران،اصفهان،کاشان</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
