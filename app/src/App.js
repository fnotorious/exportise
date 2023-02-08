import './App.css';
import { useEffect , useState , useCallback } from 'react';
import { useLocation , Route , Routes } from 'react-router-dom';
import FrontPage from './components/pages/front-page.js'
import LoadingScreen from './components/pages/loading-screen';
import InfoPage from './components/pages/info-page';

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [cntrySelectOne, setCntrySelectOne] = useState();
  const [cntrySelectTwo, setCntrySelectTwo] = useState();

  const handleChange = useCallback((darkMode) => {
    setDarkMode(darkMode);
  }, []);

  const handleSelection = useCallback((cntrySelectOne, cntrySelectTwo) => {
    setCntrySelectOne(cntrySelectOne);
    setCntrySelectTwo(cntrySelectTwo);
  }, []);

  useEffect(() => {
    const page = location.pathname.substr(1);
    setCurrentPage(page);
  }, [location]);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<FrontPage currentPage={currentPage} handleChange={handleChange} handleSelection={handleSelection} darkMode={darkMode} />} />
        <Route path="/loading" element={<LoadingScreen currentPage={currentPage} darkMode={darkMode} countryOne={cntrySelectOne} countryTwo={cntrySelectTwo} />} />
        <Route path="/info" element={<InfoPage currentPage={currentPage} darkMode={darkMode} countryOne={cntrySelectOne} countryTwo={cntrySelectTwo} />} />
      </Routes>
    </div>
  )
}

export default App;
