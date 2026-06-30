import { ArrowUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between w-1/4 h-full ">
      <div className="p-6">
        <h3 className="mb-7 text-5xl font-bold">
          Prospective <br />
          <span>Customer</span>
          <br />
          Segmentation
        </h3>
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptatum dignissimos repellat nihil omnis esse sed laboriosam
          suscipit odio cum.
        </p>
      </div>
      <div className="p-4">
        <ArrowUpRight size={80} />
      </div>
    </div>
  );
};

export default LeftContent;
