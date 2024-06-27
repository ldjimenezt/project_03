import Image from "next/image";
import DesktopImage from "../public/hero.jpg";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-screen">
      {/* Imagen de fondo */}
      <div className="relative h-full">
        <div className="absolute inset-0 z-[-1]">
          
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white/95 px-4">
          <Header />

          {/* Contenido del título y subtítulo */}
          <div className="container mx-auto mb-8 text-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              COCHA ESCENA
            </h1>
            <p className="text-sm md:text-2xl max-w-xl">
              <span className="inline-block overflow-hidden">
                Descubre y Vive la Cultura Andina a través de la danza y el
                teatro
              </span>
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:border-secundary uppercase flex items-center gap-2"
              >
                <span>Ver más</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border-secundary rounded-full flex justify-center items-center text-white text-base hover:bg-secundary hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
