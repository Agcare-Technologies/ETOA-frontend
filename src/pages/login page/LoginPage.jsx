import React from "react";
import GoogleButton from "react-google-button";
import { auth, googleAuthProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='text-4xl font-semibold'>
      <h3 className='text-center'>Login</h3>
      <div>
        <GoogleButton onClick={handleSignInWithGoogle} />
      </div>
    </div>
  );
};

export default LoginPage;
