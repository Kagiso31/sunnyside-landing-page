import eggImgDesktop from "../assets/desktop/image-transform.jpg";
import eggImgMobile from "../assets/mobile/image-transform.jpg";
import cupImgDesktop from "../assets/desktop/image-stand-out.jpg";
import cupImgMobile from "../assets/mobile/image-stand-out.jpg";
import cherriesImgDesktop from "../assets/desktop/image-graphic-design.jpg";
import cherriesImgMobile from "../assets/mobile/image-graphic-design.jpg";
import orangeImgDesktop from "../assets/desktop/image-photography.jpg";
import orangeImgMobile from "../assets/mobile/image-photography.jpg";

const Content = () => {
  return (
    <>
      {/* transform section */}
      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="bg-neutral-white sm:justify-self-end">
          <div className="py-[160px] sm:px-10 xl:px-0 flex flex-col gap-12 items-center md:items-start xl:pr-28 max-w-[655px] mx-auto">
            <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-left text-center text-neutral-blue-desaturated ">
              Transform your brand
            </h2>
            <p className="text-neutral-grayish-blue-800 text-lg text-center md:text-left">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="relative w-fit">
              <a className="relative font-serif font-bold uppercase text-xl z-10 cursor-pointer">
                Learn More
              </a>
              <div className="bottom-0 absolute w-full h-2 bg-primary-yellow rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-primary-yellow">
          <div className="h-full mx-auto ml-0 max-w-[720px] md:bg-[url('./assets/desktop/image-transform.jpg')] bg-no-repeat bg-center ">
            {/* <img className="hidden md:block" src={eggImgDesktop} /> */}
            <img className="md:hidden" src={eggImgMobile} />
          </div>
        </div>
      </section>

      {/* stand out section */}
      <section className="flex flex-col md:grid md:grid-cols-2">
        <div className="bg-primary-red">
          <div className="h-full mx-auto md:mr-0 md:ml-auto max-w-[720px] md:bg-[url('./assets/desktop/image-stand-out.jpg')] bg-no-repeat bg-center">
            {/* <img className="hidden md:block" src={cupImgDesktop} /> */}
            <img className="md:hidden" src={cupImgMobile} />
          </div>
        </div>

        <div className="bg-neutral-white sm:justify-self-start">
          <div className="py-[160px] sm:px-10 xl:px-0 flex flex-col gap-12 items-center md:items-start xl:pl-28 max-w-[648px] mx-auto">
            <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-left text-center text-neutral-blue-desaturated ">
              Stand out to the right audience
            </h2>
            <p className="text-neutral-grayish-blue-800 text-lg text-center md:text-left">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <div className="relative w-fit">
              <a className="relative font-serif font-bold uppercase text-xl z-10 cursor-pointer">
                Learn More
              </a>
              <div className="bottom-0 absolute w-full h-2 bg-primary-red rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:grid md:grid-cols-2 md:h-[600px]">
        {/* Graphic Design */}
        <div className="bg-primary-cyan h-[470px] md:h-auto">
          <div className="relative h-full mx-auto md:mr-0 md:ml-auto max-w-[720px] bg-[url('./assets/desktop/image-graphic-design.jpg')] md:bg-[url('./assets/desktop/image-graphic-design.jpg')] bg-no-repeat bg-center">
            <div className="absolute text-center bottom-10 md:bottom-20 md:min-w-[370px]  md:left-1/2 md:-translate-x-1/2">
              <h2 className="font-serif font-bold text-3xl mb-8 md:mb-10">
                Graphic design
              </h2>
              <p className="text-lg">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
        </div>

        {/* Photography */}
        <div className="bg-primary-blue h-[470px] md:h-auto">
          <div className="relative h-full mx-auto md:ml-0 max-w-[720px] bg-[url('./assets/desktop/image-photography.jpg')] md:bg-[url('./assets/desktop/image-photography.jpg')] bg-no-repeat bg-top bg-cover">
            <div className="absolute text-center bottom-10 md:bottom-20 md:min-w-[370px] md:right-1/2 md:translate-x-1/2">
              <h2 className="font-serif font-bold text-3xl mb-8 md:mb-10">
                Photography
              </h2>
              <p className="text-lg">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
