
// import Nope from 'nope-validator';
 import React from 'react';
// import {useForm} from 'react-hook-form';
// import {nopeResolver} from '@hookform/resolvers/nope';

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { type } from 'os';



// type FormInputs = {
//   email: string;
//   password: string;
//   }

// const schema = Nope.object().shape ({
// email:Nope.srting().required('Email is requried').email('Email is invalid'),
// password: Nope.string().required('Password is required'),

// });

function MyApp({ Component, pageProps }: AppProps) {
//const {register} = useForm <FormImputs>({resolver: nopeResolver(schema)});
// Here, hook form and nope are combined. this is a template. 
// But I couldn't add the libraries. I made a comment line for it.Here, react-hook-form and nope are combined. this is a template. 
// But I couldn't add the libraries. I made a comment line for it.

  //return <Component {...pageProps} />
  return (
    <div className="App">
      <form action="">

<label htmlFor="" className="label">Email:</label>
<input type="text" placeholder="Email"  />  
<p className="error"></p>
<label htmlFor="" className="label">Password:</label>
<input type="password" placeholder="Pasword" />
<p className="error"></p>
<button type="submit">Submit</button>

     </form>
    </div>
  );
}

export default MyApp
