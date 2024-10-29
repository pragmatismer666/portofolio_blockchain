"use client";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, loop = true, autoplay = true, width = '95%' }) => {
  return (
    <Lottie 
      animationData={animationPath} 
      loop={loop} 
      autoplay={autoplay} 
      style={{ width }} 
    />
  );
};

export default AnimationLottie;