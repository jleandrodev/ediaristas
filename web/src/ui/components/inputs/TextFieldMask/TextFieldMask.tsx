import TextField from "ui/components/inputs/TextField/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
  //@ts-ignore
  return <InputMask mask={mask}>{() => <TextField {...props} />}</InputMask>;
};

export default TextFieldMask;
