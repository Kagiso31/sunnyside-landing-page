const Hero = () => (
  <section className="flex flex-col items-center gap-20 sm:gap-40 pt-10">
    <h1 className="font-serif font-black text-4xl sm:text-5xl uppercase text-center tracking-widest text-neutral-white">
      We are Creatives
    </h1>

    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke="#FFF"
        strokeWidth="6"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3v100M3 95.484l15 15 15-15" />
      </g>
    </svg>
  </section>
);

export default Hero;
