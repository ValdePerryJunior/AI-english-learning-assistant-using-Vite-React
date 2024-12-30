import { useState, useEffect } from "react";
import { useTheme } from "../../context/Themecontext";
import { sidebarTheme } from "../../context/Sidebarcontext";
import { Sapling } from "@saplingai/sapling-js/observer";
import Header from "../../components/header";
import Sidebar from "../../components/aside/aside";
import GrammarIcon from "../../assets/Grammar_icon.png";
import Heading from "../../components/grammarcheckerpage/heading";
import MagicalArea from "../../components/grammarcheckerpage/magicalarea";

function GrammarCheckerPage() {
  const [text, setText] = useState("");
  const {isDark, toggleTheme} = useTheme();
  const {isSidebarOpen, toggleSidebar} = sidebarTheme();

  const apiKey = import.meta.env.VITE_GRAMMAR_CHECK_API_KEY;

  useEffect(() => {
    Sapling.init({
      key: apiKey,
      endpointHostname: 'https://api.sapling.ai',
      editPathname: '/api/v1/edits',
      statusBadge: true,
      mode: 'dev', // Use 'prod' for production
    });

    const editor = document.getElementById('editor');
    if (editor) {
      Sapling.observe(editor);
    }
  }, [text]);

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-[#444444] text-white" : "bg-gray-100"}`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Sidebar isDark={isDark} isSidebarOpen={isSidebarOpen} />

      <main
        className={`pt-20 p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}
      >
        <div className="max-w-4xl mx-auto">
          <Heading Icon={GrammarIcon} isDark={isDark} title="Grammar Checker" 
            note="Feel free to check your grammar! Exported files are saved in Downloads folder." />
        </div>
        <div className="max-w-6xl mx-auto">
          <MagicalArea isDark={isDark} text={text} setText={setText} />
        </div>
      </main>
    </div>
  );
}

export default GrammarCheckerPage;