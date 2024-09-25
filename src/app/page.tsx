import { Blurer } from "@/components/blurer";
import Image from "next/image";
import Line from "@/app/assets/images/line.png";
import banner from "@/app/assets/images/banner.png";
import Unsplash from "@/app/assets/images/unsplash.png";
import Notion from "@/app/assets/images/notion.png";
import Intercom from "@/app/assets/images/intercom.png";
import Descript from "@/app/assets/images/descript.png";
import Grammerly from "@/app/assets/images/grammerly.png";
import CreditCard from "@/app/assets/images/credit-card.png";
import Product1 from "@/app/assets/images/product-1.png";
import Product2 from "@/app/assets/images/product-2.png";
import Product3 from "@/app/assets/images/product-3.png";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Blurer background="#52BDAA" classNames="top[-317px] left-[-317px]" />
      <Blurer background="#FFD6D6" classNames="top[-317px] left-[300px]" />
      <Blurer background="#52BDAA" classNames="right-[-317px] top-[200px]" />
      <header className="container mx-auto flex justify-between items-center py-10 text-secondary ">
        <div className="text-primary font-semibold text-5xl">Biccas</div>
        <div className="flex items-center justify-between gap-20">
          <nav>
            <ul className="flex gap-8">
              <li className="text-black">Home</li>
              <li>Product</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <a>Login</a>
            <a className="bg-primary text-white p-2 rounded font-medium">
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-24">
        <div className="flex justify-between items-center">
          <div className="flex-1 max-w-[560px] flex flex-col gap-8">
            <div className="">
              <h1 className="text-[80px] font-bold leading-[90px]">
                We’re here to Increase your Productivity
              </h1>
            </div>
            <div>
              <Image
                src={Line}
                alt=""
                style={{ width: "479px", height: "auto" }}
                className="relative"
              />
            </div>
            <div className="max-w-[461px]">
              <p className="text-lg">
                Lets make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.
              </p>
            </div>
            <div>
              <button className="bg-primary text-white font-medium py-4 px-6 rounded-full">
                Try free trial
              </button>
              <button className=" font-medium py-4 px-6 rounded-full">
                View Demo
              </button>
            </div>
          </div>
          <div className="relative text-secondary">
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
              <Image src={banner} width={370} height={500} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div>
          <h3 className="text-[40px] font-bold">
            More than 25,000 teams use Collabs
          </h3>
          <ul className="text-secondary flex gap-16 justify-center my-8">
            <li className="flex gap-3 items-center">
              <Image
                src={Unsplash}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <span className="text-[25px] font-semibold"> Unsplash</span>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={Notion}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <span className="text-[25px] font-semibold"> Notion</span>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={Intercom}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <span className="text-[25px] font-semibold"> Intercom</span>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={Descript}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <span className="text-[25px] font-semibold"> descript</span>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={Grammerly}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <span className="text-[25px] font-semibold"> grammerly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#F9F8FE] py-16">
        <div className="container mx-auto flex text-secondary gap-20">
          <div className="flex-3">
            <h2 className="text-[50px] font-semibold text-[#191A15]">
              How we support our pratner all over the world
            </h2>
            <p className="text-base mt-4">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className=" mt-16">
              <div>
                <p className="text-black">4.9 / 5 rating</p>
                <span className=" font-semibold">databricks</span>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <div className="flex gap-4">
              <div className="bg-white min-w-16 h-16"></div>
              <div className=" self-start">
                <h4 className="text-[28px] font-bold text-[#191A15]">
                  Publishing
                </h4>
                <p>
                  Plan, collaborate, and publishing your contetn that drivees
                  meaningful engagement and growth for your barnd
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-10">
              <div className="bg-white min-w-16 h-16"></div>
              <div className=" self-start">
                <h4 className="text-[28px] font-bold text-[#191A15]">
                  Analytics
                </h4>
                <p>Analyze your performance and create goegeous report</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white min-w-16 h-16"></div>
              <div className=" self-start">
                <h4 className="text-[28px] font-bold text-[#191A15]">
                  Engagement
                </h4>
                <p>Quiuckly navigate you anda engage with your adience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-16">
        <div className="flex justify-between items-center gap-10">
          <h2 className="text-[50px] font-semibold max-w-[330px]">
            Our Features you cab get
          </h2>
          <p className="flex-1 max-w-[460px] text-secondary text-lg">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your projrct esaly
          </p>
          <button className="bg-primary text-white font-medium py-4 px-6 rounded-full flex-3">
            Get Started
          </button>
        </div>
        <div className="my-16 flex justify-between ">
          <div className="w-[360px]">
            <Image
              src={Product1}
              style={{ width: "360px", height: "430px" }}
              alt="product1"
            />
            <h3 className="text-[30px] font-semibold my-3">
              Collboration Teams
            </h3>
            <p>Here you can handle projects together with team virtually</p>
          </div>
          <div className="w-[360px]">
            <Image
              src={Product2}
              style={{ width: "360px", height: "430px" }}
              alt="product1"
            />
            <h3 className="text-[30px] font-semibold my-3">
              Collboration Teams
            </h3>
            <p>Here you can handle projects together with team virtually</p>
          </div>
          <div className="w-[360px]">
            <Image
              src={Product3}
              style={{ width: "360px", height: "430px" }}
              alt="product1"
            />
            <h3 className="text-[30px] font-semibold my-3">
              Collboration Teams
            </h3>
            <p>Here you can handle projects together with team virtually</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Blurer background="#52BDAA" classNames="top-[-100px] right-[-317px]" />
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[50px] font-bold max-w-[490px] text-center">
            Choose Plan That’s Right For You
          </h1>
          <p className="text-lg font-bold">
            Choose plan that works best for you, feel free to contact us
          </p>
          <div className="flex items-center gap-4 bg-white p-2 rounded shadow">
            <div>Bil Monthly</div>
            <div className="bg-primary rounded py-2 px-4 text-white">
              Bil Yearly
            </div>
          </div>
          <div className="my-16 flex justify-center items-end gap-5">
            <div className="bg-white p-4 rounded-xl text-white w-[320px] flex flex-col items-center gap-3 text-secondary">
              <h3 className="text-[30px] font-semibold text-center mt-6">
                Free
              </h3>
              <p className="max-w-[218px] text-center">
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
              <h3 className="text-[30px] font-semibold text-center mt-6">
                Pro
              </h3>
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
            <div className="bg-white p-4 rounded-xl text-white w-[320px] flex flex-col items-center gap-3 text-secondary">
              <h3 className="text-[30px] font-semibold text-center mt-6">
                Business
              </h3>
              <p className="max-w-[218px] text-center">
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

      <div className="bg-[#161C28] text-secondary">
        <div className="container mx-auto pt-32">
          <div className="grid grid-cols-2">
            <div className="max-w-[440px]">
              <h2 className="text-[50px] text-white font-semibold">
                People are Saying About DoWhith
              </h2>
              <p>
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>
              <p className="mt-16">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <div className="mt-8 flex  items-center gap-4">
                <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
                <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
                <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
                <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
                <div className=" w-16 aspect-square bg-slate-300 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#222938] p-16 flex flex-col items-stretch text-white rounded-xl">
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
          <div className="grid grid-cols-2 mt-20 ">
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
            <div className="flex justify-between">
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
          <div className="flex justify-between items-center pt-16 pb-10">
            <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
            <div>Terms and Condtions . Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
