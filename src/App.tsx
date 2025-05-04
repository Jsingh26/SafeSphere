import SafePath from './components/SafePath';
import ThankYou from './components/ThankYou';
import AboutUs from './components/AboutUs';
import RoutePage from './components/RoutePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<SafePath />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
