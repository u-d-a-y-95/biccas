import { Blurer } from "@/components/blurer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const PriceSection = () => {
  return (
    <div className="relative">
      <Blurer background="#52BDAA" classNames="top-[-100px] right-[-317px]" />
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-bold max-w-[490px] text-center">
          Choose Plan That’s Right For You
        </h1>
        <p className="text-lg mt-8 text-secondary font-bold">
          Choose plan that works best for you, feel free to contact us
        </p>
        <div className="flex items-center mt-6 gap-4 bg-white p-2 rounded shadow">
          <div>Bil Monthly</div>
          <div className="bg-primary rounded py-2 px-4 text-white">
            Bil Yearly
          </div>
        </div>
        <div className="my-16 flex flex-col md:flex-row  justify-center items-end gap-5">
          <div className="bg-white p-4 rounded-xl text-[#191A15] w-[320px] flex flex-col items-center gap-3 ">
            <h3 className="text-[30px] font-semibold text-center mt-6">Free</h3>
            <p className="max-w-[218px] text-center text-secondary">
              Have a go and test your superpowers
            </p>
            <p className="text-[50px] font-semibold">
              <sup className="text-lg font-medium">$</sup>0
            </p>
            <div className="bg-[#F9FAFB] self-stretch rounded-xl p-6">
              <ul className="text-[#191A15]  flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  4 Users
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  All apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Unlimited editable exports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Folders and collaboration
                </li>
              </ul>
              <button className="bg-white text-primary text-center w-full rounded-lg py-3 mt-6 shadow">
                Signup for free
              </button>
            </div>
          </div>
          <div className="bg-primary p-4 rounded-xl text-white w-[320px] flex flex-col items-center gap-3">
            <h3 className="text-[30px] font-semibold text-center mt-6">Pro</h3>
            <p className="max-w-[218px] text-center">
              Experiment the power of infinite possibilities
            </p>
            <p className="text-[50px] font-semibold">
              <sup className="text-lg font-medium">$</sup>8
            </p>
            <div className="bg-white self-stretch rounded-xl p-6">
              <ul className="text-[#191A15]  flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  4 Users
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  All apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Unlimited editable exports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Folders and collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  All incoming apps
                </li>
              </ul>
              <button className="bg-primary text-center w-full rounded-lg py-3 mt-6">
                Go to pro
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl  w-[320px] flex flex-col items-center gap-3 text-[#191A15]">
            <h3 className="text-[30px] font-semibold text-center mt-6">
              Business
            </h3>
            <p className="max-w-[218px] text-center text-secondary">
              Unveil new superpowers and join the Design Leaque
            </p>
            <p className="text-[50px] font-semibold">
              <sup className="text-lg font-medium">$</sup>16
            </p>
            <div className="bg-[#F9FAFB] self-stretch rounded-xl p-6">
              <ul className="text-[#191A15]  flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  4 Users
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  All apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Unlimited editable exports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className=" w-6 aspect-square text-primary" />
                  Folders and collaboration
                </li>
              </ul>
              <button className="bg-white text-primary text-center w-full rounded-lg py-3 mt-6 shadow">
                Signup for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
