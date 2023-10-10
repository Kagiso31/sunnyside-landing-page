import { gallery } from "../constants";

const Gallery = () => {
  return (
    <section className="h-[295px] md:h-[440px] grid md:flex grid-cols-2">
      {gallery.map((image) => {
        return (
          <div className="flex-1" key={image.id}>
            <img className="h-full w-full md:hidden" src={image.mobileImg} />
            <img
              className="md:h-full w-full object-cover hidden md:block"
              src={image.desktopImg}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
