"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Sign up successful! Check your email for verification.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-lg p-10 rounded-lg w-96 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-red-500">{message}</p>
      </form>
    </div>
  );
}
