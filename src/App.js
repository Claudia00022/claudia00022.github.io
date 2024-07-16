//Components
import { Routes, Route } from "react-router-dom";
import Rectangle from "./components/rectangle";
import Loading from "./components/loading/loading";
import Contact from "./pages/contact";
import Art from "./pages/art";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import NavBar from "./components/nav";

import Name from "./components/name/name";

import { useEffect, useState, Suspense, lazy} from "react";

const LazyRectangle = lazy(()=> import('./components/rectangle'));

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (

    <div className="App">
     
      
          <Name />
          <NavBar />
          <Suspense fallback = {<Loading />}>
          <LazyRectangle />
          </Suspense>

      
 
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/art" element={<Art />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        
    </div>
  
  );
}

export default App;
