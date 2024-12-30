import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AsideItem from "./asideitem";
import GrammarIcon from '../../assets/Grammar_icon.png';
import HomeIcon from '../../assets/Home_icon.png';
import ParaphraserIcon from '../../assets/ParaPhrase_icon.png';
import PronounceIcon from '../../assets/Pronounce_icon.png';

const Sidebar = ({isDark, isSidebarOpen}) => {

  const navigate = useNavigate();
  const [GCActive, setGCActive] = useState(false);
  const [PActive, setPActive] = useState(false);
  const [PCActive, setPCActive] = useState(false);
  const url = window.location.pathname;

  const handleHome = () => {
    navigate('/');
  }

  const handleGrammar = () => {
    if(url !== '/grammarChecker') navigate('/grammarChecker');
  }

  const handleParaphrase = () => {
    if(url !== '/paraphraser') navigate('/paraphraser');
  }

  const handlePronounciation = () => {
    if(url !== '/pronunciation') navigate('/pronunciation')
  }

  useEffect(() => {
    activeInitialization();
  }, []);

  const activeInitialization = () => {
    if(url === "/grammarChecker"){
      setGCActive(true);
    } else setGCActive(false);
    if(url === "/paraphraser"){
      setPActive(true);
    } else setPActive(false);
    if(url === "/pronunciation"){
      setPCActive(true);
    } else setPCActive(false);
  }

  return(
    <aside
      className={`${isDark ? "bg-[#383838]" : "bg-white"} fixed left-0 top-16 h-[calc(100vh-4rem)] shadow-lg transition-all duration-300 ${isSidebarOpen ? "w-80" : "w-20"} overflow-hidden`}
    >
      <nav className="">
        <div className="">
          <AsideItem IconSrc={HomeIcon} isSidebarOpen={isSidebarOpen} name="Home" onClick={handleHome} isDark={isDark}/>
          <AsideItem IconSrc={GrammarIcon} isSidebarOpen={isSidebarOpen} Active={GCActive} name="Grammar Checker" onClick={handleGrammar} isDark={isDark}/>
          <AsideItem IconSrc={ParaphraserIcon} isSidebarOpen={isSidebarOpen} Active={PActive} name="Paraphraser" onClick={handleParaphrase} isDark={isDark}/>
          <AsideItem IconSrc={PronounceIcon} isSidebarOpen={isSidebarOpen} Active={PCActive} name="Pronunciation Accessment" onClick={handlePronounciation} isDark={isDark}/>
        </div>
      </nav>
    </aside>
  )
};

export default Sidebar;