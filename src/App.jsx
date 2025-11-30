import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro';

// pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'
// import PageNotFound from './pages/PageNotFound';
// import ProjectIndex from '@/pages/projects/Index';

export default function App() {

  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(localStorage.getItem('dark') === 'true');

  useEffect(() => {
    console.log("Dark Mode:", isDark);

    document.documentElement.classList.toggle('dark', isDark);

    localStorage.setItem('dark', isDark);

  }, [isDark]);

  useEffect(() => {
    const sections = ['intro', 'projects', 'contact'];
    const targets = sections.map(section => document.getElementById(section));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log(entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px 0px 0px' });

    //targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()

  }, []);

  const toggleTheme = () => setIsDark(currentMode => !currentMode);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar activeSection={activeSection} />
      <main className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-16'>
        <Intro />
    
       
        
      </main>

      <div className='fixed bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none'></div>
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />

    //     <Route path='/projects' element={<ProjectIndex />} />


    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>

    //   <Navbar />

    // </Router>
  );
}