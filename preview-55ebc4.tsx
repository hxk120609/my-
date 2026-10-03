interface BendProps {
  fill?: string
  flip?: boolean
  className?: string
}

/** 区块之间的弧形过渡（封面天空渐变色带） */
export default function Bend({ fill = '#dcf8ee', flip = false, className = '' }: BendProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`w-full h-[60px] md:h-[90px] block ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,64 C240,96 480,16 720,40 C960,64 1200,24 1440,56 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
