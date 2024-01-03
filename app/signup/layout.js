import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TubeLinkExtractor",
  description: "Get all YouTube Links in a Youtube playlist",
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}
