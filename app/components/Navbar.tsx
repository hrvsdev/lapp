import { Link } from "@remix-run/react";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { Fragment, useEffect, useState } from "react";

const OFFSET = 50;

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export function Navbar() {
  const [isOpaque, setIsOpaque] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const width = useWindowWidth();

  const onScroll = () => {
    if (!isOpaque && window.scrollY > OFFSET) {
      setIsOpaque(true);
    } else if (isOpaque && window.scrollY <= OFFSET) {
      setIsOpaque(false);
    }
  };

  const onMenuClick = () => {
    if (width && width < 1024) setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpaque]);

  return (
    <div
      data-shadow={isOpaque}
      className="p-4 data-[shadow=true]:shadow-lg data-[shadow=true]:bg-white fixed top-0 w-full z-10"
    >
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex items-center justify-between mx-auto h-14 max-w-6xl">
        <Link to="/">
          <img src="/logo.png" alt="Brand" className="h-14" />
        </Link>
        <div className="hidden lg:flex items-center gap-5 mt-3.5 text-[17px]">
          <button className="cursor-pointer flex items-center gap-0.5">
            Solutions <IconChevronDown size={16} className="mt-1" />
          </button>
          <button className="cursor-pointer flex items-center gap-0.5">
            Develop <IconChevronDown size={16} className="mt-1" />
          </button>
          <Link to="/">Examples</Link>
          <Link to="/">Pricing</Link>
          <button className="cursor-pointer flex items-center gap-0.5">
            Resources <IconChevronDown size={16} className="mt-1" />
          </button>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="hidden lg:flex">
            <button className="cursor-pointer uppercase bg-theme hover:brightness-110 active:translate-y-px text-white h-11 px-6 rounded-full">
              Contact Us
            </button>
          </Link>
          <button
            className="cursor-pointer size-11 rounded-full hover:bg-gray-100 active:translate-y-px p-2.5"
            onClick={onMenuClick}
          >
            <IconMenu2 className="text-gray-950" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
};

function Sidebar({ showSidebar, setShowSidebar }: SidebarProps) {
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  return (
    <Fragment>
      <div
        data-hidden={!showSidebar}
        onClick={() => setShowSidebar(false)}
        className="fixed top-0 left-0 w-full h-screen bg-black/50 data-[hidden=true]:opacity-0 data-[hidden=true]:pointer-events-none transition-opacity duration-300 ease-in-out"
      />
      <div
        data-hidden={!showSidebar}
        className="fixed p-4 top-0 data-[hidden=true]:-right-80 right-0 transition-all duration-300 ease-in-out h-screen shadow-2xl border-l border-gray-200 bg-white w-80"
      >
        <div className="flex">
          <button
            className="cursor-pointer size-11 rounded-full bg-gray-100 hover:bg-gray-200 active:translate-y-px p-2.5 ml-auto"
            onClick={() => setShowSidebar(false)}
          >
            <IconX className="text-gray-950" strokeWidth={2.5} />
          </button>
        </div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="cursor-pointer flex justify-between items-center gap-0.5">
              Solutions <IconChevronDown size={16} className="mt-1" />
            </button>
            <button className="cursor-pointer flex justify-between items-center gap-0.5">
              Develop <IconChevronDown size={16} className="mt-1" />
            </button>
            <Link to="/">Examples</Link>
            <Link to="/">Pricing</Link>
            <button className="cursor-pointer flex justify-between items-center gap-0.5">
              Resources <IconChevronDown size={16} className="mt-1" />
            </button>
        </div>
      </div>
    </Fragment>
  );
}
