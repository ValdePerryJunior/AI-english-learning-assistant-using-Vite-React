import { handleFileChange, handleExport } from "../../utils/utils";

const MagicalArea = ({isDark, text, setText}) => {
  return(
    <div className={`${isDark ? "bg-[#333333] text-white" : "bg-white"} rounded-2xl shadow-2xl p-6 md:p-8 mt-16`}>
      <div className="flex items-center gap-2 mb-6">
        <i className="fas fa-spell-check text-4xl text-[#2F80ED]"></i>
        <span className={`font-poppins font-bold text-2xl ml-3 ${isDark ? "text-white" : "text-[#2F80ED]"}`}>
          Magical Checker
        </span>
      </div>
      <div className="mb-6">
        <textarea
          id="editor"
          className={`${isDark ? "bg-[#404040] border-gray-600 text-white" : "bg-white border-gray-300 text-black"} w-full h-72 p-4 border-2 border-gray-200 rounded-xl focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] focus:outline-none font-roboto resize-none`}
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className={`${isDark ? "text-white" : "text-gray-600"} font-roboto`}>
          <i className="fas fa-text-height mr-2"></i>
          Words: {text.split(/\s+/).filter(Boolean).length}
        </div>
        <div className="flex gap-4">
          <input
            type="file"
            accept=".doc,.docx,.txt"
            onChange={(e) => {handleFileChange(e)(setText)}}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer flex items-center ${text ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2666BD]"}`}
          >
            <i className="fas fa-file-import mr-2"></i>
            Import
          </label>
          <button
            onClick={() => {handleExport(text, "checked-text")}}
            disabled={!text}
            className={`bg-[#2F80ED] text-white font-bold py-2 px-4 rounded-lg ${!text ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2666BD]"}`}
          >
            <i className="fas fa-file-export mr-2"></i>
            Export
          </button>
          <button
            onClick={() => setText("")}
            disabled={!text}
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded-lg ${!text ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"}`}
          >
            <i className="fas fa-trash mr-2"></i>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
};

export default MagicalArea;