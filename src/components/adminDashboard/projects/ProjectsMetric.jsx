import Button from "../../Button"
import MetricAdmin from "../AdminDashboards/adminDashBoardMain/adminDashBoardContainer/MetricProps"

const issues = [
    {
      id: 1,
      title: "TOTAL PROJECTS",
      balance: 100,
    },
    {
      id: 2,
      title: "ACTIVE PROJECTS",
      balance: 5,
    },
    {
      id: 3,
      title: "PENDING PROJECTS",
      balance: 15,
    },
    {
      id: 4,
      title: "COMPLETED PROJECTS",
      balance: 12,
    },
  ];
const ProjectsMetric = () => {
  return (
    <div >
        <div className="flex justify-between  items-center">
            <h1 className="font-sanns pt-8 font-medium text-[22px]">Project Overview</h1>
            <div><button className="bg-bgGray py-2 px-4 rounded-md text-white">+ Add Projects</button></div>
        </div>
        <div className='md:flex space-y-2 md:space-y-0 justify-start gap-32 border-b-2 border-dotted py-6'>
        {issues.map((issue) =>(
            <div className="border-l pl-1 first:border-l-0"   key={issue.id}>
                 <MetricAdmin title={issue.title} balance={issue.balance}/>
            </div>

        ))}
        </div>
     
    </div>
  )
}

export default ProjectsMetric
