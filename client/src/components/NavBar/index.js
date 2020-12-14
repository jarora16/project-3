import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import authentication from '../../utils/authAPI';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            userLoggedIn: 2,
        }
    }
    componentDidMount() {
        authentication.getUser().then(user => {
            if (user && user.data) this.setState({ userLoggedIn: 1 });
            else this.setState({ userLoggedIn: 0 })
        })
            .catch(e => {
                console.log(e)
                this.setState({ userLoggedIn: 0 })
            })
    }
    async logout() {
        await authentication.logout();
        this.setState({ userLoggedIn: 0 })
    }
    render() {
        const { userLoggedIn } = this.state;
        return (
            <nav className="navbar navbar-expand-lg text-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Video Games</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/search"
                                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                            > Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            >Saved</Link>
                        </li>
                    </ul>
                </div>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
                {userLoggedIn === 0 ? (<a href={'/auth/google'}>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        </div>
                        <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </a>) : (userLoggedIn === 2 ? '' : <button className="btn btn-dark" onClick={this.logout.bind(this)}>logout</button>)}
            </nav>

        );
    }


}

export default Navbar;
