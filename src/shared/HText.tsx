import React from "react"

type Props = {
    children: React.ReactNode
}

export default function HText({children}: Props) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  )
}

