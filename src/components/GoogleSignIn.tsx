import React from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebase';
import { User } from 'firebase/auth';

interface GoogleSignInProps {
  onSignIn: (user: User) => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ onSignIn }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onSignIn(result.user);
    } catch (error) {
      console.error('Error al autenticar con Google:', error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleSignIn;