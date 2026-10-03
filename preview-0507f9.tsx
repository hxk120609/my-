const items = ['文案排版', 'COPYWRITING', '平台运营', 'OPERATION', '美工设计', 'DESIGN', '内容策划', 'PLANNING']

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="shrink-0 mx-6">
      <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" fill="#1c1e26" />
    </svg>
  )
}

/** 薄荷色跑马灯条 */
export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex items-center shrink-0">
      {items.map((it, i) => (
        <span key={`${key}-${i}`} className="flex items-center shrink-0">
          <span className={i % 2 === 0 ? 'font-cute text-xl md:text-2xl' : 'font-hand text-2xl md:text-3xl -rotate-1'}>
            {it}
          </span>
          <Star />
        </span>
      ))}
    </div>
  )
  return (
    <div className="relative bg-[#5fe3c4] text-[#0f3d33] py-3.5 -rotate-1 scale-[1.02] shadow-[0_16px_40px_-18px_rgba(47,191,157,0.7)] overflow-hidden">
      <div className="marquee-track flex w-max">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}
