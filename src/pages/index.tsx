import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Image from "next/image";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>hello World Next.js</h1>
      <Image src="/images/android.png" width={100} height={100} alt="android" />
    </div>
  );
}
