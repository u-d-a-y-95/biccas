import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  return (
    <div className="bg-[#161C28] text-secondary -mx-4 px-4 xl:px-0">
      <div className="container mx-auto pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="xl:max-w-[440px] text-center lg:text-left">
            <h2 className="text-5xl lx:text-[50px] text-white font-semibold">
              People are Saying About DoWhith
            </h2>
            <p className="mt-4">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <p className="mt-16">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <div className="mt-8 flex justify-center xl:justify-start items-center gap-4">
              <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
              <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
              <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
              <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
              <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
            </div>
          </div>
          <div className="bg-[#222938] p-8 lg:p-16 flex flex-col items-stretch text-white rounded-xl mt-16 lg:mt-0">
            <div>
              <h3 className="text-[30px] font-medium text-center">
                Get Started
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white">Email</label>
                <input
                  placeholder="Enter your email"
                  className="rounded px-4 py-3"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-white">Message</label>
                <textarea
                  placeholder="What are you say ?"
                  className="rounded px-4 py-3"
                />
              </div>
              <button className="bg-primary text-white py-3 rounded-lg mt-4">
                Request Demo
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 ">
          <div className="max-w-[440px]">
            <h2 className="text-[50px] text-primary font-semibold">Biccas</h2>
            <p>Get started noew try our product</p>
            <div className="mt-8 flex items-center border rounded-full max-w-xs">
              <input
                placeholder="Enter your email here"
                className=" outline-none border-none p-2 px-4 bg-transparent rounded-l-full flex-1"
              />
              <button className="bg-primary text-white rounded-full flex justify-center items-center p-2">
                <ArrowRightIcon className=" w-6 aspect-square" />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 mt-10 lg:mt-0">
            <div>
              <p className="text-white">Support</p>
              <ul className="flex flex-col gap-2 mt-4">
                <li>Help centre</li>
                <li>Account information</li>
                <li>About</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <p className="text-white">Help and Solution</p>
              <ul className="flex flex-col gap-2 mt-4">
                <li>Talk to support</li>
                <li>Support docs</li>
                <li>System status</li>
                <li>Covid responde</li>
              </ul>
            </div>
            <div>
              <p className="text-white">Support</p>
              <ul className="flex flex-col gap-2 mt-4">
                <li>Update</li>
                <li>Security</li>
                <li>Beta test</li>
                <li>Pricing product</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:justify-between pt-16 pb-10">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <div>Terms and Condtions . Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};
