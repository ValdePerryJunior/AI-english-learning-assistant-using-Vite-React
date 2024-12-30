import GrammarSrc from '../../assets/Grammar.png';
import ParaphraseSrc from '../../assets/Paraphrase.png';
import PronounceSrc from '../../assets/Pronounce.png';
import ToolItem from './toolitem';

const tools = [
  {
    src: GrammarSrc,
    icon: "spell-check",
    title: "Grammar Checker",
    desc: "Get instant grammar and writing corrections",
  },
  {
    src: ParaphraseSrc,
    icon: "sync",
    title: "Paraphraser",
    desc: "Rewrite sentences in different ways",
  },
  {
    src: PronounceSrc,
    icon: "microphone",
    title: "Pronunciation Accessment",
    desc: "Get feedback on your pronunciation",
  },
];

const Tools = ({ isDark, isSignedIn }) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {tools.map((item, i) => (
        <ToolItem item={item} key={i} isDark={isDark} isSignedIn={isSignedIn}/>
      ))}
    </div>
  );
};

export default Tools;