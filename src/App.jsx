import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PartnerPage from './pages/PartnerPage';
import Contact from './pages/Contact';
import UseCases from './pages/UseCases';
import FAQ from './pages/FAQ';
import ScrollToTop from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();

  const partners = {
    agriplast: {
      title: "Agriplast",
      description: t('partners.agriplast.description'),
      features: t('partners.agriplast.features', { returnObjects: true }),
      theme: "dark",
      color: "#16a34a",
      products: t('partners.agriplast.products', { returnObjects: true })
    },
    fasal: {
      title: "Fasal",
      description: t('partners.fasal.description'),
      features: t('partners.fasal.features', { returnObjects: true }),
      theme: "dark",
      color: "#f59e0b",
      products: t('partners.fasal.products', { returnObjects: true })
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agriplast" element={<PartnerPage {...partners.agriplast} />} />
            <Route path="/fasal" element={<PartnerPage {...partners.fasal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
