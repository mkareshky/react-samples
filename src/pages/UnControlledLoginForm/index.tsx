import { useRef } from "react"
import { Link } from "react-router-dom";
import './Styles.css'

const UnControlledLoginForm: React.FC = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email?.includes("@")) { alert("Email"); return; }
        if (password && password?.length < 8) { alert("Password"); return; }

        console.log({ email, password })

    }

    return (
        <div className="login-container">

            <div className="login-card">
                <Link to="/">Go to Home</Link>

                <h2 className="login-title">UnControlled Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="email"
                            ref={emailRef}
                            type="email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="password"
                            ref={passwordRef}
                            type="password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default UnControlledLoginForm;