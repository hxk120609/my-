import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const works = [
  {
    rotate: '-2deg',
    bg: '#ffffff',
    tag: '公众号推文',
    title: '【作品标题一】',
    desc: '一句 20 字以内的作品亮点描述，例如：单篇阅读量 10w+ 的品牌故事推文。',
    meta: '2024 · 图文排版',
  },
  {
    rotate: '1.6deg',
    bg: '#e6ebff',
    tag: '小红书文案',
    title: '【作品标题二】',
    desc: '一句作品亮点描述，例如：种草笔记互动率高于账号均值 3 倍。',
    meta: '2024 · 种草文案',
  },
  {
    rotate: '-1.2deg',
    bg: '#ffffff',
    tag: '活动策划文案',
    title: '【作品标题三】',
    desc: '一句作品亮点描述，例如：为线上活动撰写全套宣发文案与 slogan。',
    meta: '2023 · 整合营销',
  },
]

export default function Copywriting() {
  return (
    <section id="copy" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="TRACK 03" latin="copy & layout" chinese="文案排版" note="words that sing / layout that breathes" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 140}>
              <article
                className="sticker-card rounded-3xl p-7 min-h-[280px] flex flex-col border border-[#eef1f6] shadow-[0_18px_40px_-22px_rgba(120,135,160,0.4)]"
                style={{ background: w.bg, transform: `rotate(${w.rotate})` }}
                data-cursor
              >
                <div className="flex items-center justify-between">
                  <span className="font-cute text-sm bg-[#5fe3c4]/20 text-[#1d7a64] rounded-full px-3 py-1">
                    {w.tag}
                  </span>
                  <span className="font-hand text-3xl text-[#5fe3c4]">0{i + 1}</span>
                </div>
                <h3 className="font-cute text-2xl mt-6 text-[#1c1e26]">{w.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a6070] flex-1">{w.desc}</p>
                <p className="font-lp text-[10px] uppercase text-[#9aa3b5] mt-6 pt-4 border-t border-dashed border-[#dfe4ec]">
                  {w.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="font-hand text-2xl text-[#2fbf9d] text-center mt-14 rotate-[-1deg]">
            —— 每个位置都可以替换成你的真实作品截图或链接 ——
          </p>
        </Reveal>
      </div>
    </section>
  )
}
