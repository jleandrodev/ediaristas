import { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
    </>
  )
}

export default Home
