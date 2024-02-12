import Logo from "@/public/assets/Images/cv-builder2.png";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
    </>
  );
}
