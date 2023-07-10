import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React from "react";

const PortfolioItem = () => {
  return (
    <figure className="relative h-[400px] w-full rounded-2xl bg-portfolio_item bg-cover bg-center bg-no-repeat drop-shadow-item group">
      <figcaption className="absolute bottom-0 left-0   w-full   backdrop-blur-sm bg-white/50  rounded-ee-2xl rounded-es-2xl border-t ">
        <div className="w-full px-3 py-3 ">
          <div className="flex items-center justify-start gap-2">
            <Link href={"/"}>
              <p className="text-right text-xl font-[950] text-grey-900">
                طراحی سایت دیلی پادکست
              </p>
            </Link>
            <Link
              href={"#"}
              className="flex w-fit rounded-full bg-secondary px-1 py-1 text-[9px] font-medium text-white"
            >
              سایت شرکتی
            </Link>
          </div>

          <div className="flex w-full flex-wrap justify-between pt-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.84589 1.33331C5.84589 1.05717 5.62203 0.833313 5.34589 0.833313C5.06975 0.833313 4.84589 1.05717 4.84589 1.33331V2.3333H4.05079C2.92511 2.3333 2.01257 3.24584 2.01257 4.37152V5.49998H14.0126H14.0126V4.37152C14.0126 3.24585 13.1 2.3333 11.9744 2.3333H11.1792V1.33331C11.1792 1.05717 10.9554 0.833313 10.6792 0.833313C10.4031 0.833313 10.1792 1.05717 10.1792 1.33331V2.3333H5.84589V1.33331ZM14.0126 6.49998H14.0126V12.6284C14.0126 13.7541 13.1 14.6666 11.9744 14.6666H4.05079C2.92511 14.6666 2.01257 13.7541 2.01257 12.6284V6.49998H14.0126ZM8.01256 10.6667C8.38075 10.6667 8.67922 10.3682 8.67922 9.99999C8.67922 9.6318 8.38075 9.33333 8.01256 9.33333C7.64437 9.33333 7.34589 9.6318 7.34589 9.99999C7.34589 10.3682 7.64437 10.6667 8.01256 10.6667ZM11.3459 9.99999C11.3459 10.3682 11.0474 10.6667 10.6792 10.6667C10.311 10.6667 10.0126 10.3682 10.0126 9.99999C10.0126 9.6318 10.311 9.33333 10.6792 9.33333C11.0474 9.33333 11.3459 9.6318 11.3459 9.99999ZM5.34589 10.6667C5.71408 10.6667 6.01256 10.3682 6.01256 9.99999C6.01256 9.6318 5.71408 9.33333 5.34589 9.33333C4.9777 9.33333 4.67922 9.6318 4.67922 9.99999C4.67922 10.3682 4.9777 10.6667 5.34589 10.6667Z"
                      fill="#383F45"
                    />
                  </svg>
                </span>
                <p className="text-12 font-normal text-grey-600">
                  خرداد ماه ۱۴۰۲
                </p>
              </div>

              <div className="flex items-center gap-1">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16737 1.6332C7.62737 1.23986 8.3807 1.23986 8.84737 1.6332L9.9007 2.53986C10.1007 2.7132 10.474 2.8532 10.7407 2.8532H11.874C12.5807 2.8532 13.1607 3.4332 13.1607 4.13986V5.2732C13.1607 5.5332 13.3007 5.9132 13.474 6.1132L14.3807 7.16653C14.774 7.62653 14.774 8.37986 14.3807 8.84653L13.474 9.89986C13.3007 10.0999 13.1607 10.4732 13.1607 10.7399V11.8732C13.1607 12.5799 12.5807 13.1599 11.874 13.1599H10.7407C10.4807 13.1599 10.1007 13.2999 9.9007 13.4732L8.84737 14.3799C8.38737 14.7732 7.63404 14.7732 7.16737 14.3799L6.11404 13.4732C5.91404 13.2999 5.5407 13.1599 5.27404 13.1599H4.1207C3.41404 13.1599 2.83404 12.5799 2.83404 11.8732V10.7332C2.83404 10.4732 2.69404 10.0999 2.52737 9.89986L1.62737 8.83986C1.24071 8.37986 1.24071 7.6332 1.62737 7.1732L2.52737 6.1132C2.69404 5.9132 2.83404 5.53986 2.83404 5.27986V4.1332C2.83404 3.42653 3.41404 2.84653 4.1207 2.84653H5.27404C5.53404 2.84653 5.91404 2.70653 6.11404 2.5332L7.16737 1.6332Z"
                      fill="#07BA4E"
                    />
                    <path
                      d="M7.19403 10.1132C7.0607 10.1132 6.93403 10.0598 6.8407 9.9665L5.22737 8.35317C5.03403 8.15984 5.03403 7.83984 5.22737 7.6465C5.4207 7.45317 5.7407 7.45317 5.93403 7.6465L7.19403 8.9065L10.0607 6.03984C10.254 5.8465 10.574 5.8465 10.7674 6.03984C10.9607 6.23317 10.9607 6.55317 10.7674 6.7465L7.54737 9.9665C7.45403 10.0598 7.32737 10.1132 7.19403 10.1132Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="text-12 font-normal text-grey-600">تکمیل شده</p>
              </div>
            </div>

            <div>
              <CustomButton
                title="مشاهده آنلاین"
                leftIcon="/images/icon/arrow_left_white.svg"
                textStyles="text-white text-sm font-normal"
                btnType={"button"}
                containerStyles={"bg-primary group-hover:outline-primary group-hover:-translate-y-1 !p-2"}
              />
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PortfolioItem;
