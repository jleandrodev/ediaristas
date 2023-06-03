import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./PageTitle.styled";
import { Container } from "@mui/material";

interface PageTitleProps {
  title: JSX.Element | string;
  subtitle?: JSX.Element | string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <Container>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
      </Container>
    </PageTitleContainer>
  );
};

export default PageTitle;
