"use client";
import Link from "next/link";
import Logo from "@/components/Logo/page";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function page() {
  return (
    <header>
      <nav
        className=" bg-white opacity-95 shadow border-gray-200
         fixed w-full z-20 top-0 left-0 border-b border-gray-200
         py-[1.2rem]"
      >
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="https://github.com/mouhamedhanne" target="_blank">
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hidden lg:block"
              />
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default page;
