import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Icon from './Icon'
import { cn } from './utils'

export type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'warning' | 'info'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type IconPosition = 'left' | 'right'
export type ButtonAppearance = 'solid' | 'outline'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant
  size?: ButtonSize
  appearance?: ButtonAppearance
  isLoading?: boolean
  icon?: ReactNode
  iconPosition?: IconPosition
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const solidVariantClassMap: Record<ButtonVariant, string> = {
  primary: 'ui-btn-primary',
  ghost: 'ui-btn-ghost',
  danger: 'ui-btn-danger',
  warning: 'ui-btn-warning',
  info: 'ui-btn-info',
}

const outlineVariantClassMap: Record<ButtonVariant, string> = {
  primary: 'ui-btn-outline-primary',
  ghost: 'ui-btn-outline-ghost',
  danger: 'ui-btn-outline-danger',
  warning: 'ui-btn-outline-warning',
  info: 'ui-btn-outline-info',
}

const sizeClassMap: Record<ButtonSize, string> = {
  sm: 'ui-btn-sm',
  md: 'ui-btn-md',
  lg: 'ui-btn-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  appearance = 'solid',
  isLoading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const isDisabled = Boolean(disabled) || isLoading
  const variantClassName =
    appearance === 'outline'
      ? outlineVariantClassMap[variant]
      : solidVariantClassMap[variant]

  return (
    <button
      type={type}
      className={cn(
        'ui-btn',
        variantClassName,
        sizeClassMap[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? <Icon name="loader" size="sm" aria-hidden /> : null}
      {isLoading === false && icon && iconPosition === 'left' ? (
        <span aria-hidden>{icon}</span>
      ) : null}
      {children}
      {isLoading === false && icon && iconPosition === 'right' ? (
        <span aria-hidden>{icon}</span>
      ) : null}
    </button>
  )
}

export default Button
