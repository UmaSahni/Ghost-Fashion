
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth ,signOut , GoogleAuthProvider,GithubAuthProvider, signInWithPopup, signInWithRedirect, sendSignInLinkToEmail, sendEmailVerification} from "firebase/auth"
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


// export const signInWithGoogle = () =>{
// signInWithPopup(authUser, provider).then((result)=>{
//  console.log(result)
//  localStorage.setItem("result", JSON.stringify (result))
//   const name = result.user.displayName
//   const email = result.user.email
//   const profilePic = result.user.photoURL

//       // window.location.href='/';

//   localStorage.setItem("isAuth",true )
//   localStorage.setItem("name",name)
//   localStorage.setItem("email",email)
//   localStorage.setItem("profilePic",profilePic)
// console.log(result)
// }).catch((err)=>{alert(err.message)
// console.log("Failed")
// })
// }

export const SignInWithGoogle = () => signInWithPopup(authUser,provider)



export const signInWithGitHub = () => signInWithPopup(authUser, GitHubProvider)




// .then((result)=>{

// const name = result.user.displayName
//   const email = result.user.email
//   const profilePic = result.user.photoURL

//   localStorage.setItem("name",name)
//   localStorage.setItem("isAuth",true )
//   localStorage.setItem("email",email)
//   localStorage.setItem("profilePic",profilePic)
//      window.location.href='/';
// console.log(result)
// }).catch((err)=>alert(err.message))
// }
 export const LogOut = () => signOut(authUser)

 // .then(() => {
//   // Sign-out successful.
//   console.log("Sign Out Success")
//   localStorage.clear()
// }).catch((error) => {
//   // An error happened.
// });