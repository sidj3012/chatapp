import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import TopBar from "@components/TopBar";

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
          <TopBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
