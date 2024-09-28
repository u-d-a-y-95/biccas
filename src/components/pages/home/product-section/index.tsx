import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import banner2 from "@/app/assets/images/banner-2.png";
import Product1 from "@/app/assets/images/product-1.png";
import Product2 from "@/app/assets/images/product-2.png";
import Product3 from "@/app/assets/images/product-3.png";
import { Blurer } from "@/components/blurer";

export const ProductSection = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <h2 className="text-5xl md:text-[50px] font-semibold max-w-[330px]">
          Our Features you cab get
        </h2>
        <p className="flex-1 max-w-[460px] text-secondary text-lg">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly
        </p>
        <button className="bg-primary text-white font-medium py-4 px-6 rounded-full flex-3">
          Get Started
        </button>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="w-[360px]">
          <Image
            src={Product1}
            style={{ width: "360px", height: "430px" }}
            alt="product1"
          />
          <h3 className="text-[30px] font-semibold my-3">Collboration Teams</h3>
          <p>Here you can handle projects together with team virtually</p>
        </div>
        <div className="w-[360px]">
          <Image
            src={Product2}
            style={{ width: "360px", height: "430px" }}
            alt="product1"
          />
          <h3 className="text-[30px] font-semibold my-3">Collboration Teams</h3>
          <p>Here you can handle projects together with team virtually</p>
        </div>
        <div className="w-[360px]">
          <Image
            src={Product3}
            style={{ width: "360px", height: "430px" }}
            alt="product1"
          />
          <h3 className="text-[30px] font-semibold my-3">Collboration Teams</h3>
          <p>Here you can handle projects together with team virtually</p>
        </div>
      </div>
      <div className="flex my-28 flex-col md:flex-row justify-between relative">
        <Blurer
          background="#FFD6D6"
          classNames="top-[-450px] left-[-450px] blur-[0px] z-10"
        />
        <div>
          <h2 className="text-[50px] font-bold max-w-[430px]">
            What Benifit Will You Get
          </h2>
          <ul className="text-[#191A15] mt-10  flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <CheckCircleIcon className=" w-6 aspect-square text-primary" />4
              Free Consulting With Experet Saving Money
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className=" w-6 aspect-square text-primary" />
              Online Banking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className=" w-6 aspect-square text-primary" />
              Investment Report Every Month
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className=" w-6 aspect-square text-primary" />
              Saving Money For The Future
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className=" w-6 aspect-square text-primary" />
              Online Transection
            </li>
          </ul>
        </div>
        <div className=" self-center mt-16 md:mt-0">
          <Image src={banner2} width={320} height={480} alt="banner-2" />
        </div>
      </div>
    </div>
  );
};
