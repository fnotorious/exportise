import './App.css';
import { useEffect , useState , useCallback } from 'react';
import { useLocation , Route , Routes } from 'react-router-dom';
import FrontPage from './components/pages/front-page.js'
import LoadingScreen from './components/pages/loading-screen';

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = useCallback((newValue) => {
    setDarkMode(newValue);
  }, []);

  useEffect(() => {
    const page = location.pathname.substr(1);
    setCurrentPage(page);
  }, [location]);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<FrontPage currentPage={currentPage} handleChange={handleChange} darkMode={darkMode} />} />
        <Route path="/loading" element={<LoadingScreen currentPage={currentPage} darkMode={darkMode} />} />
      </Routes>
    </div>
  )
}

export default App;
