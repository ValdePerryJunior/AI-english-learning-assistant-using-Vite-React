import { useState } from "react";
import { useTheme } from "../../context/Themecontext";
import { sidebarTheme } from "../../context/Sidebarcontext";
import Header from "../../components/header";
import Sidebar from "../../components/aside/aside";
import Heading from "../../components/grammarcheckerpage/heading";
import ShortHeading from "../../components/pronunciation/shortHeading";
import RandomArea from "../../components/pronunciation/randomarea";
import UserVoiceArea from "../../components/pronunciation/uservoicearea";
import PronunciationIcon from "../../assets/Pronounce_icon.png";
function Pronunciation() {
  const {isDark, toggleTheme} = useTheme();
  const [paragraph, setParagraph] = useState('');
  const {isSidebarOpen, toggleSidebar} = sidebarTheme();
  const [score, setScore] = useState('');

  const FeedbackMessage = ({ score }) => {
    let message = '';
    let color = '';
  
    if (score > 98) {
      message = score + '% Excellent!';
      color = 'green';
    } else if (score > 90) {
      message = score + '% Great!';
      color = 'blue';
    } else if (score > 70) {
      message = score + '% Good! Keep going!';
      color = 'orange';
    } else {
      message = score + '% You need to practice a lot';
      color = 'red'; 
    }
  
    const messageStyle = {
      color: color,
      fontWeight: 'bold',
      fontSize: '1.2em',
    };
  
    return <div style={messageStyle}>{message}</div>;
  };
  

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
          <Heading Icon={PronunciationIcon} isDark={isDark} title="Pronunciation Accessment" 
            note="Check how accurate your pronunciation is!" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className={`${isDark ? "bg-[#333333] text-white" : "bg-white"} rounded-2xl shadow-xl p-8 mt-20`}>
            <ShortHeading isDark={isDark}/>
            <div className="flex flex-col space-y-6">
              {
                score &&
                <FeedbackMessage score={score} />
              }
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RandomArea isDark={isDark} paragraph={paragraph} setParagraph={setParagraph} setScore={setScore}/>
                <UserVoiceArea isDark={isDark} paragraph={paragraph} setScore={setScore}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Pronunciation;