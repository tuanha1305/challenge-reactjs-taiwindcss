import { ReactNode, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

interface DefaultLayoutProps {
    children: ReactNode;
  }

  const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
      <div className="container mx-auto">
        <Header />
        <Navigation />
        <main className="py-4">{children}</main>
        <Footer />
      </div>
    );
  };

  export default DefaultLayoutProps;