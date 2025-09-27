import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // After successful login, redirect to the dashboard
      navigate('/candidate-dashboard');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-talentai-neutral-dark">
      <form onSubmit={handleLogin} className="p-8 bg-gray-800 rounded-lg shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold text-center">Login to TalentAI</h2>
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
        <button type="submit" className="p-2 bg-green-600 text-white rounded hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  );
};