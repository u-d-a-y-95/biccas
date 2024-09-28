import { BlurerProps } from "./index.type";

export const Blurer = ({ background, classNames }: BlurerProps) => {
  return (
    <div
      className={`absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-70 -z-10 ${classNames}`}
      style={{ background }}
    ></div>
  );
};
