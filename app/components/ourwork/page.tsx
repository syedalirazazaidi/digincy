import React from "react";
import Image from "next/image";
import bg_myImg from "./backgroundImage/bg_image.png";
export default function OurWork() {
  return (
    <div className="absolute top-[1300px]">
      <Image
        alt="Mountains"
        src={bg_myImg}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "50%",
        }}
      />
    </div>
  );
}
