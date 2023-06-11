import { Button, Container, Typography, CircularProgress } from "@mui/material";
import {
  FormElementsContainer,
  ProfessionalContainer,
  ProfessionalPaper,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/useIndex.page";
import { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    isValid,
    searchProfessionals,
    erro,
    professionals,
    search,
    loading,
    otherProfessionals,
  } = useIndex();

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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!isValid || loading}
            onClick={() => searchProfessionals(cep)}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {search &&
          !erro &&
          (professionals.length > 0 ? (
            <ProfessionalPaper>
              <ProfessionalContainer>
                {professionals.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfessionalContainer>
              <Container sx={{ textAlign: "center" }}>
                {otherProfessionals > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {otherProfessionals}
                    {otherProfessionals > 1
                      ? " profissionais atendem "
                      : " profissional atende "}
                    ao seu endereço
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfessionalPaper>
          ) : (
            <Typography sx={{ mb: 5 }} align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponível na sua região.
            </Typography>
          ))}
      </Container>
    </>
  );
};

export default Home;
