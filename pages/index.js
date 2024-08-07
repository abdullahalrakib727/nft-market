import { Banner, CreatorCard } from "@/components";
import { useRef } from "react";
import images from "../assets";
import { makeId } from "@/utils/makeId";

const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  console.log(makeId(3));

  return (
    <main className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Top Sellers
          </h1>

          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-card-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName-={`0x${makeId(3)}...${makeId(4)}`}
                  CreatorEths={10 - i * 0.5}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
