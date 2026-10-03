import OrbitText from '../components/OrbitText'
import Reveal from '../components/Reveal'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#14161d] text-white pt-24 pb-12 overflow-hidden">
      {/* 底部色晕 */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #5fe3c4 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-lp text-xs uppercase text-[#8b93a5] tracking-[0.3em]">
            ── runout groove / side b ends ──
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-hand text-6xl md:text-8xl mt-8 text-[#5fe3c4] -rotate-1">
            let's make something
          </h2>
          <p className="font-cute text-3xl md:text-5xl mt-4 chrome-text">
            一起做点好听好看的
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['邮箱：【your@email.com】', '微信：【your_wechat】', '小红书：【@你的账号】'].map((c) => (
              <span
                key={c}
                className="font-cute text-base rounded-full border border-white/25 px-6 py-2.5 hover:border-[#5fe3c4] hover:text-[#5fe3c4] transition-colors"
                data-cursor
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={360} className="flex justify-center mt-16">
          <OrbitText
            size={160}
            text="THANKS FOR LISTENING ✦ SEE YOU ✦ THANKS FOR LISTENING ✦ SEE YOU ✦ "
            className="opacity-90"
          />
        </Reveal>

        <p className="font-lp text-[10px] uppercase text-[#565e70] mt-12">
          © 2026【你的名字】 · pressed on mint vinyl · side a / side b
        </p>
      </div>
    </footer>
  )
}
