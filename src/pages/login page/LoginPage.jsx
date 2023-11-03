// LoginPage.js
import React from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust the import path
import { auth, googleAuthProvider } from "../../firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth(); // Add setUser to update the user state

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);

      if (result.user) {
        // Update the user state in the context
        setUser(result.user);
        console.log("values saved in context");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    // If the user is already authenticated, redirect to the home page
    navigate("/home");
  }

  return (
    <div className='text-4xl font-semibold'>
      <div className='flex justify-center rounded-md shadow-sm mt-10 py-10 '>
        <GoogleButton onClick={handleSignInWithGoogle} />
      </div>
    </div>
  );
};

export default LoginPage;
