import React  from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

const Layout = ({ children }) => {

  return (
    <html>
      <head>
        <title>Lunex</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main> {children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default Layout;
