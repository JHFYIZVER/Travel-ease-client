import Image from "next/image";
import authImg from "@/public/AuthImg.jpg";

import React from "react";

const ImageAuth = () => {
  return <Image src={authImg} alt="AuthImg" />;
};

export default ImageAuth;
