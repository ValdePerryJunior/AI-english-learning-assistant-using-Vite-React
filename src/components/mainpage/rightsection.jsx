const RightSection = ({isDark}) => {
  return(
    <div className="flex-1 relative">
      <div className="flex items-center justify-center absolute -top-4 -left-4 bg-[#56CCF2] text-white p-4 rounded-full w-[60px] h-[60px] z-[1]">
        <i className="fas fa-robot text-2xl"></i>
      </div>
      <div
        className={`${isDark ? "bg-[#404040]" : "bg-gray-100"} rounded-2xl p-6 relative`}
      >
        <div className="ml-10 flex items-center gap-4 mb-4">
          <i className="fas fa-check text-green-500 text-xl"></i>
          <span className="font-roboto">Grammar Analysis</span>
        </div>
        <div className="ml-10 flex items-center gap-4 mb-4">
          <i className="fas fa-exchange-alt text-blue-500 text-xl"></i>
          <span className="font-roboto">Smart Paraphrasing</span>
        </div>
        <div className="ml-10 flex items-center gap-4">
          <i className="fas fa-volume-up text-purple-500 text-xl"></i>
          <span className="font-roboto">Pronunciation Guide</span>
        </div>
        <div className="flex items-center justify-center absolute -bottom-4 -right-4 bg-[#2F80ED] text-white p-4 rounded-full w-[60px] h-[60px]">
          <i className="fas fa-microphone-alt text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default RightSection;