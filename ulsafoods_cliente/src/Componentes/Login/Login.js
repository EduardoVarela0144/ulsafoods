import logo from '../images/logo2.png';
import burger from '../images/burger.jpg';


function Login() {
    const inicio = () => {
        window.location.href = '/Inicio';
    };
    return (
        <div className="CuadroLogin">
            <div className="Izquierda">
                <a href="/#"><img src={burger} alt="Logo" /></a>
            </div>
            <div className="Derecha">
                <a href="/#"><img src={logo} alt="Logo" /></a>
                <input type="text" id="user" className="input font" placeholder="Usuario" />
                <input type="password" className="input font" name="password" id="password" placeholder="Contraseña" required />
                <button className="Entrar" type="submit" onClick={inicio}>
                    Login
                </button>
                <button type="submit" className="button2">
                    Sign up
                </button>
            </div>
        </div>

    )
}

export { Login }