import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name is Srikar Namburi`,
      'Guy-who-loves-Caramel-Macchiatos.tsx',
      '<ButLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="profile pic"
        src="https://media-exp1.licdn.com/dms/image/C5603AQH3ftML_V__sA/profile-displayphoto-shrink_400_400/0/1607266997243?e=1669248000&v=beta&t=s_vq2lOSZ_DWcRsJVzSno3p7wQKTmtfCdBcJ5CxMu50"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="pt-5 z-50 ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skill">
          <button className="heroButton">Skill</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
