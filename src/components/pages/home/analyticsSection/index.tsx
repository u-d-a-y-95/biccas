import { AnalyticsCard } from "@/components/analyticsCard";

export const AnalyticsSection = () => {
  return (
    <div className="bg-[#F9F8FE] py-16 -mx-4 px-4 xl:px-0">
      <div className="container mx-auto flex flex-col md:flex-row text-secondary gap-20">
        <div className="flex-2 xl:flex-3">
          <h2 className="text-4xl md:text-[50px] font-semibold text-[#191A15]">
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
        <div className="flex-2 flex flex-col gap-10">
          <AnalyticsCard
            title="Publishing"
            description="Plan, collaborate, and publishing your contetn that drivees meaningful
          engagement and growth for your barnd"
          />
          <AnalyticsCard
            title="Analytics"
            description="Analyze your performance and create goegeous report"
          />
          <AnalyticsCard
            title="Engagement"
            description="Quiuckly navigate you anda engage with your adience"
          />
        </div>
      </div>
    </div>
  );
};
