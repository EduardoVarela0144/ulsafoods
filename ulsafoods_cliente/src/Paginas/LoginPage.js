import { Login } from '../Componentes/Login/Login';
import { Container } from '../Componentes/General/Container';
import '../Css/Login/Login.css'

function LoginPage() {
    return (
        <Container>
            <h2>Bienvenido</h2>
            <Login />
        </Container>
    )
}

export default LoginPage;