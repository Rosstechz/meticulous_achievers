const Logo = () => {
  return (
    <div className="flex items-center font-thin">
      <span>
        <img
          src="/images/logo.png"
          className="size-12 sm:size-20 flex items-center object-cover "
          alt=""
        />
      </span>
      <span className="text-[1rem] leading-5 sm:text-xl lg:text-2xl flex flex-col font-light md:font-thin">
        <span>Meticulous</span>
        <span>Achievers</span>
      </span>
    </div>
  );
};

export default Logo;
