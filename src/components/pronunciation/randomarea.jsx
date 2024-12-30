import { useState } from "react";
import { handleGenerate } from "../../utils/scraper";
import { LoaderCircle } from "lucide-react";

const RandomArea = ({isDark, paragraph, setParagraph, setScore}) => {

  const [loading, setLoading] = useState('');

  return(
    <div className="flex flex-col space-y-4">
      <div
        className={`w-full h-60 p-4 rounded-lg overflow-auto border ${isDark ? "bg-[#404040] border-gray-600" : "bg-gray-100 border-gray-300"}`}
      >
        {
          paragraph ? 
          (
            paragraph
          ) :
          (
            <div className="h-full flex items-center justify-center text-gray-500">
              <p>Paraphrased text will appear here</p>
            </div>
          )
        }
      </div>
      <button
        disabled={loading}
        className={`${(loading) ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2666BD]"} bg-[#2F80ED] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 flex-1`}
        onClick={() => handleGenerate("paragraph", setLoading, setParagraph, setScore)}
      >
        {
          loading && <LoaderCircle className="animate-spin"/>
        }
        {
          !loading ? "Generate Paragraph" : "Generate..." 
        }
      </button>
    </div>
  )
}

export default RandomArea;