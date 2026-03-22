import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from './utils'

export type TypographyTag = 'h1' | 'h2' | 'p' | 'span'
export type TypographyWeight = 'light' | 'medium' | 'bold'
export type TypographyColor =
  | 'default'
  | 'muted'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'white'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyTag
  weight?: TypographyWeight
  color?: TypographyColor
  children: ReactNode
}

const sizeClassByTag: Record<TypographyTag, string> = {
  h1: 'text-3xl leading-tight sm:text-4xl',
  h2: 'text-2xl leading-tight',
  p: 'text-base leading-relaxed',
  span: 'text-sm leading-normal',
}

const weightClassMap: Record<TypographyWeight, string> = {
  light: 'font-light',
  medium: 'font-medium',
  bold: 'font-bold',
}

const colorClassMap: Record<TypographyColor, string> = {
  default: 'text-slate-100',
  muted: 'text-slate-400',
  primary: 'text-brand-300',
  success: 'text-emerald-300',
  warning: 'text-amber-300',
  danger: 'text-red-300',
  info: 'text-sky-300',
  white: 'text-white',
}

export function Typography({
  as = 'p',
  weight = 'medium',
  color = 'default',
  className,
  children,
  ...rest
}: TypographyProps) {
  const Component = as

  return (
    <Component
      className={cn(
        sizeClassByTag[as],
        weightClassMap[weight],
        colorClassMap[color],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Typography
