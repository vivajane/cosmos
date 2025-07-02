const MetricAdmin = ({ title, balance }) => {
  return <div className="space-y-2" >
    <h2 className="font-manrope text-xs font-medium text-[#00000080]">{title}</h2>
    <p className="text-[#1E1E1ECC] md:text-xl text-sm font-semibold">₦{balance}</p>
  </div>
};

export default MetricAdmin