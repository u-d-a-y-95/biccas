import { BlurerProps } from "./index.type";

export const Blurer = ({ background, classNames }: BlurerProps) => {
  return (
    <div
      className={`absolute w-[634px] h-[634px] bg-[${background}] rounded-full blur-[1000px] opacity-60 -z-10 ${classNames}`}
    ></div>
  );
};
