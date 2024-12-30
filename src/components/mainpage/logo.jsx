const Logo = ({isDark}) => {
  return(
    <div className="flex items-center gap-2">
      <i className="fas fa-graduation-cap text-3xl text-[#2F80ED]"></i>
      <span
        className={`font-poppins font-bold text-2xl ${isDark ? "text-white" : "text-[#2F80ED]"}`}
      >
        EnglishPro
      </span>
    </div>
  )
}

export default Logo;