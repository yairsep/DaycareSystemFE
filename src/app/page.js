'use client';

import Image from "next/image";
// import apicall from "./api";
import axios from "axios";
import { useState } from 'react';


export default function Home() {
  const [name, setName] = useState("");

  const apiCall = () => {
    axios.get('http://localhost:8080/').then((res) => {
      //this console.log will be in our frontend console
      setName(res.data + "from express")
    })
  }

  return (
      <div className="App">
        <header className="App-header">
          <img
              src="/next.svg"
              className="App-logo"
              alt="logo" />
          <p>A simple React app.....</p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
            Learn React
          </a>
          <form
              action="../../post"
              method="post"
              className="form">
            <button type="submit">
              Connected?
            </button>
          </form>

            <button onClick={apiCall}>Make API call - {name}</button>

        </header>
      </div>
  );
}
