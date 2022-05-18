import { useForm } from '../hooks/useForm';
import { IUseForm } from '../interfaces/IUseForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const { name, email, password, repeatPassword, handleChange, onSubmit, reset, isValidEmail } = useForm<IUseForm>({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    return (
        <div>
            <h1>Registro</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    value={name}
                    className={`${name.trim().length === 0 ? "has-error" : ""}`}
                />
                { name.trim().length === 0 && <span>Este campo es necesario</span>}
                
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={email}
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Email no es válido</span> }
                
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    className={`${password.trim().length < 6 && 'has-error'}`}
                />
                { password.trim().length < 6 && <span>La contraseña tiene que tener 6 letras</span>}
                
                <input
                    type="password"
                    placeholder="Repite tu contraseña"
                    name="repeatPassword"
                    onChange={handleChange}
                    value={repeatPassword}
                    className={`${repeatPassword.trim().length === 0 && 'has-error'}`}
                />
                {repeatPassword.trim().length === 0 && repeatPassword !== password && <span>Este campo es necesario</span>}
                {repeatPassword !== password && <span>Las contraseñas deben de ser igualesssss</span>}

                <button>Create</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}