import Image from "next/image";
import { Inter } from "next/font/google";
import Onboarding from "./onboarding";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Onboarding />
  );
}
