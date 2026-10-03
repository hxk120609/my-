import Reveal from './Reveal'
import Sparkle from './Sparkle'

interface SectionHeadingProps {
  index: string
  latin: string
  chinese: string
  note?: string
}

/** 区块标题：mono 编号 + 手写英文 + 可爱中文 */
export default function SectionHeading({ index, latin, chinese, note }: SectionHeadingProps) {
  return (
    <Reveal className="relative mb-14 md:mb-20">
      <div className="flex items-end gap-4 flex-wrap">
        <span className="font-lp text-xs md:text-sm text-[#9aa3b5] pb-3">{index}</span>
        <h2 className="relative leading-none">
          <span className="font-hand block text-4xl md:text-6xl text-[#5fe3c4] -rotate-2 origin-left">
            {latin}
          </span>
          <span className="font-cute block text-2xl md:text-4xl mt-2 text-[#1c1e26]">
            {chinese}
          </span>
          <Sparkle className="absolute -right-10 -top-4 hidden md:block" size={26} delay="0.6s" />
        </h2>
      </div>
      {note && (
        <p className="font-lp text-[11px] md:text-xs text-[#9aa3b5] mt-4 uppercase">{note}</p>
      )}
    </Reveal>
  )
}
