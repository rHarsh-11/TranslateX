import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("fr");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/translate", {
        text,
        source,
        target,
      });
      setTranslated(res.data.translated_text);
    } catch (error) {
      setTranslated("Error in translation. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 flex flex-col">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white font-semibold">
        <div className="text-3xl font-extrabold tracking-wider select-none">
          TranslateX
        </div>
        
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow text-center px-6 text-white">
        <h1 className="text-5xl font-extrabold max-w-3xl leading-tight drop-shadow-lg">
          Break Language Barriers with <span className="text-yellow-300">TranslateX</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-indigo-200">
          Fast, accurate, and easy-to-use multilingual translator powered by AI.
          Translate your text instantly between multiple languages.
        </p>
        <button
          onClick={() => document.getElementById("translate").scrollIntoView({ behavior: "smooth" })}
          className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </button>
      </header>

      {/* Translate Section */}
      <section
        id="translate"
        className="container mx-auto px-6 py-12 bg-white rounded-t-3xl shadow-2xl -mt-20 max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Translate Your Text
        </h2>

        <textarea
          className="w-full h-40 p-4 border border-indigo-300 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <select
            className="w-full md:w-1/3 p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            aria-label="Source Language"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>

          <select
            className="w-full md:w-1/3 p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            aria-label="Target Language"
          >
            <option value="fr">French</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          <button
            onClick={handleTranslate}
            disabled={loading}
            className={`w-full md:w-1/3 py-3 rounded-lg font-bold text-white ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-700 hover:bg-indigo-800 transition"
            }`}
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>

        <div
          className="mt-8 min-h-[6rem] p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-indigo-900 whitespace-pre-wrap break-words font-medium text-lg"
          aria-live="polite"
          aria-atomic="true"
        >
          {translated || "Your translated text will appear here..."}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-indigo-900 text-indigo-200 text-center py-6 mt-auto select-none"
      >
        <p>© 2025 TranslateX. All rights reserved.</p>
        <p>Made with ❤️ by Harsh Rana</p>
      </footer>
    </div>
  );
}

export default App;
