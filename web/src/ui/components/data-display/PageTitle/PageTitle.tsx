import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from "./PageTitle.styled"

interface PageTitleProps {
    title: JSX.Element | string
    subtitle?: JSX.Element | string
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{ props.title }</PageTitleStyled>
            <PageSubtitleStyled>{ props.subtitle }</PageSubtitleStyled>
        </PageTitleContainer>
    )
}

export default PageTitle