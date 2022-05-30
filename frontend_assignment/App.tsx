import React from "react";
import "./styles/globals.css";
import type { AppProps } from "next/app";
import { type } from 'os';

type FormInputs = {
  email: string;
  password: string;
  
  }


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <form action="">

<label htmlFor="" className="label">Email:</label>
<input type="text" placeholder="Email" />
<p className="error"></p>
<label htmlFor="" className="label">Password:</label>
<p className="error"></p>
<button type="submit">Submit</button>

     </form>
    </div>
  );
}

export default MyApp;
