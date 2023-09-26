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
      <div>
        <Navigation />
        <div className="main-content">
          <Hero />
          <div className="content">
            <JobCategories />
            <AppSection />
            <div className="actions-section">
              <ActionsContainer />
              <LoginContainer />
            </div>
          </div>
        </div>
        <PromotionSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
