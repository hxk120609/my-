import SectionHeading from '../components/SectionHeading'
import ChromeCat from '../components/ChromeCat'
import Sparkle from '../components/Sparkle'
import Reveal from '../components/Reveal'

const facts = [
  { k: '所在地', v: '【城市】' },
  { k: '职业方向', v: '内容运营 / 视觉设计' },
  { k: '工作年限', v: '【X】年' },
  { k: '合作方式', v: '全职 /  freelance' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: '#dcf8ee' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="TRACK 02" latin="about me" chinese="自我介绍" note="A-side / who is singing" />

        <div className="grid md:grid-cols-[5fr_7fr] gap-12 items-center">
          {/* 左：贴纸式头像位 */}
          <Reveal className="relative flex justify-center">
            <div className="relative w-64 md:w-80">
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-white shadow-[0_30px_60px_-25px_rgba(47,120,100,0.4)]" />
              <ChromeCat className="relative floaty w-full p-8" />
              <Sparkle className="absolute -top-3 -right-2" size={24} delay="0.4s" />
              <Sparkle className="absolute bottom-8 -left-5" size={16} color="#b3c0fe" delay="1.6s" />
              {/* 拍立得标签 */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rotate-[-4deg] bg-white rounded-lg px-5 py-2 shadow-lg">
                <span className="font-hand text-xl text-[#2fbf9d]">that's me ~</span>
              </div>
            </div>
          </Reveal>

          {/* 右：文字 */}
          <div>
            <Reveal delay={120}>
              <p className="text-lg md:text-xl leading-loose text-[#3c4250]">
                你好呀！我是【你的名字】，一个喜欢把内容做得
                <span className="scribble-link font-semibold">好看又好读</span>的人。
                擅长在文字、画面与数据之间找到舒服的平衡——
                写得了推文，排得了版面，也盘得动账号。
              </p>
              <p className="font-lp text-[11px] mt-3 uppercase text-[#8b93a5]">
                ＊ 自我介绍正文占位，约 80~120 字最佳，等你补充
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <Reveal key={f.k} delay={200 + i * 90}>
                  <div className="rounded-2xl bg-white/80 backdrop-blur px-5 py-4 border border-white shadow-sm">
                    <p className="font-lp text-[10px] uppercase text-[#2fbf9d]">{f.k}</p>
                    <p className="font-cute text-lg mt-1 text-[#1c1e26]">{f.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
