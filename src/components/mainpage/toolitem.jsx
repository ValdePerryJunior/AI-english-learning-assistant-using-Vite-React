import { useState } from 'react';
import { useNavigate } from 'react-router';

const ToolItem = ({ item, isDark, isSignedIn }) => {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (title) => {
    if(!isSignedIn){
      navigate('/sign-in');
    } else{
      if(title === "Grammar Checker") navigate('/grammarChecker');
      if(title === "Paraphraser") navigate('/paraphraser');
      if(title === "Pronunciation Accessment") navigate('/pronunciation');
    }
  }

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleClick(item.title)}
      className="relative p-0 h-[200px] w-[250px] rounded-md overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform ease-in-out duration-300 ${
          isHovered ? 'blur-0 scale-100' : 'blur-lg scale-100'
        }`}
        style={{
          backgroundImage: `url('${item.src}')`,
        }}
      >
      </div>

      {!isHovered && (
        <div className={`${isDark ? "bg-black/60" : "bg-gray/50"} absolute inset-0 flex flex-col justify-center items-center text-center`}>
          <i
            className={`fas fa-${item.icon} text-[#2F80ED] text-3xl`}
            aria-label={item.title}
          ></i>
          <h3 className="font-poppins font-semibold mt-4 text-xl text-white">
            {item.title}
          </h3>
          <p
            className={`${
              isDark ? 'text-gray-300' : 'text-gray-200'
            } mt-2 font-roboto text-lg`}
          >
            {item.desc}
          </p>
        </div>
      )}

      {/* Lens Effect */}
      {isHovered && (
        <>
          {/* Center Plus Mark */}
          <div className="absolute top-1/2 left-1/2 w-[2px] h-[20px] bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[20px] h-[2px] bg-white transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Top Left Corner Mark */}
          <div className="absolute top-[12px] left-[14px] w-[2px] h-[14px] bg-white -translate-x-full"></div>
          <div className="absolute top-[14px] left-[12px] w-[14px] h-[2px] bg-white -translate-y-full"></div>

          {/* Top Right Corner Mark */}
          <div className="absolute top-[12px] right-[10px] w-[2px] h-[14px] bg-white -translate-x-full"></div>
          <div className="absolute top-[14px] right-[12px] w-[14px] h-[2px] bg-white -translate-y-full"></div>

          {/* Bottom Left Corner Mark */}
          <div className="absolute bottom-[12px] left-[14px] w-[2px] h-[14px] bg-white -translate-x-full"></div>
          <div className="absolute bottom-[12px] left-[12px] w-[14px] h-[2px] bg-white"></div>

          {/* Bottom Right Corner Mark */}
          <div className="absolute bottom-[12px] right-[10px] w-[2px] h-[14px] bg-white -translate-x-full"></div>
          <div className="absolute bottom-[10px] right-[12px] w-[14px] h-[2px] bg-white -translate-y-full"></div>
        </>
      )}
    </button>
  );
};

export default ToolItem;