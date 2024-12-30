import useSpeechToText from "react-hook-speech-to-text";
import { useEffect, useState } from "react";
import { distance } from "fastest-levenshtein";



const UserVoiceArea = ({isDark, paragraph, setScore}) => {

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    googleApiKey: apiKey,
    useLegacyResults: false,
    timeout: 100000,  
  });

  const [allResults, setAllResults] = useState("")
  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  useEffect(() => {
    if(results?.length > 0) {
      console.log(results);
      setAllResults((prev) => {
        return prev + results?.[results.length - 1].transcript
      })
    }
  }, [results])

  const Similarity = () => {
    const levenshteinDistance = distance(paragraph, allResults);
    const maxLength = Math.max(paragraph.length, allResults.length);
    const similarity = ((maxLength-levenshteinDistance)/maxLength).toFixed(4);
    setScore(similarity*100);
  };

  return(
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <textarea
          className={`w-full h-60 p-4 rounded-lg border ${isDark ? "bg-[#404040] border-gray-600" : "bg-white border-gray-300"} focus:outline-none focus:ring-2 focus:ring-[#2F80ED]`}
          placeholder="User voice will display here..."
          value={`${allResults}${interimResult || ''}`}
          readOnly
        />
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (isRecording)
                stopSpeechToText()
              else {
                startSpeechToText()
                setAllResults('')
              }
            }}
            className={`flex-1 ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-[#2F80ED] hover:bg-[#56CCF2]"} text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
          <button 
            onClick={Similarity}
            className={`${isRecording ? "opacity-50 cursro-not-allowed" : "hover:bg-green-600"} flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserVoiceArea;
