import { Button, Container, Typography } from "@mui/material";
import {
  FormElementsContainer,
  ProfessionalContainer,
  ProfessionalPaper,
} from "@styles/pages/index.style";
import { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>CEP inválido!</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfessionalPaper>
          <ProfessionalContainer>
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
            <UserInformation
              name={"John Doe"}
              picture={"https://github.com/jleandrodev.png"}
              rating={4}
              description={"Maringá - PR"}
            />
          </ProfessionalContainer>
        </ProfessionalPaper>
      </Container>
    </>
  );
};

export default Home;
