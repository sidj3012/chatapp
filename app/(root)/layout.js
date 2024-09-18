import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import SideBar from "@components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatapp",
  description: "Chatapp built by Siddharth Jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-2`}>
        <Provider>
          <SideBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
