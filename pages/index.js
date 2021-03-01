import Head from "next/head";
import Cloud from "../components/cloud.jsx";
import React from "react";
// import BoxLogin from "../components/boxLogin.jsx";
import dynamic from "next/dynamic";


export default function Home() {

  //Chamada do componente com renderização em tela
const BoxLogin = dynamic(() => import("../components/boxLogin.jsx"), {
  ssr: false,
});

  return (
    <div className="container">
      <Head>
        <title>Login Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cloud />
      <div className="main">
        <BoxLogin />
      </div>
    </div>
  );
}
