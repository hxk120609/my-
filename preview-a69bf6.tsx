import SectionHeading from '../components/SectionHeading'
import Vinyl from '../components/Vinyl'
import Reveal from '../components/Reveal'

const stats = [
  { num: '【10w+】', label: '单篇最高阅读', color: '#5fe3c4' },
  { num: '【X万】', label: '运营账号粉丝', color: '#b3c0fe' },
  { num: '【X个】', label: '独立操盘账号', color: '#5fbdf0' },
]

const platforms = ['微信公众号', '小红书', '抖音', 'B 站', '微博', '视频号']

export default function Operations() {
  return (
    <section id="ops" className="relative py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #e6ebff 0%, #f4f6fa 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="TRACK 04" latin="operation" chinese="平台运营" note="B-side / numbers & growth" />

        <div className="grid md:grid-cols-[7fr_5fr] gap-12 items-center">
          <div>
            {/* 数据唱片行 */}
            <div className="space-y-5">
              {stats.map((s, i) => (
                <Reveal key={i} delay={i * 130}>
                  <div className="group flex items-center gap-6 bg-white rounded-full pl-3 pr-8 py-3 shadow-[0_14px_36px_-20px_rgba(120,135,160,0.5)] hover:translate-x-2 transition-transform" data-cursor>
                    <span
                      className="w-14 h-14 rounded-full shrink-0 border-4 border-white shadow-inner"
                      style={{ background: `radial-gradient(circle at 35% 30%, #fff 0%, ${s.color} 70%)` }}
                    />
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <span className="font-cute text-3xl md:text-4xl text-[#1c1e26]">{s.num}</span>
                      <span className="font-lp text-xs uppercase text-[#8b93a5]">{s.label}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="font-cute text-sm bg-white/80 border border-[#dfe4ec] rounded-full px-4 py-1.5 text-[#3c4250] hover:border-[#5fe3c4] hover:text-[#1d7a64] transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="font-lp text-[11px] uppercase text-[#8b93a5] mt-4">
                ＊ 数据与平台均为占位，等你补充真实运营成果
              </p>
            </Reveal>
          </div>

          {/* 右：叠放的黑胶 */}
          <Reveal delay={200} className="relative hidden md:flex justify-center">
            <div className="relative">
              <Vinyl size={280} className="floaty-slow" />
              <Vinyl size={180} spinning={false} className="absolute -bottom-8 -right-14 opacity-90" />
              <p className="font-hand text-2xl text-[#7c88b8] absolute -top-8 -left-6 -rotate-6">
                on repeat ~
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
