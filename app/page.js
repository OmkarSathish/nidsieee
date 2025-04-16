'use client';

import BlogList from "../Components/BlogList"; // Try relative import
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
