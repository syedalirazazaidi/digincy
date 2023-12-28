import React from "react";
import Header from "../../../components/shared/Header";

export default function Banner() {
  return (
    <>
      <main>
        <div className="absolute top-0   -z-50">
          {" "}
          <video
            className="object-cover h-[650px] w-screen"
            autoPlay
            loop
            muted
          >
            <source
              src="https://diginsy.com/wp-content/uploads/2023/10/vid.mp4"
              type="video/mp4"
            />
          </video>{" "}
        </div>
      </main>
    </>
  );
}
