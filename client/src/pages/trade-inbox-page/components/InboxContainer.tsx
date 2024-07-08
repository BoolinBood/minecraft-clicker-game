import React from "react"

interface Props {
  children: React.ReactNode,
  label: string
}

const InboxContainer = ({children, label}: Props) => {
  return (
    <div className="min-w-[300px] h-[280px] w-[900px] flex flex-col">
      <div className="font-istok text-xl text-secondary-300">{label}</div>
      <div className="w-full h-full bg-secondary-700 rounded-lg flex flex-col gap-3 p-3">{children}</div>
    </div>
  )
}

export default InboxContainer