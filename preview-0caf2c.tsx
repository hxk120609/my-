import Cursor from '../components/Cursor'
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Marquee from '../components/Marquee'
import Bend from '../components/Bend'
import About from '../sections/About'
import Copywriting from '../sections/Copywriting'
import Operations from '../sections/Operations'
import DesignWorks from '../sections/DesignWorks'
import SoftSkills from '../sections/SoftSkills'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      {/* 白 → 薄荷 */}
      <Bend fill="#dcf8ee" flip />
      <About />
      {/* 薄荷 → 白 */}
      <Bend fill="#dcf8ee" />
      <Copywriting />
      {/* 白 → 蓝紫渐变区 */}
      <Bend fill="#e6ebff" flip />
      <Operations />
      <Bend fill="#f4f6fa" />
      <DesignWorks />
      <Bend fill="#dcf8ee" flip />
      <SoftSkills />
      <Footer />
    </div>
  )
}
