import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const DefaultLayout: React.FC = ({ children }) => {
    return (
      <div className="container mx-auto">
        <Header />
        <Navigation />
        <main className="py-4">{children}</main>
        <Footer />
      </div>
    );
  };