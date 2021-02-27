import React, {useState, useEffect} from "react";
import Banner from "../../assets/icons/login-banner.svg";
import "./style.scss";
import {AtSign, Key} from "react-feather";
import {useHistory} from "react-router-dom";


const Login = () => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Token, setToken] = useState(localStorage.getItem("token"));
    const history = useHistory();

    const handleLogin = () => {
        if(!Username && !Password) {
            alert("Username or password cannot be empty.");
            return;
        }
        const token = Username+Password;
        localStorage.setItem("token", token);
        setToken(token)
    }

    useEffect(() => {
        Token && history.push("/");
    }, [Token])

    return (
        <div className="login">
            <div className="banner">
                <img src={Banner} alt="Banner"/>
            </div>
            <div className="body">
                <h1 className="title">Login</h1>
                <div className="form">
                    <div className="input-group">
                        <div className="icon"><AtSign/></div>
                        <input type="text" placeholder="Email address" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className="input-group">
                        <div className="icon"><Key/></div>
                        <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                        <div className="forgot-password">
                            <a href="/forgot-password">Forgot?</a>
                        </div>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>

                <div className="or">Or, login with...</div>

                <div className="grid">
                    <div className="grid-half">
                        <a href="#">
                            <div className="social-icon">
                                <img src="https://www.jagatreview.com/wp-content/uploads/2018/03/2000px-Google__G__Logo.svg_.png" alt="Google Icon"/>
                            </div>
                        </a>
                    </div>
                    <div className="grid-half">
                        <a href="#">
                            <div className="social-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Icon"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
