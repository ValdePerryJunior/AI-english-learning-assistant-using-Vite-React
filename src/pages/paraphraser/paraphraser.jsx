import { useTheme } from "../../context/Themecontext";
import { sidebarTheme } from "../../context/Sidebarcontext";
import Header from "../../components/header";
import Sidebar from "../../components/aside/aside";
import Heading from "../../components/grammarcheckerpage/heading";
import ParaphraserIcon from "../../assets/ParaPhrase_icon.png";
import CoreSection from "../../components/paraphraser/coresection";

function Paraphraser() {

  const {isDark, toggleTheme} = useTheme();
  const {isSidebarOpen, toggleSidebar} = sidebarTheme();

  return(
    <div
      className={`min-h-screen ${isDark ? "bg-[#444444] text-white" : "bg-gray-100"}`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Sidebar isDark={isDark} isSidebarOpen={isSidebarOpen} />

      <main
        className={`pt-20 p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}
      >
        <div className="max-w-4xl mx-auto">
          <Heading Icon={ParaphraserIcon} isDark={isDark} title="Paraphraser" 
            note="Refine your sentence and get appropriate title!" />
          <div className="flex justify-center">
            <span className="font-semibold text-red-500">Caution: &nbsp; </span>
            <span>Paragraph should not exceed 160 characters.</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <CoreSection isDark={isDark} />
        </div>
      </main>
    </div>
  )
}

export default Paraphraser;