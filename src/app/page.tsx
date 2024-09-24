"use client"; // This directive is required when using hooks in Next.js 13+

import React, { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState<string>("Click the button to get a random joke!");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch a joke.");
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      // Handle the error gracefully, for example:
      console.error("An error occurred while fetching the joke:", err);
      setJoke("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Random Joke Generator</h1>
      </header>
      <main className="main">
        <div className="joke">{joke}</div>
        <button className="button" onClick={fetchJoke} disabled={loading}>
          {loading ? "Loading..." : "Get a New Joke"}
        </button>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} All rights reserved. Random Joke Generator by Yemna Mehmood
      </footer>
    </div>
  );
};

export default JokeGenerator;
