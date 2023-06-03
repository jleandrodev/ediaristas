import { styled } from "@mui/material";

export const SafeEnvironmentContainer = styled("div")`
  text-align: right;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
