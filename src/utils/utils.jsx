import mammoth from "mammoth";

export const handleFileChange = (event) => (setContent) => {
  const file = event.target.files[0];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  if(fileExtension === 'docx' || fileExtension ==="doc"){
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        const { value: extractedHtml } = await mammoth.extractRawText({
          arrayBuffer,
        });
        const plainText = stripHtmlTags(extractedHtml);
        setContent(plainText)
      } catch(error) {
        console.log(error)
      }
    }
    reader.readAsArrayBuffer(file);
  } else if(fileExtension === 'txt'){
    const reader = new FileReader();
    reader.onload = async (e) => {
      setContent(e.target.result);
    };
    reader.readAsText(file);
  }
};

export const stripHtmlTags = (html) => {
  const tempDiv = document.createElement("div"); // Create a temporary div element
  tempDiv.innerHTML = html; // Set the HTML content
  return tempDiv.textContent || tempDiv.innerText || ""; // Return plain text
};

export const handleExport = (content, name) => {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  const timestamp = new Date().toISOString().replace(/[^\w\s]/gi, '_');
  link.download = `${name}-${timestamp}.txt`;
  link.click();
};