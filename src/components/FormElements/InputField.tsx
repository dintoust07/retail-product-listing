import type IInputProps from '../../types/inputProps'

export default function InputField(props: IInputProps) {
  return (
      <input data-testid="input" {...props} />
  )
}
