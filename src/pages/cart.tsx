import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

import styles from '@/styles/Cart.module.css'

export default function cart() {
  return (
    <div>
        <Head>
            <title>Cart</title>
            <meta name="keywords" content='cart, shopping'></meta>
        </Head>
        <h1 className={styles.teste}>My Carts</h1>
        <Link href="/">Go Back</Link>
    </div>
  )
}
