import { IconArrowUpRight } from "@tabler/icons-react";

type BrandProps = {
  img: string;
  url: string;
};

const brands = [
  {
    url: "https://shop.amul.com/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e540b3825200ec3e98d4c/logo_1-280x280.png"
  },
  {
    url: "https://syngentaretailers.syngenta.com/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e550535f17f0f1634a49c/logo_4-280x280.png"
  },
  {
    url: "https://shop.bergerpaints.com/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e541f32ee360f4ca90519/logo_2-280x280.png"
  },
  {
    url: "https://www.masterconnect.in/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fdc4002b0a2ff20ae7608/logo_7-1-280x280.png"
  },
  {
    url: "https://www.mystore.in/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657984e0056572ee3696b063/mystore-280x280.png"
  },
  {
    url: "https://www.momeaze.com/en/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e5431b0863239a92b8315/logo_3-280x280.png"
  },
  {
    url: "https://www.whites.net/en/",
    img: "https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e553491816d9dd9286f0f/logo_6-280x280.png"
  }
];

export function Brands() {
  return (
    <div className="lg:ml-8 lg:rounded-l-[100px] bg-gray-100 w-full">
      <div className="max-w-6xl w-full mx-auto py-16 px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-40">
        <div className="hidden lg:flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            <Brand {...brands[0]} />
            <Brand {...brands[1]} />
          </div>
          <div className="flex flex-col gap-4">
            <Brand {...brands[2]} />
            <Brand {...brands[3]} />
            <Brand {...brands[4]} />
          </div>
          <div className="flex flex-col gap-4">
            <Brand {...brands[5]} />
            <Brand {...brands[6]} />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 items-center lg:hidden">
          <div className="flex gap-3 md:gap-4">
            <Brand {...brands[0]} />
            <Brand {...brands[1]} />
            <Brand {...brands[2]} />
            <Brand {...brands[3]} />
          </div>
          <div className="flex gap-3 md:gap-4">
            <Brand {...brands[4]} />
            <Brand {...brands[5]} />
            <Brand {...brands[6]} />
          </div>
        </div>
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h1 className="text-center lg:text-right text-2xl md:text-3xl lg:text-4xl leading-snug font-bold relative">
            <div className="inline-block relative">
              E
              <img
                className="w-11 max-w-11 absolute -top-7 -left-9"
                src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png"
                alt=""
              />
            </div>
            mpowering Brands Across the Globe
          </h1>
          <p className="text-center lg:text-right text-sm md:text-base lg:text-lg font-medium text-stone-900">
            StoreHippo ecommerce platform builds extraordinary solutions to
            power brands across 15 countries and 30+ industries. Add your brand
            to the long list of brands that trust StoreHippo.
          </p>
        </div>
      </div>
    </div>
  );
}

function Brand({ img, url }: BrandProps) {
  return (
    <a
      href={url}
      className="w-20 sm:w-28 md:w-36 lg:w-40 relative bg-white rounded-xl drop-shadow-xl flex justify-center group p-1"
      target="_blank"
    >
      <img src={img} alt="Brand" className="w-full" />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-4 size-5 bg-theme text-white rounded-full p-0.5">
        <IconArrowUpRight size={16} />
      </div>
    </a>
  );
}
