import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* ":name" adalah parameter dinamis untuk nama negara */}
            <Route path="/country/:name" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;