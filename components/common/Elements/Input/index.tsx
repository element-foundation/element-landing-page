import { Input } from "./styles";

interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const PrimaryInput = ({ placeholder, onChange, name }: InputProps) => {
  return (
    <Input
      name={name}
      spellCheck="false"
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
