"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveformFooter = () => {
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [waveformLoaded, setWaveformLoaded] = useState(false);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#2F3234",
      progressColor: "#4D8AE5",
      barWidth: 3,
      cursorWidth: 1,
      height: 100,
      hideCursor:true,
      barRadius: 5,
      barGap: 3,
    });

    wavesurfer.current.load("/audio.mp3");
    wavesurfer.current.on("ready", () => {
      setWaveformLoaded(true);
      // wavesurfer.current?.play();
    });

    return () => {
      wavesurfer.current?.destroy();
    };
  }, []);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(!isPlaying);
      console.log(isPlaying ? "pause" : "play");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div
          className="w-full max-w-xs"
          id="waveform"
          ref={wavesurfer as React.RefObject<HTMLDivElement>}
        >
          {waveformLoaded ? (
            <>
              <div className={`${waveformLoaded ? "visible" : "hidden"}`}></div>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-xs text-white">در  ... درحال بارگذاری</p>
            </div>
          )}
        </div>
        <button className="text-white" onClick={togglePlay}>
          {isPlaying ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 26 26" fill="none"><path d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm-1.25 13.03c0 .48-.2.67-.71.67h-1.3c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06h.01Zm5.28 0c0 .48-.2.67-.71.67h-1.29c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06Z" fill="#4d8ae5"></path></svg>
          ) : (
            <svg
              width="45"
              height="45"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="13" fill="#4D8AE5" />
              <path
                d="M15.9611 14.7365L11.4923 17.2901C10.159 18.052 8.5 17.0893 8.5 15.5536V13V10.4464C8.5 8.91071 10.159 7.94798 11.4923 8.70987L15.9611 11.2635C17.3048 12.0313 17.3048 13.9687 15.9611 14.7365Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default WaveformFooter;
