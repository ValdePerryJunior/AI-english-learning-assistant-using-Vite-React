const Heading = ({Icon, isDark, title, note}) => {
  return(
    <>
      <div className="flex items-center justify-center mb-8">
        <span style={{backgroundImage: `url(${Icon})`, backgroundSize: "cover"}} className="h-[100px] w-[100px]"></span>
        <h1 className={`${isDark ? "text-white" : "text-[#333]"} text-4xl font-bold font-poppins`}>
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-center mb-4">
        <span className="text-xl font-semibold">
          Note: &nbsp;
        </span>
        <span className="text-xl font-normal">
          {note}
        </span>
      </div>
    </>
  )
}

export default Heading;