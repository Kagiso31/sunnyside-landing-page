const TestimonialCard = ({ img, name, comment, role }) => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <img
        className="w-[57px] h-[57px] mb-8 xl:mb-16 rounded-full"
        src={img}
        alt="testimonial image"
      />
      <p className=" text-lg text-center md:w-[32ch] mb-8 xl:mb-20">
        {comment}
      </p>
      <h3 className="font-serif font-black text-lg mb-4 xl:mb-5">{name}</h3>
      <p className="text-neutral-grayish-blue-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;
