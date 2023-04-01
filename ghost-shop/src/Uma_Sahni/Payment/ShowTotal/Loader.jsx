import React from "react";

const Loader = () => {
  return (
    <div>
      <lottie-player
        src="https://assets6.lottiefiles.com/private_files/lf30_zZkrDU.json"
        background="transparent"
        speed="1"
        style={{width: "300px", height: "300px"}}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loader;
