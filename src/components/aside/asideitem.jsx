const AsideItem = ({IconSrc, isSidebarOpen, Active, name, onClick, isDark}) => {
  return(
    <button 
      className={`w-full ${isDark ? "text-white" : "text-black"} text-lg font-semibold 
             ${isDark ? "hover:bg-[#2A2A2A]" : "hover:bg-blue-300"}
            ${Active && !isDark && "bg-blue-200"} ${Active && isDark && "bg-[#1F1F1F]"} 
            flex items-center justify-start py-3 px-4 
            transition duration-200 ease-in-out rounded-lg`}
      onClick={onClick}
    >
      <img src={IconSrc} className="w-12 h-12" alt="Icon"/>
      <span className={`font-roboto transition-opacity duration-500 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>{name}</span>
    </button>
  )
};

export default AsideItem;