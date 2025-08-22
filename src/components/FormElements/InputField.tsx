interface IInputProps {
  name?: string,
  label?: string,
  value?: string,
  placeholder?: string,
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
  style?: React.CSSProperties,
} 

export default function InputField(props: IInputProps) {
  return (
      <input data-testid="input" {...props} />
  )
}
