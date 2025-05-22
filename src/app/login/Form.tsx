"use client";

import { signIn } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { json } from "stream/consumers";

export const Form = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = localStorage.getItem("data");
    const savedData = JSON.parse(data || "");
    console.log(savedData);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      serveremail: savedData.email,
      serverpass: savedData.pass,
      redirect: false,
    });
    if (response?.ok) {
      redirect("/");
    }

    alert("Looged Failed");
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
          Sign In
        </button>
      </form>
    </div>
  );
};
