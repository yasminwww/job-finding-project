import "./App.scss";
import ActionsContainer from "./components/ActionsContainer";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JobCategories from "./components/JobCategories";
import LoginContainer from "./components/LoginContainer";
import Navigation from "./components/Navigation";
import PromotionSection from "./components/PromotionSection";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Hero />
        <div className="content">
          <JobCategories />
          <AppSection />
          <div className="actions-section" id="resources">
            <ActionsContainer />
            <LoginContainer />
          </div>
        </div>
      </main>
      <PromotionSection />
      <Footer />
    </>
  );
}

export default App;
