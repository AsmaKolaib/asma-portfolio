import Image from "next/image";

const project = ({ name, shortSummary, description, tyoe, year }) => {
  return (
    <div className=" w-full  p-4 rounded-lg shadow-lg grid grid-cols-2 pointer-events-none   ">
      <div>
        <Image
          src="/images/proj1.png"
          alt="img"
          width={100}
          height={100}
          className=" rounded-r-2xl rounded-b-2xl h-[90vh] w-full object-center"
        />
      </div>
      <div className=" flex flex-col  justify-around p-20">
        <div>
          <h1 className=" text-6xl font-extralight uppercase  ">{name}</h1>
          <p className="border-b-2 border-gray-600 py-10 text-4xl ">
            {shortSummary}
          </p>
        </div>
        <p className="text-xl ">{description}</p>
        <div className="flex justify-between text-lg uppercase ">
          <p>{tyoe}</p>
          <p> {year}</p>
        </div>
      </div>
    </div>
  );
};

export default project;


