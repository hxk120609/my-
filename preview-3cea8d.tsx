import { useEffect, useRef } from 'react'

/** 反差色自定义光标（mix-blend-difference） */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = -100
    let y = -100
    let tx = -100
    let ty = -100
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor]')
      el.classList.toggle('is-hover', !!interactive)
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="custom-cursor" aria-hidden="true" />
}
