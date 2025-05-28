const propUserDe = ({ id, type, date }) => {
  return (
    <div>
      <div className="grid  border-b p-4 grid-cols-3 gap-4">
        <div className="bg-[#F5F5F5] rounded-md text-left p-4">
          <h1 className="text-[#00000080]">
            ISSUE ID <br /> NUMBER
          </h1>
          <h1>{id}</h1>
        </div>
        <div className="bg-[#F5F5F5] rounded-md text-left p-4">
          <h1 className="text-[#00000080]">
            ISSUE <br /> TYPE
          </h1>
          <h1 className="text-[#6B911B] font-sanns font-semibold text-base">
            {type}
          </h1>
        </div>
        <div className="bg-[#F5F5F5] rounded-md text-left p-4">
          <h1 className="text-[#00000080]">
            DATE <br /> REPORTED
          </h1>
          <h1>{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default propUserDe;
