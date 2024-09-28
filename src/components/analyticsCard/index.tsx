import { AnalyticsCardProps } from "./index.type";

export const AnalyticsCard = ({ title, description }: AnalyticsCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="bg-white min-w-12 h-12  xl:min-w-16 xl:h-16"></div>
      <div className=" self-start">
        <h4 className="text-[28px] font-bold text-[#191A15]">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
