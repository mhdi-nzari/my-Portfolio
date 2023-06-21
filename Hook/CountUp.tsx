"use client";

import React from "react";
import { useCountUp } from "react-countup";

interface CouteUpHookProps {
  startNum: number;
  finishNum: number;
}

const CouteUpHook: React.FC<CouteUpHookProps> = ({ startNum, finishNum }) => {
  const [loading, setLoading] = React.useState(false);
  const countUpRef = React.useRef(null);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };

  const containerProps = {
    "aria-busy": loading,
  };

  const { start } = useCountUp({
    ref: countUpRef,
    start: startNum,
    end: finishNum,

    suffix: "+",
    duration: 6,
    enableScrollSpy: true as boolean,
    onStart: onStart,
    onEnd: onEnd,
  });

  return (
    <>
      <span className="px-0.5" {...containerProps} ref={countUpRef}>
        {startNum}
      </span>
    </>
  );
};

export default CouteUpHook;
