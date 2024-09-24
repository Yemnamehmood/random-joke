// app/page.tsx
"use client";

import React, { useState } from "react";



const JokeGenerator = () => {
  const [joke, setJoke] = useState<string>("Click the button to get a random joke!");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      setJoke("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Random Joke Generator</h1>
      </header>
      <main className="main">
        <p className="joke">{joke}</p>
        <button onClick={fetchJoke} className="button">
          Get a New Joke
        </button>
      </main>
      <footer className="footer">
        &copy; All rights reserved. Random Joke Generator by Yemna Mehmood.
      </footer>
    </div>
  );
};

export default JokeGenerator;
