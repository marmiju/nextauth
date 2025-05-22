"use client";

import { usePathname } from "next/navigation";
import React, { FormEvent } from "react";

export const Form = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();
    if (response.ok) {
      const email = result.email;
      const pass = result.password;
      localStorage.setItem("data", JSON.stringify({ email, pass }));
      console.log(email, pass);
    }
  };

  return (
    <div className="grid items-center max-w-96 mx-auto h-screen ">
      <form
        onSubmit={handleSubmit}
        className="duration-300 grid grid-cols-1 gap-4"
      >
        <input
          className="p-2 bg-secondary duration-300 text-text"
          name="email"
          type="email"
        />
        <input
          name="password"
          className="p-2 bg-secondary duration-300 text-text"
          type="password"
        />
        <button
          type="submit"
          className="text-xl duration-300 p-2 bg-primary text-alter"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
