'use client'; // Hii ni lazima kwa ajili ya useState
import { useState } from 'react'; // Tunakaribisha useState kutoka react

// === COMPONENT YA CONTACT FORM (BILA EXPORT DEFAULT) ===
function ContactForm() {
  // Tangaza state zako
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

    const handleSubmit = async (e: any) => { // <--- NIMEONGEZA : any HAPA
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-backend-2pzf.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 mt-8">
      <input
        type="text"
        name="username"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 h-32 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
        Send Message
      </button>
      {status && <p className="text-center mt-2 text-sm text-gray-600">{status}</p>}
    </form>
  );
}

// === MAIN PAGE COMPONENT (HII NI EXPORT DEFAULT) ===
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* === NAVBAR === */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Aishath's Portfolio</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#profile" className="hover:text-blue-600 font-medium">Profile</a>
            <a href="#qualifications" className="hover:text-blue-600 font-medium">Qualifications</a>
            <a href="#skills" className="hover:text-blue-600 font-medium">Skills</a>
            <a href="#projects" className="hover:text-blue-600 font-medium">Projects</a>
            <a href="#contact" className="hover:text-blue-600 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* === HERO SECTION / PERSONAL PROFILE === */}
      <section id="profile" className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
              Hi, I'm <span className="text-blue-600">Aishath Ahmad Tibenda</span>
            </h2>
            <p className="text-2xl text-gray-600 mb-6">Final Year Data Science Student</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I am a final-year Data Science student who enjoys working with data and technology. My passion is to take raw information and turn it into clear insights that help people make better decisions.

              I have strong skills in Python, Excel, and Power BI, and I enjoy building dashboards that make data easy to understand for everyone. I also love creating machine learning models that can predict outcomes, classify information, and explain patterns in data.

              For me, data is not just numbers — it is a story. I believe that good visualizations and dashboards can make complex ideas simple and useful. My goal is to combine analysis, visualization, and cloud deployment to create solutions that are practical and impactful in real life.

              I am motivated by curiosity, problem-solving, and the desire to use technology in ways that improve everyday life. Whether it is building a model, designing a dashboard, or deploying a website, I always aim to make my work clear, helpful, and easy to use.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
                View My Projects
              </a>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo Side (Placeholder) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* HAKIKISHA UNAWEKA PICHAKUTWA UKAITWA profile.jpeg NDANI YA FOLDER ILIYOITWA public */}
              <img src="/profile.jpeg" alt="Aishath Ahmad Tibenda" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* === QUALIFICATIONS (EDUCATION) === */}
      <section id="qualifications" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">My Qualifications</h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Qualification 1 */}
            <div className="border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg">
              <h4 className="text-xl font-bold">BACHELOR OF DATA SCIENCE</h4>
              <p className="text-blue-600 font-medium">[EASTERN AFRICA STATISTICAL TRAINING CENTRE]</p>
              <p className="text-sm text-gray-500">FINAL YEAR STUDENT</p>
            </div>

            {/* Qualification 2 */}
            <div className="border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg">
              <h4 className="text-xl font-bold">Certificate in Advanced Excel</h4>
              <p className="text-blue-600 font-medium">[Aestern Africa Statistical Traing Centre (EASTC)]</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>

            {/* Qualification 3 */}
            <div className="border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg">
              <h4 className="text-xl font-bold">PRACTICAL TRAINING</h4>
              <p className="text-blue-600 font-medium">[TTCL]</p>
              <p className="text-sm text-gray-500">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">My Technical Skills</h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {/* Data Science Skills */}
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Machine Learning
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Python
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              R Language
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Mathematics and Analysis
            </span>

            {/* Visualization Skills */}
            <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Microsoft Excel
            </span>
            <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Power BI
            </span>

            {/* Basic Web Skills */}
            <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              HTML
            </span>
            <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              CSS
            </span>
            <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              Git & GitHub
            </span>
            {/* GIS Skills */}
            <span className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              QGIS
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">
              GIS Mapping
            </span>

          </div>
        </div>
      </section>

      {/* === PROJECTS === */}
      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1: Data Science Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">Budget Tracker Dashboard</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Personal Tracking System</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  A simple dashboard built with Python and Streamlit to track income and expenses, making it easy to understand personal finances.
                </p>

                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Streamlit</span>
                </div>
                <a href="https://budget-tracker-jy9hlvkncz4lhxjzgxfbmn.streamlit.app/" target="_blank" className="text-blue-600 font-bold hover:underline inline-block">
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 2: Bot Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">Automation Bot</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Automated Bot Project</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  A dashboard built with Python and Streamlit that automates repetitive tasks, shows clear visualizations, and includes prediction features. It helps users save time, understand data easily, and make better decisions through charts and predictive insights.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Automation</span>
                </div>
                <a href="https://bot-project-hvpnvmugdtqfuhgdnxwqiu.streamlit.app/" target="_blank" className="text-blue-600 font-bold hover:underline inline-block">
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project 3: Web Dev / Assignment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">Web Portfolio</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Personal Portfolio Website</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  A static webpage built with HTML and CSS to showcase the Eastern Africa Statistical Training Center Convocation Ceremony, highlighting the theme and topics of the event.

                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">HTML/CSS</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Vercel</span>
                </div>
                <a href="https://humayraacreative.github.io/tibenda" target="_blank" className="text-blue-600 font-bold hover:underline inline-block">
                  View Webpage;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === CONTACT === */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            I am open to collaborations and new opportunities. If you need help with data analysis, dashboards, or web development, feel free to reach out. Let’s work together to turn ideas into results.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">📧</div>
              <div className="text-left">
                <p className="font-bold">Email</p>
                <p className="text-gray-600">aishathtibenda03@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">📱</div>
              <div className="text-left">
                <p className="font-bold">Phone</p>
                <p className="text-gray-600">+255 621 114 653</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">📍</div>
              <div className="text-left">
                <p className="font-bold">Location</p>
                <p className="text-gray-600">Dar es Salaam, Tanzania</p>
              </div>

            </div>
          </div>

          <a href="mailto:aishathtibenda03@gmail.com" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg mb-6">
            Send Me an Email
          </a>

          {/* HAPA TUMEWEKA CONTACT FORM */}
          <ContactForm />

        </div>
      </section>


      {/* === FOOTER === */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Aishath Ahmad Tibenda. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">Empowering decisions through data, one insight at a time</p>
      </footer>
    </div>
  );
}