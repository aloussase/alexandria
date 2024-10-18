import { useState } from "preact/hooks";
import "./app.css";
import logo from "./assets/logo.png";
import a from "./assets/1.jpg";
import b from "./assets/2.jpg";

export function App() {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log(email);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r  from-[#5de0e6] via-[#4378bc] to-[#004aad] flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-[180px] rounded self-center mb-8"
        />
        <h1 className="text-white text-6xl">Alexandria</h1>
        <h2 className="text-white text-2xl">
          All your books, just a click away
        </h2>
        <div className="flex gap-2 mt-8">
          <input
            type="email"
            placeholder="I'm interested"
            className="rounded p-1"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-[#4378bc] hover:bg-[#4378bc]/25 p-2 rounded shadow-sm"
            onClick={onSubmit}
          >
            Notify me
          </button>
        </div>
      </div>
      <div className="w-[250px]"></div>
      <div className="flex gap-8">
        <img
          src={a}
          alt="search books"
          className="h-[400px] shadow-lg rounded -translate-y-10"
        />
        <img
          src={b}
          alt="convert books"
          className="h-[400px] shadow-lg rounded translate-y-10"
        />
      </div>
    </div>
  );
}
