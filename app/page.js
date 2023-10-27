import Business from "./components/Business"
import Ensure from "./components/Ensure"
import FinancialFuture from "./components/FinacialFuture"
import FinancialDream from "./components/FinancialDream"
import Hero from "./components/Hero"
import Service from "./components/Service"
import SocialProof from "./components/SocialProof"
import WhatWeDo from "./components/WhatWeDo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero></Hero>
      <Service></Service>
      <FinancialDream></FinancialDream>
      <Ensure></Ensure>
      <SocialProof></SocialProof>
      <WhatWeDo></WhatWeDo>
      <FinancialFuture></FinancialFuture>
      <Business></Business>
    </main>
  )
}
