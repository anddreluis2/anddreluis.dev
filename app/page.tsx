/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-start  py-16 px-48">
        <div className="text-lg">André Luis de Oliveira Andrade</div>
        <div className="w-96 py-10">
          Hello! ✋ <br />
          <br />
          My name is André and I'm a software engineer based in Curitiba,
          Brazil. <br />
          <br />
          This is a space to share my social media and some dev.to posts about
          tech and maybe sports. <br />
          <br />
          You can learn more about me on Twitter, explore my experience on
          LinkedIn, and check out my code on GitHub.
          <span className="px-1 animate-ping font-extrabold">|</span>
        </div>

        <div className="flex pt-10 gap-10 w-full">
          <Link className="flex gap-2 cursor-pointer hover:underline" href={""}>
            <Github />
          </Link>
          <Link className="cursor-pointer flex gap-2 hover:underline" href={""}>
            <Twitter />
          </Link>
          <Link className="cursor-pointer flex gap-2 hover:underline" href={""}>
            <Linkedin />
          </Link>
        </div>
      </main>
    </>
  );
}
