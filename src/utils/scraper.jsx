export const handleGenerate = async (target, setLoading, setParagraph, setScore) => {
  setLoading(true);
  setScore("");
  try {
    const response = await fetch(`https://corsproxy.io/?url=https://randomword.com/${target}`);
    if(response.ok){
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const generatedParagraph = doc.querySelector('#random_word_definition')?.textContent.trim();
      setParagraph(generatedParagraph);
    } else console.error(`Request failed with status ${response.status}`);
  } catch (error) {
    console.error(`Error fetching paragraph: `, error);
  } finally {
    setLoading(false);
  }
}