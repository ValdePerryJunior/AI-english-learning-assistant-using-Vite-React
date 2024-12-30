import { UserButton } from "@clerk/clerk-react";

const Header = ( {isDark, toggleTheme, isSidebarOpen, toggleSidebar} ) => {
  return(
    <header className={`${isDark ? "bg-[#333333] text-white" : "bg-white"} fixed top-0 left-0 right-0  shadow-md z-50 h-16`}>
      <div className="flex justify-between items-center px-4 h-full">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`${isDark ? "text-white" : "text-gray-600"} hover:text-[#2F80ED]`}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          <div className="flex items-center gap-2">
            <i className="fas fa-graduation-cap text-3xl text-[#2F80ED]"></i>
            <span
              className={`font-poppins font-bold text-2xl ${isDark ? "text-white" : "text-[#2F80ED]"}`}
            >
              EnglishPro
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <i
              className={`fas ${isDark ? "fa-sun text-yellow-400" : "fa-moon text-gray-500"}`}
            ></i>
          </button>
          <UserButton />
        </div>
      </div>
    </header>
  )
}

export default Header;