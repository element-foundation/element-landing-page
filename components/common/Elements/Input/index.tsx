import { Input } from "./styles";

interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
}

export const PrimaryInput = ({
  placeholder,
  onChange,
  name,
  type,
}: InputProps) => {
  return (
    <Input
      name={name}
      spellCheck="false"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
