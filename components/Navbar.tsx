import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => (
  <header className="absolute z-10 w-full">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Car Hub"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <Button
        title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default Navbar;
