import { InputProps } from "lib/types";
import { Input } from "./styles";

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
