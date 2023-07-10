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

    useCountUp({
      ref: countUpRef,
      start: startNum,
      end: finishNum,
      suffix:"+",
      duration: 6,
      enableScrollSpy: true as boolean,
      onStart: onStart,
      onEnd: onEnd,
    });

    return (
      <>
        <span className=" h-auto inline-block" style={{width:"90px"}} {...containerProps} ref={countUpRef}>
          {startNum}
        </span>
      </>
    );
  };

  export default CouteUpHook;
