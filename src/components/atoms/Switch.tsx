import { useId, useState } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Typography from './Typography'
import { cn } from './utils'

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  isDisabled?: boolean
  label?: ReactNode
  helperText?: ReactNode
}

export function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  isDisabled = false,
  label,
  helperText,
  className,
  disabled,
  id,
  onClick,
  ...rest
}: SwitchProps) {
  const generatedId = useId()
  const switchId = id ?? generatedId
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = typeof checked === 'boolean'
  const currentChecked = isControlled ? checked : internalChecked
  const isControlDisabled = isDisabled || Boolean(disabled)

  function handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event)
    if (event.defaultPrevented || isControlDisabled) {
      return
    }

    const nextChecked = currentChecked === false
    if (isControlled === false) {
      setInternalChecked(nextChecked)
    }
    onCheckedChange?.(nextChecked)
  }

  return (
    <div className={cn('ui-choice', className)}>
      <div className="ui-choice-row">
        <button
          id={switchId}
          type="button"
          role="switch"
          aria-checked={currentChecked}
          onClick={handleToggle}
          disabled={isControlDisabled}
          className={cn(
            'ui-switch ui-focus-ring',
            currentChecked ? 'ui-switch-on' : 'ui-switch-off',
          )}
          {...rest}
        >
          <span
            className={cn(
              'ui-switch-thumb',
              currentChecked ? 'translate-x-5' : 'translate-x-0',
            )}
          />
        </button>

        {label ? (
          <label htmlFor={switchId} className="cursor-pointer">
            <Typography as="span" weight="medium" className="text-sm">
              {label}
            </Typography>
          </label>
        ) : null}
      </div>

      {helperText ? (
        <Typography as="span" color="muted" className="ui-helper">
          {helperText}
        </Typography>
      ) : null}
    </div>
  )
}

export default Switch
