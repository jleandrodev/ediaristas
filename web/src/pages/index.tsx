import { Button, Container, Typography } from "@mui/material";
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
        <UserInformation
          name={"John Doe"}
          picture={"https://github.com/jleandrodev.png"}
          rating={4}
          description={"Maringá - PR"}
        />
      </Container>
    </>
  );
};

export default Home;
