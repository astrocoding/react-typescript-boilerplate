import type { HTMLAttributes } from 'react'
import { cn } from './utils'

export type SkeletonShape = 'circle' | 'rectangle'
export type SkeletonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: SkeletonSize
  height?: SkeletonSize
  shape?: SkeletonShape
  animate?: boolean
}

const widthClassMap: Record<SkeletonSize, string> = {
  xs: 'w-12',
  sm: 'w-20',
  md: 'w-32',
  lg: 'w-48',
  xl: 'w-64',
  full: 'w-full',
}

const heightClassMap: Record<SkeletonSize, string> = {
  xs: 'h-3',
  sm: 'h-4',
  md: 'h-6',
  lg: 'h-8',
  xl: 'h-10',
  full: 'h-full',
}

const circleHeightFromWidth: Record<SkeletonSize, string> = {
  xs: 'h-12',
  sm: 'h-20',
  md: 'h-32',
  lg: 'h-48',
  xl: 'h-64',
  full: 'h-full',
}

export function Skeleton({
  width = 'md',
  height = 'md',
  shape = 'rectangle',
  animate = true,
  className,
  ...rest
}: SkeletonProps) {
  const heightClass =
    shape === 'circle' ? circleHeightFromWidth[width] : heightClassMap[height]

  return (
    <div
      aria-hidden
      className={cn(
        'ui-skeleton',
        widthClassMap[width],
        heightClass,
        shape === 'circle' ? 'rounded-full' : 'rounded-xl',
        animate ? '' : 'ui-skeleton-static',
        className,
      )}
      {...rest}
    />
  )
}

export default Skeleton
