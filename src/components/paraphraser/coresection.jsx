import { useState } from "react";
import { handleFileChange, handleExport } from "../../utils/utils";
import { LoaderCircle } from "lucide-react";

const CoreSection = ({isDark}) => {

  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_GRAMMAR_CHECK_API_KEY;

  const handleParaphrase = async(text) => {
    setLoading(true);
    console.log(text)
    try{
      const response = await fetch('https://api.sapling.ai/api/v1/rephrase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: apiKey,
          text: text,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.results) && data.results.length > 0) {
          setResult(data.results[0].replacement);
        } else {
          console.error('No paraphrased text found in the response.');
        }
      } else {
        console.error('Error:', response.statusText);
        
      console.log(response)
      }
    } catch(error){
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return(
      <div
        className={`${isDark ? "bg-[#333333] text-white" : "bg-white"} rounded-2xl shadow-xl p-8 mt-10`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <i className="fas fa-sync text-3xl text-[#2F80ED]"></i>
            <span
              className={`font-poppins font-bold text-2xl ml-3 ${isDark ? "text-white" : "text-[#2F80ED]"}`}
            >
              Magical Rewriting
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <span>Characters: </span>
            <span className={`${text.length>160 ? "text-red-500" : "text-black"}`}>{text.length || "0"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <textarea
                className={`w-full h-80 p-4 rounded-lg border ${isDark ? "bg-[#404040] border-gray-600" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-[#2F80ED]`}
                placeholder="Enter your text here to paraphrase..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex gap-2 w-full">
              <input
                type="file"
                accept=".doc,.docx,.txt"
                onChange={(e) => {handleFileChange(e)(setText)}}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className={`bg-green-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer flex items-center ${text ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
              >
                <i className="fas fa-file-import mr-2"></i>
                Import
              </label>
                <button
                  onClick={() => setText("")}
                  disabled={!text}
                  className={`${!text ? "opacity-50 cursro-not-allowed" : "hover:bg-red-600"} bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
                >
                  <i className="fas fa-trash"></i>
                  Clear
                </button>
                <button
                  disabled={!text || (text.length>160)}
                  onClick={() => handleParaphrase(text)}
                  className={`${(!text || loading || (text.length>160)) ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2666BD]"} bg-[#2F80ED] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 flex-1`}
                >
                  {
                    loading && <LoaderCircle className="animate-spin"/>
                  }
                  {
                    !loading ? "Paraphrase" : "Processing..." 
                  }
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div
                className={`w-full h-80 p-4 rounded-lg border ${isDark ? "bg-[#404040] border-gray-600" : "bg-gray-100 border-gray-300"}`}
              >
                {
                  result ? 
                  (
                    result
                  ) :
                  (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      <p>Paraphrased text will appear here</p>
                    </div>
                  )
                }
              </div>
              <button
                onClick={() => {handleExport(text, "paraphrased-text")}}
                disabled={!text}
                className={`bg-[#2F80ED] text-white font-bold py-2 px-4 rounded-lg ${!result ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2666BD]"}`}
              >
                <i className="fas fa-file-export mr-2"></i>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CoreSection;