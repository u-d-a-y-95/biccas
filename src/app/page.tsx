import { Blurer } from "@/components/blurer";
import Image from "next/image";
import Unsplash from "@/app/assets/images/unsplash.png";
import Notion from "@/app/assets/images/notion.png";
import Intercom from "@/app/assets/images/intercom.png";
import Descript from "@/app/assets/images/descript.png";
import Grammerly from "@/app/assets/images/grammerly.png";
import { Header } from "@/components/header";
import { AnalyticsSection } from "@/components/pages/home/analyticsSection";
import { BannerSection } from "@/components/pages/home/banner";
import { ProductSection } from "@/components/pages/home/product-section";
import { PriceSection } from "@/components/pages/home/price-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden px-4 xl:px-0">
      <Blurer background="#52BDAA" classNames="top[-317px] left-[-317px]" />
      <Blurer background="#FFD6D6" classNames="top[-317px] left-[300px]" />
      <Blurer background="#52BDAA" classNames="right-[-317px] top-[200px]" />
      <Header />
      <BannerSection />
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

      <AnalyticsSection />
      <ProductSection />
      <PriceSection />
      <Footer />
    </div>
  );
}
