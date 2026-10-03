import SectionHeading from '../components/SectionHeading'
import ChromeCat from '../components/ChromeCat'
import Reveal from '../components/Reveal'

const frames = [
  { label: '海报设计', span: 'md:col-span-2 md:row-span-2', tint: '#dcf8ee', rotate: '-1.5deg' },
  { label: '封面图', span: '', tint: '#e6ebff', rotate: '1.8deg' },
  { label: 'Banner', span: '', tint: '#f4f6fa', rotate: '-1deg' },
  { label: '表情包 / 贴纸', span: '', tint: '#e6ebff', rotate: '2deg' },
  { label: '详情页长图', span: 'md:col-span-2', tint: '#dcf8ee', rotate: '-0.6deg' },
]

export default function DesignWorks() {
  return (
    <section id="design" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="TRACK 05" latin="graphic diary" chinese="美工设计" note="sleeve notes / visual works" />

        <div className="grid md:grid-cols-3 auto-rows-[180px] gap-5">
          {frames.map((f, i) => (
            <Reveal key={i} delay={i * 100} className={f.span}>
              <figure
                className="sticker-card group relative w-full h-full rounded-3xl border-2 border-dashed border-[#c9cfdb] overflow-hidden"
                style={{ background: f.tint, transform: `rotate(${f.rotate})` }}
                data-cursor
              >
                {/* 占位画面 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <ChromeCat className="w-16 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
                  <span className="font-cute text-lg text-[#8b93a5] group-hover:text-[#1d7a64] transition-colors">
                    {f.label}
                  </span>
                  <span className="font-lp text-[10px] uppercase text-[#b6bdc9]">
                    作品图占位 · 待上传
                  </span>
                </div>
                {/* 角落胶带 */}
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#5fe3c4]/40 rotate-[-2deg] rounded-sm backdrop-blur-sm" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
