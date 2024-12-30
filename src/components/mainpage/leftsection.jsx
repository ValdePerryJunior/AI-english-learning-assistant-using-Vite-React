import { useNavigate } from "react-router";

const LeftSection = ({isDark, isHovered, setIsHovered, isSignedIn}) => {

  const navigate = useNavigate();

  const handleStart = () => {
    if(isSignedIn) {
      navigate('/grammarChecker');
    } else {
      navigate('/sign-in');
    }
  }

  return(
    <div className="flex-1 space-y-6">
      <h1
        className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#2F80ED]"} font-poppins`}
      >
        EnglishPro AI
      </h1>
      <p
        className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} font-roboto`}
      >
        Your AI-powered English learning companion
      </p>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleStart}
        className={`${
          isHovered ? "bg-[#2F80ED]" : "bg-[#56CCF2]"
        } text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 font-poppins flex w-full justify-center items-center gap-2`}
      >
        <i className="fas fa-rocket"></i>
        { !isSignedIn ? "Get Started" : "Start Learning English" }
      </button>
    </div>
  )
}

export default LeftSection;