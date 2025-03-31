import React from 'react'
import AdminCardsProps from './AdminCardsProps';
import Button from "../../../../Button"


const cards = [
    {
      id: 1,
      title: "VERIFICATION PENDING",
      balance: 162370,
      color: "bg-[#6B911B] text-[#00000080]",
    },
    {
      id: 2,
      title: "SUSPENDED ACCOUNTS",
      balance: 72270,
      color: "bg-[#0000001A] text-[#713F12]"
    },
    {
      id: 3,
      title: "ISSUE-PENDING ATTENTION",
      balance: 162370,
      color: "bg-[#00000080] text-[#00000080]"
    },
    {
      id: 4,
      title: "ISSUES RESOLVED",
      balance: 202370,
      color: "bg-[#0000001A] text-[#121A71]"
    },
  ];
const AdminCards = () => {
  return (
    <div className=''>
    <div className={`grid mb-10 grid-cols-2 text-xs gap-4`}>
      {
        cards.map((card) => (
            <div className={`text-[10px] rounded-lg ${card.color}`} key={card.id}><AdminCardsProps title={card.title} icon={card.icon} balance={card.balance}/></div>
        ))
      }
    </div>
    <div className='pb-6'>
      <Button variant="submitt">View All Users</Button>
    </div>
    </div>
  )
}

export default AdminCards
