const ShortHeading = ({isDark}) => {
  return(
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <i className="fas fa-microphone text-3xl text-[#2F80ED]"></i>
        <span
          className={`font-poppins font-bold text-2xl ml-3 ${isDark ? "text-white" : "text-[#2F80ED]"}`}
        >
          Magical Accessment
        </span>
      </div>
    </div>
  )
}

export default ShortHeading;