import { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";

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
      <UserInformation
        name={"John Doe"}
        picture={"https://github.com/jleandrodev.png"}
        rating={4}
        description={"Maringá - PR"}
      />
    </>
  );
};

export default Home;
