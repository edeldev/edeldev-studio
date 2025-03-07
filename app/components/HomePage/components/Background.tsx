"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import IMAGE_FALLBACK from "@/public/background.webp";

export const Background = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <Fragment>
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-[1]"
          onError={handleVideoError}
        >
          <source src="/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={IMAGE_FALLBACK}
          alt="Fallback Image"
          className="fixed top-0 left-0 w-full h-full object-cover -z-[1]"
        />
      )}

      <div className="fixed top-0 left-0 w-full h-full bg-[#000000ac] -z-[1]"></div>
    </Fragment>
  );
};
