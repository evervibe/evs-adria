import Hero from '@/components/Hero'
import USPSection from '@/components/USPSection'
import SortimentTeaser from '@/components/SortimentTeaser'
import B2BTeaser from '@/components/B2BTeaser'
import FilialeTeaser from '@/components/FilialeTeaser'
import TrustSection from '@/components/TrustSection'

export default function Home() {
  return (
    <>
      <Hero />
      <USPSection />
      <SortimentTeaser />
      <B2BTeaser />
      <TrustSection />
      <FilialeTeaser />
    </>
  )
}
