import "./App.scss";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JobCategories from "./components/JobCategories";
import LoginSection from "./components/LoginSection";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <div className="main-content">
          <Hero />
          <div className="content">
            <JobCategories />
            <AppSection />
            <LoginSection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
