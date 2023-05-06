import Button from "@/app/components/Button";
import EarthDesktop from "@/app/assets/images/desktop/image-deep-earth.jpg";
import EarthMobile from "@/app/assets/images/mobile/image-deep-earth.jpg";
import ArcadeDesktop from "@/app/assets/images/desktop/image-night-arcade.jpg";
import ArcadeMobile from "@/app/assets/images/mobile/image-night-arcade.jpg";
import SoccerDesktop from "@/app/assets/images/desktop/image-soccer-team.jpg";
import SoccerMobile from "@/app/assets/images/mobile/image-soccer-team.jpg";
import GridDesktop from "@/app/assets/images/desktop/image-grid.jpg";
import GridMobile from "@/app/assets/images/mobile/image-grid.jpg";
import AboveDesktop from "@/app/assets/images/desktop/image-from-above.jpg";
import AboveMobile from "@/app/assets/images/mobile/image-from-above.jpg";
import BorealisDesktop from "@/app/assets/images/desktop/image-pocket-borealis.jpg";
import BorealisMobile from "@/app/assets/images/mobile/image-pocket-borealis.jpg";
import CuriosityDesktop from "@/app/assets/images/desktop/image-curiosity.jpg";
import CuriosityMobile from "@/app/assets/images/mobile/image-curiosity.jpg";
import FishEyeDesktop from "@/app/assets/images/desktop/image-fisheye.jpg";
import FishEyeMobile from "@/app/assets/images/mobile/image-fisheye.jpg";

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

  const items2 = [
    {
      desktop: AboveDesktop.src,
      mobile: AboveMobile.src,
      title: "From Up Above VR",
    },
    {
      desktop: BorealisDesktop.src,
      mobile: BorealisMobile.src,
      title: "Pocket Borealis",
    },
    {
      desktop: CuriosityDesktop.src,
      mobile: CuriosityMobile.src,
      title: "The Curiosity",
    },
    {
      desktop: FishEyeDesktop.src,
      mobile: FishEyeMobile.src,
      title: "Make It Fisheye",
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

          {/*Items1 Container*/}
          <div className="item-container">
            {/*item*/}
            {items.map((item, idx) => {
              return (
                <div key={idx} className="group item">
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
                  <div className="item-gradient" />
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>

          {/*Items2 Container*/}
          <div className="item-container mt-10">
            {/*item*/}
            {items2.map((item, idx) => {
              return (
                <div key={idx} className="group item">
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
                  <div className="item-gradient" />
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <Button class_name="w-full md:hidden">See All</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creations;
