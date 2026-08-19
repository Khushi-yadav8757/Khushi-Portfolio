import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi! I am the Portfolio Assistant. Ask me anything about Khushi.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate LLM response
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let botReply = "I'm not quite sure about that, but Khushi is always learning new things! Ask me about her 'skills', 'experience', 'projects', or 'contact' info.";
      
      const knowledgeBase = {
        about: "Khushi K. Yadav is a B.Tech CSE student interested in Web Development, Data Analytics, AI/ML, and building practical technology solutions.",
        skills: "Khushi's skills include HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Python, SQL, Excel, Power BI, MySQL, PostgreSQL, MongoDB, Machine Learning, Computer Vision, OpenCV, Git, GitHub, and VS Code.",
        experience: "Khushi has completed three internships: Power BI Intern at Hunar Intern (Jan 2026 - Feb 2026), Data Analyst Intern at Labmentix Private Limited (Sep 2025 - Oct 2025), and Data Analyst Intern at Dhwaja Flare (2026).",
        projects: "Khushi has built four featured projects:\n- MockMaster AI: AI-powered mock interview platform using React.js, AI, and Supabase.\n- Smart Parking System: Computer Vision system using Python and OpenCV.\n- TrendKart: Fashion and lifestyle discovery website using HTML and CSS.\n- PhonePe Payment Insights Dashboard: Analytics dashboard using Power BI, Excel, and Data Analytics.",
        contact: "You can reach Khushi at khushiyad152@gmail.com.\n\nHere are her important links:\n- GitHub: https://github.com/Khushi-yadav8757\n- LinkedIn: https://www.linkedin.com/in/khushi-yadav8757/\n- Twitter: https://x.com/KhushiYadav79\n- Instagram: https://www.instagram.com/always__khushiii",
        linkedin: "Here is Khushi's LinkedIn profile: https://www.linkedin.com/in/khushi-yadav8757/",
        twitter: "Here is Khushi's Twitter profile: https://x.com/KhushiYadav79",
        github: "Here is Khushi's GitHub profile: https://github.com/Khushi-yadav8757",
        email: "You can email Khushi directly at khushiyad152@gmail.com",
        resume: "Khushi's resume is available right here on the website! If you're having trouble finding it, you can request a copy directly at khushiyad152@gmail.com",
        greetings: "Hi there! I'm Khushi's AI assistant. You can ask me about her skills, projects, experience, or how to contact her.",
        mockmaster: "MockMaster AI is an AI-powered mock interview platform designed to help users practice technical and HR interviews with interactive feedback and performance tracking. It uses React.js, AI, and Supabase. Live demo: https://mock-master-ai-pi.vercel.app/",
        smartparking: "Smart Parking System is a Computer Vision based system that detects free and occupied parking spaces in real time. It uses Python, OpenCV, and Computer Vision. GitHub: https://github.com/Khushi-yadav8757/Smart-Parking-System",
        trendkart: "TrendKart is a modern fashion and lifestyle discovery website featuring curated products across different categories. It uses HTML and CSS. Live website: https://trendkart52.netlify.app/",
        phonepe: "PhonePe Payment Insights Dashboard is an interactive data analytics dashboard for payment trends, transaction performance, user activity, and business insights. It uses Power BI, Excel, and Data Analytics. GitHub: https://github.com/Khushi-yadav8757/PhonePe-Dashboard-PowerBi-Project",
        repo_general: "You can find Khushi's open-source work on her GitHub profile here: https://github.com/Khushi-yadav8757"
      };

      const isMatch = (words) => words.some(word => new RegExp(`\\b${word}\\b`, 'i').test(lowerInput));

      if (isMatch(['mockmaster', 'mock', 'interview'])) {
        botReply = knowledgeBase.mockmaster;
      } else if (isMatch(['parking', 'smart parking', 'smartparking'])) {
        botReply = knowledgeBase.smartparking;
      } else if (isMatch(['trendkart', 'fashion', 'lifestyle'])) {
        botReply = knowledgeBase.trendkart;
      } else if (isMatch(['phonepe', 'dashboard', 'payment'])) {
        botReply = knowledgeBase.phonepe;
      } else if (isMatch(['linkedin', 'linked in'])) {
        botReply = knowledgeBase.linkedin;
      } else if (isMatch(['twitter', 'x'])) {
        botReply = knowledgeBase.twitter;
      } else if (isMatch(['github', 'git hub'])) {
        botReply = knowledgeBase.github;
      } else if (isMatch(['email', 'e-mail', 'mail'])) {
        botReply = knowledgeBase.email;
      } else if (isMatch(['resume', 'cv'])) {
        botReply = knowledgeBase.resume;
      } else if (isMatch(['repo', 'repository', 'source', 'code', 'link', 'links'])) {
        botReply = knowledgeBase.repo_general;
      } else if (isMatch(['contact', 'hire', 'reach', 'connect', 'message', 'phone', 'number', 'details'])) {
        botReply = knowledgeBase.contact;
      } else if (isMatch(['experience', 'job', 'jobs', 'intern', 'internship', 'role', 'history', 'worked'])) {
        botReply = knowledgeBase.experience;
      } else if (isMatch(['project', 'projects', 'work', 'works', 'portfolio', 'build', 'built', 'made', 'created'])) {
        botReply = knowledgeBase.projects;
      } else if (isMatch(['skill', 'skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'know', 'react', 'python', 'sql', 'power bi'])) {
        botReply = knowledgeBase.skills;
      } else if (isMatch(['about', 'who', 'background', 'bio', 'intro', 'yourself', 'khushi', 'education', 'degree'])) {
        botReply = knowledgeBase.about;
      } else if (isMatch(['hi', 'hello', 'hey', 'greetings', 'sup', 'morning', 'evening', 'afternoon'])) {
        botReply = knowledgeBase.greetings;
      }

      setMessages(prev => [...prev, { role: 'system', content: botReply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-6 left-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-[#121212] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1e1e1e] p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-gray-300" />
                <h3 className="text-white font-medium text-sm">Portfolio Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-white/10 text-white' : 'bg-white text-black'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-none' : 'bg-[#1e1e1e] text-gray-300 rounded-tl-none border border-white/5 whitespace-pre-wrap'}`}>
                    {msg.role === 'system' ? (
                      <span dangerouslySetInnerHTML={{ __html: msg.content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noreferrer" class="text-blue-400 hover:underline">$1</a>') }} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#1e1e1e] text-gray-300 rounded-tl-none border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-[#1e1e1e] border-t border-white/5">
              <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-full px-4 py-2 border border-white/5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="bg-transparent flex-grow outline-none text-sm text-white placeholder:text-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="text-white hover:text-gray-300 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
