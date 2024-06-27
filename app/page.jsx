import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import FadeDown from "@/components/FadeDown";

const Home = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <FadeDown>
            <div className="text-center xl:text-left">
              <h1 className="h1 mb-6">
                COCHA <span className="text-secundary">ESCENA</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Descubre y vive la Cultura Andina a través de la danza y el
                teatro Otavaleño
              </p>
              {/* btn & social */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Ver más</span>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-white hover:bg-secundary hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            </FadeDown>
            {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
