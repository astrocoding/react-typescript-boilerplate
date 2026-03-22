import type { HTMLAttributes } from 'react'
import { cn } from './utils'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation
  decorative?: boolean
}

export function Separator({
  orientation = 'horizontal',
  decorative = true,
  className,
  ...rest
}: SeparatorProps) {
  return (
    <div
      role={decorative ? undefined : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        'ui-separator',
        orientation === 'vertical' ? 'ui-separator-vertical' : 'ui-separator-horizontal',
        className,
      )}
      {...rest}
    />
  )
}

export default Separator
