import { TextField, styled } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutLinedInput-notchedOutLine {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
