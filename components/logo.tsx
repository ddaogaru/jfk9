import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative transition-transform duration-200 hover:scale-105">
      <Link href="/" className="block">
        <Image
          src="/Joint_Forces_K9_Group_Logo.svg"
          alt="Joint Forces K9 Group Logo"
          width={336}
          height={101}
          priority
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          loader={({ src }) => src}
        />
      </Link>
    </div>
  );
};

export default Logo;
