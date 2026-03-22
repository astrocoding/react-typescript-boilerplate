import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from './utils'

export type BadgeStatus = 'success' | 'warning' | 'error' | 'info'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: BadgeStatus
  pill?: boolean
  icon?: ReactNode
}

const statusClassMap: Record<BadgeStatus, string> = {
  success: 'ui-badge-success',
  warning: 'ui-badge-warning',
  error: 'ui-badge-error',
  info: 'ui-badge-info',
}

export function Badge({
  status = 'info',
  pill = false,
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'ui-badge',
        statusClassMap[status],
        pill && 'rounded-full px-3',
        className,
      )}
      {...rest}
    >
      {icon ? <span aria-hidden>{icon}</span> : null}
      {children}
    </span>
  )
}

export default Badge
