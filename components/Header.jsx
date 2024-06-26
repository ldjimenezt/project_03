import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white absolute top-0 left-0 w-full z-20">
        {/* logo */}
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                    <img src="/logo.png" alt="Logo Cocha" className="object-contain w-14 h-14"/>
            </Link>

            {/* desktop nav & hire button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link   href="/contact">
                    <Button>Dona</Button>
                </Link>
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
    );
};

export default Header