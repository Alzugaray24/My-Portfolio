import { useState } from "react";
import './Form.css'
import { validateEmail } from "../utils"

const PasswordErrorMessage = ({ password }) => {
    if (password.value.length < 8 && password.isTouched) {
        return (
            <p className="FieldError">Password should have at least 8 characters</p>
        );
    }
    return null; // Return null when there's no error
};

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                        />
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <input
                            className="form-control"  // Agregado
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                        />
                    </div>
                    <div className="field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input
                            className="form-control"  // Agregado
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            className="form-control"  // Agregado
                            value={password.value}
                            type="password"
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }}
                            placeholder="Password"
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>
                    <div className="field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select
                            className="form-control"  // Agregado
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="form-btn-container">
                        <button className="btn btn-lg btn-outline-light" type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>

    );
}

export default Form;