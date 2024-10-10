import AppDownload from './components/home/app-download';
import CommunitySection from './components/home/community';
import RegulationSection from './components/home/regulation';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <RegulationSection />
      <CommunitySection />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
