import { Typography, Box } from "@mui/material";
import { AppList, FooterContainer, FooterStyled } from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            component={"h3"}
            variant={"body1"}
          >
            Quem somos
          </Typography>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            O e-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos os melhores profissionais
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <div>
          <Typography
            sx={{ fontWeight: "bold" }}
            component={"h3"}
            variant={"body1"}
          >
            Baixe nosso aplicativo
          </Typography>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App store logo"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img
                  src={"/img/logos/google-play.png"}
                  alt={"Play store logo"}
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
