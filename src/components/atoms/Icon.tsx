import type { SVGProps } from 'react'
import { cn } from './utils'

export type IconName =
  | 'check'
  | 'close'
  | 'info'
  | 'warning'
  | 'loader'
  | 'calendar'
  | 'eye'
  | 'eyeOff'
  | 'chevronDown'
  | 'minus'

export type IconSize = 'sm' | 'md' | 'lg'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: IconSize | number
  title?: string
}

const sizeMap: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
}

function resolveSize(size: IconSize | number): number {
  return typeof size === 'number' ? size : sizeMap[size]
}

function IconPath({ name }: { name: IconName }) {
  switch (name) {
    case 'check':
      return <path d="M5 13l4 4L19 7" />
    case 'close':
      return <path d="M6 6l12 12M18 6L6 18" />
    case 'info':
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v6" />
          <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
        </>
      )
    case 'warning':
      return (
        <>
          <path d="M12 4l9 16H3l9-16z" />
          <path d="M12 10v5" />
          <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
        </>
      )
    case 'loader':
      return (
        <>
          <circle cx="12" cy="12" r="9" opacity="0.25" />
          <path d="M21 12a9 9 0 00-9-9" />
        </>
      )
    case 'calendar':
      return (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </>
      )
    case 'eye':
      return (
        <>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )
    case 'eyeOff':
      return (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 6.2A11 11 0 0112 6c6.5 0 10 6 10 6a17 17 0 01-4 4.6" />
          <path d="M6.4 9.5A16 16 0 002 12s3.5 6 10 6c1.4 0 2.7-.3 3.8-.7" />
          <path d="M9.9 9.9A3 3 0 0012 15" />
        </>
      )
    case 'chevronDown':
      return <path d="M6 9l6 6 6-6" />
    case 'minus':
      return <path d="M5 12h14" />
    default:
      return null
  }
}

export function Icon({
  name,
  size = 'md',
  className,
  title,
  ...rest
}: IconProps) {
  const pixelSize = resolveSize(size)

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={pixelSize}
      height={pixelSize}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={cn(name === 'loader' && 'animate-spin', className)}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <IconPath name={name} />
    </svg>
  )
}

export default Icon
