interface ChromeCatProps {
  className?: string
}

/** 铬银质感 3D 小猫（封面同款风格，SVG 纯代码绘制） */
export default function ChromeCat({ className = '' }: ChromeCatProps) {
  return (
    <svg viewBox="0 0 220 230" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cat-chrome" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="28%" stopColor="#e3e8f0" />
          <stop offset="50%" stopColor="#aeb7c8" />
          <stop offset="66%" stopColor="#f0f3f8" />
          <stop offset="100%" stopColor="#99a2b4" />
        </linearGradient>
        <linearGradient id="cat-chrome-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8ecf3" />
          <stop offset="100%" stopColor="#9aa3b5" />
        </linearGradient>
        <radialGradient id="cat-glow" cx="35%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 尾巴（幽灵状） */}
      <path
        d="M110 158 C 96 178 84 196 92 214 C 96 222 106 224 110 216 C 104 210 106 196 116 184 Z"
        fill="url(#cat-chrome-dark)"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* 耳朵 */}
      <path d="M62 62 L52 18 L96 44 Z" fill="url(#cat-chrome)" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M158 62 L168 18 L124 44 Z" fill="url(#cat-chrome)" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M63 52 L58 28 L84 44 Z" fill="#fdfefe" opacity="0.7" />
      <path d="M157 52 L162 28 L136 44 Z" fill="#fdfefe" opacity="0.7" />

      {/* 圆头 */}
      <ellipse cx="110" cy="102" rx="72" ry="58" fill="url(#cat-chrome)" stroke="#ffffff" strokeWidth="2.5" />
      {/* 顶部高光 */}
      <ellipse cx="88" cy="74" rx="42" ry="22" fill="url(#cat-glow)" />

      {/* 爪子 */}
      <ellipse cx="62" cy="146" rx="24" ry="18" fill="url(#cat-chrome)" stroke="#ffffff" strokeWidth="2.5" transform="rotate(-18 62 146)" />
      <ellipse cx="158" cy="146" rx="24" ry="18" fill="url(#cat-chrome)" stroke="#ffffff" strokeWidth="2.5" transform="rotate(18 158 146)" />
      <g stroke="#7d8698" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M56 150 l-3 4" />
        <path d="M64 152 l-1 5" />
        <path d="M164 150 l3 4" />
        <path d="M156 152 l1 5" />
      </g>

      {/* 脸 */}
      <g stroke="#3a3f4d" strokeLinecap="round" fill="none">
        <circle cx="86" cy="98" r="5.5" strokeWidth="3" />
        <circle cx="134" cy="98" r="5.5" strokeWidth="3" />
        {/* ω 嘴 */}
        <path d="M99 112 Q105.5 119 110 112 Q114.5 119 121 112" strokeWidth="3.5" />
      </g>

      {/* 尾巴尖的四叶草 */}
      <g transform="translate(104 192)">
        <circle cx="-3.5" cy="-3.5" r="4" fill="#5fbdf0" />
        <circle cx="3.5" cy="-3.5" r="4" fill="#5fbdf0" />
        <circle cx="-3.5" cy="3.5" r="4" fill="#5fbdf0" />
        <circle cx="3.5" cy="3.5" r="4" fill="#5fbdf0" />
      </g>
    </svg>
  )
}
