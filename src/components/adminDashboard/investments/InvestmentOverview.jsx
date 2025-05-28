import Button from "../../Button"
import MetricAdmin from "../AdminDashboards/adminDashBoardMain/adminDashBoardContainer/MetricProps"

const issues = [
    {
      id: 1,
      title: "TOTAL FUNDS INVESTED",
      balance: 25000000,
    },
    {
      id: 2,
      title: "TOTAL FUND ACCUMULATED",
      balance: 550000000,
    },
    {
      id: 3,
      title: "TOTAL WITHDRAW",
      balance: 1500000,
    },
    {
      id: 4,
      title: "ACTIVE INVESTORS",
      balance: 25000,
    },
  ];
const InvestmentMetric = () => {
  return (
    <div >
        <div className="flex justify-between  items-center">
            <h1 className="font-sanns pt-8 font-medium text-[22px]">Investment Overview</h1>
            
        </div>
        <div className='flex justify-start gap-32 border-b-2 border-dotted py-6'>
        {issues.map((issue) =>(
            <div className="border-l pl-1 first:border-l-0"   key={issue.id}>
                 <MetricAdmin title={issue.title} balance={issue.balance}/>
            </div>

        ))}
        </div>
     
    </div>
  )
}

export default InvestmentMetric
