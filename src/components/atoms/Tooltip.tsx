import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from './utils'

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'
export type TooltipTrigger = 'hover' | 'focus' | 'hover-focus' | 'manual'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: ReactNode
  children: ReactNode
  side?: TooltipSide
  trigger?: TooltipTrigger
  disabled?: boolean
  open?: boolean
  contentClassName?: string
}

const sideClassMap: Record<TooltipSide, string> = {
  top: 'ui-tooltip-top',
  right: 'ui-tooltip-right',
  bottom: 'ui-tooltip-bottom',
  left: 'ui-tooltip-left',
}

const triggerClassMap: Record<TooltipTrigger, string> = {
  hover: 'ui-tooltip-trigger-hover',
  focus: 'ui-tooltip-trigger-focus',
  'hover-focus': 'ui-tooltip-trigger-hover-focus',
  manual: 'ui-tooltip-trigger-manual',
}

export function Tooltip({
  content,
  children,
  side = 'top',
  trigger = 'hover-focus',
  disabled = false,
  open,
  className,
  contentClassName,
  ...rest
}: TooltipProps) {
  const hasContent = content !== null && content !== undefined
  if (disabled || hasContent === false) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'ui-tooltip',
        triggerClassMap[trigger],
        open === true && 'ui-tooltip-open',
        className,
      )}
      {...rest}
    >
      <span className="ui-tooltip-trigger">{children}</span>
      <span
        role="tooltip"
        className={cn('ui-tooltip-content', sideClassMap[side], contentClassName)}
      >
        {content}
      </span>
    </span>
  )
}

export default Tooltip
