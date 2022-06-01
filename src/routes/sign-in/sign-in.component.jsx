import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{
    const logGoogleUser = async () => {
        const respone = await signInWithGooglePopup();
        console.log(respone);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;