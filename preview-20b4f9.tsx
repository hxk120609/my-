interface VinylProps {
  size?: number
  className?: string
  spinning?: boolean
}

/** 透明胶片 + 铬银标签的黑胶唱片（CSS/SVG 纯代码绘制） */
export default function Vinyl({ size = 420, className = '', spinning = true }: VinylProps) {
  const grooves = [46, 42, 38, 34, 30, 26]
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* 唱片阴影 */}
      <div
        className="absolute inset-[6%] rounded-full"
        style={{ boxShadow: '0 30px 60px -20px rgba(120,135,160,0.45)' }}
      />
      <svg viewBox="0 0 100 100" className={`relative w-full h-full ${spinning ? 'vinyl-spin' : ''}`}>
        <defs>
          <radialGradient id="vinyl-clear" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#eef4f8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dfe8ee" stopOpacity="0.9" />
          </radialGradient>
          <linearGradient id="chrome-label" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbfcfe" />
            <stop offset="30%" stopColor="#d5dbe6" />
            <stop offset="52%" stopColor="#a8b1c2" />
            <stop offset="68%" stopColor="#eef1f6" />
            <stop offset="100%" stopColor="#98a1b3" />
          </linearGradient>
        </defs>

        {/* 透明盘体 */}
        <circle cx="50" cy="50" r="49" fill="url(#vinyl-clear)" stroke="#ffffff" strokeWidth="0.6" />
        {/* 刻纹 */}
        {grooves.map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="0.35"
          />
        ))}
        {/* 高光扇面 */}
        <path d="M50 1 A49 49 0 0 1 92 22 L50 50 Z" fill="#ffffff" opacity="0.35" />
        <path d="M50 99 A49 49 0 0 1 8 78 L50 50 Z" fill="#ffffff" opacity="0.22" />

        {/* 铬银标签 */}
        <circle cx="50" cy="50" r="21" fill="url(#chrome-label)" stroke="#ffffff" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="1.6" fill="#ffffff" stroke="#c4cad6" strokeWidth="0.4" />

        {/* 小猫脸 */}
        <g stroke="#3a3f4d" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <circle cx="43.5" cy="47" r="1.7" fill="#3a3f4d" stroke="none" />
          <circle cx="56.5" cy="47" r="1.7" fill="#3a3f4d" stroke="none" />
          {/* ω 嘴 */}
          <path d="M46.5 52.5 Q48.6 55 50 52.5 Q51.4 55 53.5 52.5" />
        </g>
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fontSize="3.4"
          fill="#8b93a5"
          style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.12em' }}
        >
          mint melody
        </text>
      </svg>
    </div>
  )
}
