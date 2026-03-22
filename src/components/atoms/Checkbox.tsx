import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import Typography from './Typography'
import { cn } from './utils'

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'disabled' | 'readOnly'
  > {
  label?: ReactNode
  helperText?: ReactNode
  isError?: boolean
  errorMessage?: ReactNode
  isDisabled?: boolean
}

export function Checkbox({
  id,
  label,
  helperText,
  isError = false,
  errorMessage,
  isDisabled = false,
  className,
  ...rest
}: CheckboxProps) {
  const generatedId = useId()
  const checkboxId = id ?? generatedId
  const isControlDisabled = isDisabled
  const hasErrorMessage = isError && Boolean(errorMessage)

  return (
    <div className={cn('ui-choice', className)}>
      <label htmlFor={checkboxId} className="ui-choice-row">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn('ui-check-input ui-focus-ring')}
          disabled={isControlDisabled}
          aria-invalid={isError || undefined}
          {...rest}
        />
        {label ? (
          <Typography as="span" weight="medium" className="text-sm">
            {label}
          </Typography>
        ) : null}
      </label>

      {hasErrorMessage ? (
        <Typography as="span" color="danger" className="ui-error">
          {errorMessage}
        </Typography>
      ) : helperText ? (
        <Typography as="span" color="muted" className="ui-helper">
          {helperText}
        </Typography>
      ) : null}
    </div>
  )
}

export default Checkbox
