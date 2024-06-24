import React  from "react";
import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Frame } from "@/components/Frame";

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
      </body>
    </html>
  );
};

export default Layout;
