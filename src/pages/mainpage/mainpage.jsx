import { useState } from "react";
import { useNavigate } from "react-router";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { useTheme } from "../../context/Themecontext";
import LoginButton from "../../components/mainpage/loginbutton";
import SignupButton from "../../components/mainpage/signupbutton";
import ThemeButton from "../../components/mainpage/themebutton";
import LeftSection from "../../components/mainpage/leftsection";
import RightSection from "../../components/mainpage/rightsection";
import Tools from "../../components/mainpage/tools";
import Logo from "../../components/mainpage/logo";

function MainPage() {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);
  const {isDark, toggleTheme} = useTheme();
  const { isSignedIn, user } = useUser();

  const handleSignup = () => {
    navigate('/sign-up');
  }

  const handleSignin = () => {
    navigate('/sign-in');
  };
 
  return (
    <HelmetProvider>
      <div
        className={`h-[100vh] w-[100vw] bg-gradient-to-br ${isDark ? "from-[#1a1a1a] to-[#2d2d2d]" : "from-[#2F80ED] to-[#56CCF2]"} flex items-center justify-center p-4`}
      >
        <div
          className={`${isDark ? "bg-[#333333] text-white" : "bg-white"} rounded-2xl shadow-2xl w-full max-w-4xl p-8 mx-4`}
        >
          <div className="flex justify-between items-center mb-8">
            <Logo isDark={isDark} />
            <div className="flex items-center gap-4">
              <ThemeButton isDark={isDark} toggleTheme={toggleTheme} />
              {
                !user ? (
                  <>
                    <SignupButton isSignupHovered={isSignupHovered} setIsSignupHovered={setIsSignupHovered} onClick={handleSignup}/>
                    <LoginButton isLoginHovered={isLoginHovered} setIsLoginHovered={setIsLoginHovered} onClick={handleSignin} />
                  </>
                ) :
                <UserButton />
              }
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <LeftSection isDark={isDark} isHovered={isHovered} setIsHovered={setIsHovered} isSignedIn={isSignedIn} />
            <RightSection isDark={isDark} />
          </div>
          <Tools isDark={isDark} isSignedIn={isSignedIn}/>
        </div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
        </Helmet>
      </div>
    </HelmetProvider>
  );
}

export default MainPage;