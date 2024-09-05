import gsap from "gsap"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import Loading from "./Components/SubComponents/Loading";


function App() {
  const tl = gsap.timeline();

  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  
  


  return (
    <>
      <div className=" bg-slate-100 font-Moderustic w-full ">
        <Header tl={tl} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
