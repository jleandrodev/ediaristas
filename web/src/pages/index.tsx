import { NextPage } from 'next'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'} />
    </>
  )
}

export default Home
