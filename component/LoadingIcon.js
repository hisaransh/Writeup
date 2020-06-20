import React, { useState } from "react";
import Lottie from 'react-lottie'
import animationData from '../public/animation/loading.json'

const LoadingIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return(
    <Lottie options={defaultOptions}
          height={80}
          width={80}
    />
  )
}

export default LoadingIcon;
