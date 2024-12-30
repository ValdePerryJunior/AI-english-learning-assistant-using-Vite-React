import { SignUp } from '@clerk/clerk-react';
import { useTheme } from "../../context/Themecontext";
import Header from '../../components/header';

function Signup(){

  const { isDark, toggleTheme } = useTheme();

  return(
    <div className='flex flex-col h-screen w-screen bg-gray-100'>
      <Header isDark={isDark} toggleTheme={toggleTheme}/>
      <div className={`${isDark ? "bg-[#444444]" : "bg-gray-100"} h-full w-full flex justify-center items-center`}>
        <SignUp path="/sign-up" routing="path" forceRedirectUrl="/sign-in"/>
      </div>
    </div>
  )
}

export default Signup;