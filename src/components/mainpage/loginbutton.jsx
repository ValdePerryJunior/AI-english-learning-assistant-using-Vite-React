const LoginButton = ({isLoginHovered, setIsLoginHovered, onClick}) => {
  return(
    <button
      onMouseEnter={() => setIsLoginHovered(true)}
      onMouseLeave={() => setIsLoginHovered(false)}
      onClick={onClick}
      className={`${
        isLoginHovered ? "bg-[#2F80ED]" : "bg-[#56CCF2]"
      } text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 font-poppins flex items-center gap-2`}
    >
      <i className="fas fa-sign-in-alt"></i>
      Login
    </button>
  )
}

export default LoginButton;