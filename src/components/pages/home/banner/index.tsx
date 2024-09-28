import Image from "next/image";
import Line from "@/app/assets/images/line.png";
import banner1 from "@/app/assets/images/banner-1.png";
import CreditCard from "@/app/assets/images/credit-card.png";

export const BannerSection = () => {
  return (
    <div className="container mx-auto  sm:my-24 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 max-w-[560px] flex flex-col gap-8">
          <div className="">
            <h1 className="text-5xl lg:text-7xl font-bold">
              We’re here to Increase your Productivity
            </h1>
          </div>
          <div>
            <Image
              src={Line}
              alt="line"
              className="relative w-full md:w-[300px] lg:w-[400px]  h-auto"
            />
          </div>
          <div className="max-w-[461px]">
            <p className="text-lg">
              Lets make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <button className="bg-primary text-white font-medium py-4 px-6 rounded-full">
              Try free trial
            </button>
            <button className=" font-medium py-4 px-6 rounded-full">
              View Demo
            </button>
          </div>
        </div>
        <div className="mt-16 md:mt-0 relative text-secondary">
          <div className="absolute flex justify-between bg-white p-3 rounded-xl bottom-10 -left-1/4 w-[160px]">
            <div>
              <span className="text-xs">Enter amount</span>
              <p className="text-base text-black mt-1">$450.00</p>
            </div>
          </div>
          <div className="absolute flex justify-between bg-white p-3 rounded-xl top-10 left-[-185px] w-[270px]">
            <div>
              <span className="text-xs">Total Income</span>
              <p className="text-base text-black mt-1">$245.00</p>
            </div>
            <button className="bg-primary text-white font-medium px-4 py-2 text-xs self-center rounded-full">
              Send
            </button>
          </div>
          <div className=" absolute bottom-10 -right-1/4 rotate-12">
            <Image src={CreditCard} alt="" height={170} width={130} />
          </div>
          <div>
            <Image
              src={banner1}
              width={370}
              height={500}
              alt="banner"
              className=" w-[250px] lg:w-[370px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
