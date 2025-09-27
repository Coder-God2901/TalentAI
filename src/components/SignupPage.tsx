import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert('Signup successful! Please check your email to verify your account.');
      navigate('/login');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-talentai-neutral-dark">
      <form onSubmit={handleSignup} className="p-8 bg-gray-800 rounded-lg shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold text-center">Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};