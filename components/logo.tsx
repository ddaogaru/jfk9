
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          className="h-[7rem] w-auto"
          loader={({ src }) => src}
        />
      </Link>
    </div>
  );
};

export default Logo;
