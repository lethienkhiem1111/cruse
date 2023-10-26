import FinancialDream from "./components/FinancialDream"
import Hero from "./components/Hero"
import Service from "./components/Service"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero></Hero>
      <Service></Service>
      <FinancialDream></FinancialDream>
    </main>
  )
}
