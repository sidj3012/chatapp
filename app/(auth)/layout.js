import { Inter } from "next/font/google";

import "../globals.css";
import ToasterContext from "@components/ToasterContext";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-Hato",
  description: "Chat App built by Siddharth Jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color4`}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}