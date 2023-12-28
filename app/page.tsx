import ServiceList from "@/components/shared/Card";
import React from "react";
import Banner from "./components/banner/page";
import OurWork from "./components/ourwork/page";

export default function Home() {
  return (
    <>
      <main>
        {/* <div className="absolute  top-0 bottom-60  -z-50 ">
          {" "}
          <video autoPlay loop muted>
            <source
              src="https://diginsy.com/wp-content/uploads/2023/10/vid.mp4"
              type="video/mp4"
            />
          </video>{" "}
        </div> */}
        <Banner />
        <ServiceList />
        <OurWork />
      </main>
    </>
  );
}

{
  /* <div className="relative h-screen text-center flex items-center z-50
      ">
  <h2>RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON</h2>
  <h1>
  Growing Brands Online
  </h1>
</div> */
}

{
  /* <div>
<div >
  <p>SERVICES</p>
  <p>Best Services We Can Offer For You !</p>
</div>
<div></div>
<p>
  Consumers today predominantly use digital methods to research
  products. Before engaging with a brand or product, we often
  investigate it online. Meanwhile, 51% of consumers admit to using
  Google as their primary tool for product research before making a
  purchase.
</p>
</div> */
}
