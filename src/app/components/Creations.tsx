import Button from "@/app/components/Button";
import EarthDesktop from "@/app/assets/images/desktop/image-deep-earth.jpg";
import EarthMobile from "@/app/assets/images/mobile/image-deep-earth.jpg";
import ArcadeDesktop from "@/app/assets/images/desktop/image-night-arcade.jpg";
import ArcadeMobile from "@/app/assets/images/mobile/image-night-arcade.jpg";
import SoccerDesktop from "@/app/assets/images/desktop/image-soccer-team.jpg";
import SoccerMobile from "@/app/assets/images/mobile/image-soccer-team.jpg";
import GridDesktop from "@/app/assets/images/desktop/image-grid.jpg";
import GridMobile from "@/app/assets/images/mobile/image-grid.jpg";

const Creations = () => {
  const items = [
    {
      desktop: EarthDesktop.src,
      mobile: EarthMobile.src,
      title: "Deep Earth",
    },
    {
      desktop: ArcadeDesktop.src,
      mobile: ArcadeMobile.src,
      title: "Night Arcade",
    },
    {
      desktop: SoccerDesktop.src,
      mobile: SoccerMobile.src,
      title: "Soccer Team VR",
    },
    {
      desktop: GridDesktop.src,
      mobile: GridMobile.src,
      title: "The Grid",
    },
  ];

  return (
    <>
      <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>

            <Button class_name="hidden md:block">See All</Button>
          </div>

          {/*Items Container*/}
          <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            {/*item*/}
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden md:w-1/4"
                >
                  {/*desktop*/}
                  <img
                    src={item.desktop}
                    alt="desktop"
                    className="hidden w-full duration-200 md:block group-hover:scale-110"
                  />
                  {/*mobile*/}
                  <img
                    src={item.mobile}
                    alt="mobile"
                    className="w-full md:hidden"
                  />
                  {/*gradient*/}
                  <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70" />
                  <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                    {item.title}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Creations;
