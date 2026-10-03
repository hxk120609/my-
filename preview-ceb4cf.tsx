interface OrbitTextProps {
  text?: string
  size?: number
  className?: string
}

/** 环绕旋转的文字圆环 */
export default function OrbitText({
  text = 'CAT ON THE PIANO ✦ MINT MELODY ✦ PORTFOLIO ✦ SIDE A ✦ SIDE B ✦ ',
  size = 300,
  className = '',
}: OrbitTextProps) {
  return (
    <div className={`pointer-events-none ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="orbit-spin w-full h-full">
        <defs>
          <path id="orbit-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="6.2" fill="#5fe3c4" style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.18em' }}>
          <textPath href="#orbit-circle">{text}</textPath>
        </text>
      </svg>
    </div>
  )
}
