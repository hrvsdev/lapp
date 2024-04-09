import { Link } from "@remix-run/react";

export function Hero() {
  return (
    <section className="relative px-8">
      <div className="flex items-center max-w-6xl w-full mx-auto py-28 lg:py-0">
        <div
          className="w-full lg:w-4/7 flex flex-col items-center lg:items-start bg-[url('../../lines.png')] bg-no-repeat bg-contain bg-center py-12">
          <h1 className="text-2xl md:text-[42px] md:leading-[58px] font-bold text-center lg:text-left">
            Leading Enterprise Ecommerce Platform in India
          </h1>
          <h2 className="mt-4 sm:text-lg md:text-xl lg:text-[22px] font-bold text-center lg:text-left">
            Build whitelabelled &nbsp;
            <span className="text-theme">Vertical Marketplaces</span>
          </h2>
          <p className="mt-5 mb-8 sm:text-lg md:text-xl lg:text-[22px] text-stone-700 text-center lg:text-left">
            Designed for diverse B2B and B2C business models
          </p>
          <Link to="/">
            <button
              className="cursor-pointer uppercase bg-theme hover:brightness-110 active:translate-y-px text-white h-11 px-6 rounded-full">
              Schedule a demo
            </button>
          </Link>
        </div>
        <div className="hidden lg:block w-3/7 relative h-[654px]">
          <div className="absolute bottom-0 right-0">
            <img src="/character.png" className="max-h-[550px]" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute -top-0 -right-5 -z-10 hidden lg:block">
        <img src="/slider.png" alt="" className="w-xl" />
      </div>
    </section>
  );
}
