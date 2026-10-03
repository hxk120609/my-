import SectionHeading from '../components/SectionHeading'
import Sparkle from '../components/Sparkle'
import Reveal from '../components/Reveal'

const skills = [
  { name: '沟通协作', en: 'communication', bg: '#dcf8ee', rotate: '-3deg' },
  { name: '网感在线', en: 'trend radar', bg: '#e6ebff', rotate: '2deg' },
  { name: '多线程执行', en: 'multitasking', bg: '#f4f6fa', rotate: '-1.5deg' },
  { name: '审美把控', en: 'good taste', bg: '#e6ebff', rotate: '2.6deg' },
  { name: '复盘迭代', en: 'retrospect', bg: '#dcf8ee', rotate: '-2.2deg' },
  { name: '抗压回血', en: 'resilience', bg: '#f4f6fa', rotate: '1.4deg' },
]

export default function SoftSkills() {
  return (
    <section id="soft" className="relative py-24 md:py-32" style={{ background: '#dcf8ee' }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="TRACK 06" latin="hidden tracks" chinese="软能力" note="bonus tracks / the invisible groove" />

        <div className="relative flex flex-wrap justify-center gap-6 md:gap-8 py-6">
          {skills.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div
                className="sticker-card relative rounded-full px-8 py-5 bg-white shadow-[0_16px_36px_-18px_rgba(47,120,100,0.45)] border border-white text-center"
                style={{ transform: `rotate(${s.rotate})` }}
                data-cursor
              >
                <p className="font-cute text-xl text-[#1c1e26]">{s.name}</p>
                <p className="font-hand text-lg text-[#2fbf9d] leading-tight">{s.en}</p>
                <Sparkle
                  className="absolute -top-2 -right-2"
                  size={14}
                  color={i % 2 ? '#b3c0fe' : '#5fe3c4'}
                  delay={`${i * 0.5}s`}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="font-lp text-[11px] uppercase text-[#5a8a7d] text-center mt-8">
            ＊ 软能力关键词占位，可按你的真实特质替换
          </p>
        </Reveal>
      </div>
    </section>
  )
}
