//https://firebase.google.com/docs/auth/web/start

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

// CREATE
  export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
  };

// SIGN IN
  export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
  };

// INIT
  export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
  
    const userCookie = useCookie("userCookie");
  
    const router = useRouter();
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid)
      } else {
        //if signed out
        // router.push("/");
      }
  
      firebaseUser.value = user;
  
      // @ts-ignore
      userCookie.value = user; //ignore error because nuxt will serialize to json
  
      $fetch("/api/auth", {
        method: "POST",
        body: { user },
      });
    });
  };
  
// SIGN OUT
  export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    return result;
  };