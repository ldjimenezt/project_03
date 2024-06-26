"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Nosotros",
    path: "/Nosotros",
  },
  {
    name: "Equipo",
    path: "/Equipo",
  },
  {
    name: "Producciones",
    path: "/Producciones",
  },
  {
    name: "Contacto",
    path: "/Contacto",
  },
];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-secundary" />
      </SheetTrigger>
      <SheetContent className=" flex flex-col">
        {/* logo */}
        <div className="mt-24 mb-24 text-center text-2xl flex justify-center items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo Cocha"
              className="object-contain w-24 h-24"
            />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-secundary"
                } text-xl capitalize hover:text-secundary transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
