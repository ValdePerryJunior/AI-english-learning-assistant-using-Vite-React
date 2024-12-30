const SignupButton = ({isSignupHovered, setIsSignupHovered, onClick}) => {
  return(
    <button
      onMouseEnter={() => setIsSignupHovered(true)}
      onMouseLeave={() => setIsSignupHovered(false)}
      onClick={onClick}
      className={`${
        isSignupHovered ? "bg-[#2F80ED]" : "bg-[#56CCF2]"
      } text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 font-poppins flex items-center gap-2`}
    >
      <i className="fas fa-user-plus"></i>
      Sign Up
    </button>
  )
}

export default SignupButton;