import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import style from "../styles/global";

const layout: React.FC = props => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Top | meet_awesome_animals</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
      {style}
    </>
  );
};

export default layout;
