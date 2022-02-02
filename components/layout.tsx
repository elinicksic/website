import Head from "next/head"
import { Component } from "react"
import Navbar from "./navbar"

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {
  return (
    <>
      <Head>
        <title>Eli Nicksic</title>
        <meta
          name="description"
          content="Hello, I'm Eli"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}