import { useState } from "react"
import { Link } from "react-router-dom";
import './Styles.css'

const ControlledLoginForm: React.FC = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    // Function to validate fields while typing
    const validateField = (name: string, value: string) => {
        let error = "";
        if (name === "email") {
            if (!value.includes("@")) error = "Invalid email address";
        } else if (name === "password") {
            if (value.length < 6) error = "Password must be at least 6 characters";
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    // Handle input change and validate immediately
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value); // Validate while typing
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = Object.values(errors).every((err) => !err);
        if (isValid) console.log("Login Data:", formData);
    };

    return (
        <div className="login-container">

            <div className="login-card">
                <Link to="/">Go to Home</Link>

                <h2 className="login-title">Controlled Login Form</h2>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p className="error-text">{errors.password}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default ControlledLoginForm;