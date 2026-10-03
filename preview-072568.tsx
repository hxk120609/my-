import Vinyl from '../components/Vinyl'
import ChromeCat from '../components/ChromeCat'
import OrbitText from '../components/OrbitText'
import Sparkle from '../components/Sparkle'
import Reveal from '../components/Reveal'

export default function Hero() {
  const capture =
    typeof window !== 'undefined' && window.location.search.includes('noanim')
  return (
    <section
      id="top"
      className={`relative flex items-center overflow-hidden pt-28 pb-16 ${
        capture ? 'min-h-0' : 'min-h-screen'
      }`}
    >
      {/* 背景渐变色块 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="blob-drift absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, #dcf8ee 0%, transparent 70%)' }}
        />
        <div
          className="blob-drift absolute top-1/3 -right-40 w-[38rem] h-[38rem] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, #e6ebff 0%, transparent 70%)', animationDelay: '-5s' }}
        />
        <div
          className="blob-drift absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, #bfe9f5 0%, transparent 70%)', animationDelay: '-9s' }}
        />
      </div>

      <Sparkle className="absolute top-32 left-[12%]" size={22} delay="0.2s" />
      <Sparkle className="absolute top-48 right-[18%]" size={16} color="#b3c0fe" delay="1.4s" />
      <Sparkle className="absolute bottom-32 left-[45%]" size={18} delay="2.2s" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-6 items-center w-full">
        {/* 左：标题与介绍 */}
        <div>
          <Reveal>
            <p className="font-lp text-xs md:text-sm text-[#9aa3b5] uppercase mb-6">
              Side A ── Track 01 ── 33⅓ RPM
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="leading-none">
              <span className="font-hand block text-6xl md:text-8xl text-[#5fe3c4] -rotate-2 origin-left">
                hello, I'm
              </span>
              <span className="font-cute block text-5xl md:text-7xl mt-4 text-[#1c1e26]">
                【你的名字】
              </span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-[#5a6070] max-w-md">
              一名<span className="scribble-link font-semibold text-[#1c1e26]">内容创作者</span> /
              <span className="scribble-link font-semibold text-[#1c1e26]">视觉设计者</span>。
              这里用黑胶唱片的方式，收录我在文案、运营与设计里的每一首歌。
              <span className="font-lp block mt-4 text-[11px] text-[#9aa3b5] uppercase">
                ＊ 一句话介绍占位，等你补充真实信息
              </span>
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#copy"
                className="group rounded-full bg-[#5fe3c4] text-[#0f3d33] font-cute px-7 py-3.5 text-lg shadow-[0_14px_30px_-10px_rgba(47,191,157,0.6)] hover:shadow-[0_18px_40px_-10px_rgba(47,191,157,0.75)] hover:-translate-y-0.5 transition-all"
              >
                播放作品集
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-[#1c1e26] font-cute px-7 py-3.5 text-lg hover:bg-[#1c1e26] hover:text-white transition-colors"
              >
                联系我
              </a>
            </div>
          </Reveal>
        </div>

        {/* 右：专辑封面组合 */}
        <Reveal delay={200} className="relative flex justify-center">
          <div className="relative floaty-slow">
            {/* 专辑封面卡 */}
            <div className="relative w-[300px] md:w-[380px] aspect-square rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(120,135,160,0.5)] rotate-[-3deg]">
              {/* 天空渐变 */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #bfe9f5 0%, #dcf8ee 55%, #eafaef 70%)' }} />
              {/* 手写标题 */}
              <p className="font-hand absolute top-5 left-0 right-0 text-center text-3xl md:text-4xl text-white drop-shadow-[0_2px_6px_rgba(95,227,196,0.9)] -rotate-1 z-10">
                cat on the piano
              </p>
              {/* 草地 */}
              <svg viewBox="0 0 380 70" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,30 C60,10 120,34 190,24 C260,14 320,30 380,18 L380,70 L0,70 Z" fill="#86c26a" />
                <path d="M0,46 C70,30 150,50 220,42 C290,34 340,48 380,38 L380,70 L0,70 Z" fill="#6faf55" />
              </svg>
              {/* 铬银小猫（定位层与漂浮层分离，避免 transform 互相覆盖） */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] w-[62%]">
                <ChromeCat className="w-full floaty" />
              </div>
              {/* LP 角标 */}
              <div className="absolute bottom-3 right-3 bg-[#14161d] text-white rounded-lg px-3 py-2 z-10">
                <p className="font-lp text-[9px] leading-tight">Cat on the piano</p>
                <p className="font-cute text-[10px] mt-0.5 text-[#5fe3c4]">猫猫假日</p>
              </div>
            </div>

            {/* 探出头的黑胶 */}
            <Vinyl
              size={250}
              className="absolute -right-20 md:-right-28 top-1/2 -translate-y-1/2 hidden sm:block"
            />

            {/* 环形文字 */}
            <OrbitText size={190} className="absolute -left-16 -bottom-14 hidden md:block" />

            <Sparkle className="absolute -top-6 right-6" size={26} delay="0.8s" />
          </div>
        </Reveal>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-lp text-[10px] text-[#9aa3b5] uppercase tracking-[0.3em]">
        scroll to flip the record ↓
      </div>
    </section>
  )
}
