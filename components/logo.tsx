
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="relative transition-transform duration-200 hover:scale-105">
      <Link href="/" className="block">
        <Image
          src="/joint_forces_k9_logo.webp"
          alt="Joint Forces K9 Group Logo"
          width={336}
          height={101}
          priority
          className="h-[7rem] w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
