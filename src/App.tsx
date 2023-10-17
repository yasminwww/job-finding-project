import "./App.scss";
import ActionsContainer from "./components/features/ActionsContainer";
import AppSection from "./components/features/AppSection";
import Footer from "./components/features/Footer";
import Hero from "./components/features/Hero";
import JobCategories from "./components/features/JobCategories";
import LoginContainer from "./components/features/LoginContainer";
import Navigation from "./components/features/Navigation";
import PromotionSection from "./components/features/PromotionSection";

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
