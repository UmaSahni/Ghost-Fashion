
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider,GithubAuthProvider, signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDYuGYwcsB3varO-jgYd_OuW0Rl5u1eWZ8",
  authDomain: "sign-cdb9b.firebaseapp.com",
  projectId: "sign-cdb9b",
  storageBucket: "sign-cdb9b.appspot.com",
  messagingSenderId: "432159345001",
  appId: "1:432159345001:web:7f0bd37ae23f3c51c695f8",
  measurementId: "G-S58YTMN70X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authUser = getAuth(app) // Check who is currently authenticated

const provider = new GoogleAuthProvider ()
const GitHubProvider = new GithubAuthProvider()
export const signInWithGoogle = () =>{
signInWithPopup(authUser, provider).then((result)=>{
console.log(result)
}).catch((err)=>console.log(err))
}

export const signInWithGitHub = () =>{
signInWithPopup(authUser, GitHubProvider)
}