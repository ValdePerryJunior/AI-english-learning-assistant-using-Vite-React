const ThemeButton = ({isDark, toggleTheme}) => {
  return(
    <button
      onClick={toggleTheme}
      className={`fas ${isDark ? "fa-sun text-yellow-400" : "fa-moon text-gray-500"}`}
    >
    </button>
  )
}

export default ThemeButton;