import { SignIn } from '@clerk/clerk-react';
import Header from '../../components/header';
import { useTheme } from "../../context/Themecontext";
import { HelmetProvider, Helmet } from "react-helmet-async";

function Signin(){

  const {isDark, toggleTheme} = useTheme();

  return(
    <HelmetProvider>
      <div className="bg-gray-100 flex flex-col h-screen w-screen">
        <Header isDark={isDark} toggleTheme={toggleTheme}/>
        <div className={`${isDark ? "bg-[#444444]" : "bg-gray-100"} flex justify-center items-center h-[100%] w-[100%]`}>
          <SignIn path="/sign-in" routing="path" forceRedirectUrl="/grammarChecker"/>
        </div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
        </Helmet>
      </div>
    </HelmetProvider>
  )
}

export default Signin;