import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGitHubSignIn =() =>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='my-5 py-5 w-25'>
            <h2 className='fs-1 fw-bolder'>Please Login !</h2>
            <Form className='my-5 bg-warning-subtle' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="warning w-100 text-white fw-bold" type="submit">
                    Login
                </Button>
                <br />
                <Button onClick={handleGoogleSignIn} variant="warning w-100 text-white fw-bold my-3">Sign In with Google</Button>
                <br />
                
                <Button onClick={handleGitHubSignIn} variant="warning w-100 text-white fw-bold mb-3">Sign In with GitHub</Button>
                <br />
                <Form.Text className="text-secondary fw-bold">
                    Don't have an account ? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;