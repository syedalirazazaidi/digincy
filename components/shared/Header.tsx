import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincylogo from "../../public/icons/digency_logo.png";
import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between py-8 mx-20 ">
      <div>
        <Image
          src={digincylogo}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-[#AD0B1C] rounded-none hover:bg-none py-4 px-5">
          Request a quote
        </Button>
        <AlignJustify size={20} color="#ffff" />
      </div>
    </header>
  );
}
