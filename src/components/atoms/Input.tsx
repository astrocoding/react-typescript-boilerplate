import { useId, useState } from 'react'
import type {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import Tooltip, { type TooltipSide } from './Tooltip'
import Typography from './Typography'
import { cn } from './utils'

type InputKind =
  | 'text'
  | 'password'
  | 'email'
  | 'date'
  | 'datetime-local'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'time'
  | 'month'
  | 'week'
  | 'textarea'

type SafeInputType = Extract<
  HTMLInputTypeAttribute,
  Exclude<InputKind, 'textarea'>
>

interface BaseInputProps {
  id?: string
  label?: ReactNode
  helperText?: ReactNode
  isError?: boolean
  errorMessage?: ReactNode
  errorCode?: number
  isDisabled?: boolean
  isReadOnly?: boolean
  tooltipSide?: TooltipSide
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
}

type TextInputProps = BaseInputProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'disabled' | 'readOnly'
  > & {
    type?: SafeInputType
  }

type TextAreaProps = BaseInputProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled' | 'readOnly'> & {
    type: 'textarea'
  }

export type InputProps = TextInputProps | TextAreaProps

export function Input(props: InputProps) {
  const {
    id,
    label,
    helperText,
    isError = false,
    errorMessage,
    errorCode,
    isDisabled = false,
    isReadOnly = false,
    tooltipSide = 'top',
    containerClassName,
    labelClassName,
    inputClassName,
    type = 'text',
    ...rest
  } = props

  const generatedId = useId()
  const [isControlActive, setIsControlActive] = useState(false)
  const fieldId = id ?? generatedId
  const descriptionId = `${fieldId}-description`
  const hasErrorMessage = isError && Boolean(errorMessage)
  const isValidation422 = isError && errorCode === 422

  const validationTooltipContent =
    errorMessage ?? 'Validation error 422: request tidak valid.'

  const controlClassName = cn(
    'ui-control',
    isError && 'ui-control-error',
    inputClassName,
  )

  const textareaProps =
    type === 'textarea'
      ? (rest as Omit<TextAreaProps, keyof BaseInputProps | 'type'>)
      : null
  const inputProps =
    type !== 'textarea'
      ? (rest as Omit<TextInputProps, keyof BaseInputProps | 'type'>)
      : null

  const textareaFocus = textareaProps?.onFocus
  const textareaBlur = textareaProps?.onBlur
  const inputFocus = inputProps?.onFocus
  const inputBlur = inputProps?.onBlur

  const controlNode =
    type === 'textarea' ? (
      <textarea
        id={fieldId}
        className={controlClassName}
        disabled={isDisabled}
        readOnly={isReadOnly}
        aria-invalid={isError || undefined}
        aria-describedby={helperText || hasErrorMessage ? descriptionId : undefined}
        {...textareaProps}
        onFocus={(event) => {
          setIsControlActive(true)
          textareaFocus?.(event)
        }}
        onBlur={(event) => {
          setIsControlActive(false)
          textareaBlur?.(event)
        }}
      />
    ) : (
      <input
        id={fieldId}
        type={type}
        className={controlClassName}
        disabled={isDisabled}
        readOnly={isReadOnly}
        aria-invalid={isError || undefined}
        aria-describedby={helperText || hasErrorMessage ? descriptionId : undefined}
        {...inputProps}
        onFocus={(event) => {
          setIsControlActive(true)
          inputFocus?.(event)
        }}
        onBlur={(event) => {
          setIsControlActive(false)
          inputBlur?.(event)
        }}
      />
    )

  return (
    <div className={cn('ui-field', containerClassName)}>
      {label ? (
        <div className="ui-label-row">
          <label htmlFor={fieldId} className={cn('ui-label', labelClassName)}>
            <Typography as="span" weight="medium" className="text-sm">
              {label}
            </Typography>
          </label>
        </div>
      ) : null}

      {isValidation422 ? (
        <Tooltip
          content={validationTooltipContent}
          side={tooltipSide}
          trigger="manual"
          className="ui-tooltip-field-anchor"
          open={isControlActive}
          contentClassName="ui-tooltip-over-input ui-tooltip-danger"
        >
          {controlNode}
        </Tooltip>
      ) : (
        controlNode
      )}

      {hasErrorMessage && isValidation422 === false ? (
        <Typography as="span" id={descriptionId} color="danger" className="ui-error">
          {errorMessage}
        </Typography>
      ) : helperText ? (
        <Typography as="span" id={descriptionId} color="muted" className="ui-helper">
          {helperText}
        </Typography>
      ) : null}
    </div>
  )
}

export default Input
