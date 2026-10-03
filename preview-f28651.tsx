interface SparkleProps {
  className?: string
  size?: number
  color?: string
  delay?: string
}

/** 四角小星星（闪烁动画） */
export default function Sparkle({ className = '', size = 20, color = '#5fe3c4', delay = '0s' }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`twinkle ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
        fill={color}
      />
    </svg>
  )
}
