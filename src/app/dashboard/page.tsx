import Link from "next/link";

const Display = () => {
  return (
    <div>
      <h3 className="font-extrabold text-5xl px-12 py-16">Overview</h3>

      <div className="flex gap-20 px-12 mt-12 ml-[6%]">
          <div className="card cursor-pointer shadow-lg bg-white border rounded-lg w-[40%] min-h-[38vh]">
            <h3 className="font-bold text-[1.8rem] pt-8 pl-4">
              Total Number of Teachers
            </h3>
            <h3 className="font-bolder text-[8rem] pl-[6rem] pt-6">500</h3>
          </div>
          <div className="card shadow-lg cursor-pointer bg-white border rounded-lg w-[40%] min-h-[38vh]">
            <h3 className="font-bold text-[1.8rem] pt-8 pl-4">
              Total Number of Students
            </h3>
            <h3 className="font-bolder text-[8rem] pl-[6rem] pt-6">500</h3>
          </div>
      </div>
    </div>
  );
};

export default Display;
