import { SafeEnvironmentContainer } from "./SafeEnvironment.style"
import { Container } from '@mui/material'

const SafeEnvironment = () => {
    return (
        <div>
            <SafeEnvironmentContainer>
                <Container>
                    Ambiente Seguro
                </Container>
            </SafeEnvironmentContainer>
        </div>
    )
}

export default SafeEnvironment