import Link from "next/link";
import React from "react";

import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/todos">Todos</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/cart">cart</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
    </ul>
  );
}
