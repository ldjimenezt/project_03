"use client";

import Link from "next/link";
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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-secundary"
            } capitalize font-medium hover:text-secundary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
