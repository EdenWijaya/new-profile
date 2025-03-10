'use client'
import About from "./components/About";
import Header from "./components/Header";
import Kontak from "./components/Kontak";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Project />
    <Kontak />
    </>
  );
}
