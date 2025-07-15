import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mercy Zelalem
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & React developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm a passionate developer</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                I'm a creative and detail-oriented developer with a passion for building exceptional digital experiences. 
                With expertise in modern web technologies and a keen eye for design, I transform ideas into engaging, 
                user-friendly applications that make a real impact.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while sketching out my next big idea.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">UI/UX</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Code className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Frontend</h4>
                <p className="text-white/70 text-sm">Modern React, Vue.js, and responsive design</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Database className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Backend</h4>
                <p className="text-white/70 text-sm">Node.js, Python, and database design</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Palette className="w-8 h-8 text-pink-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Design</h4>
                <p className="text-white/70 text-sm">UI/UX design and prototyping</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Code className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">React Developer</h4>
                <p className="text-white/70 text-sm">Advanced React patterns and state management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center">
                <Code className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phoenix Pathway</h3>
              <p className="text-white/70 mb-4">
               A passion project website which connects Ethiopian women with compassionate mental health support through student-led peer networks and professional partnerships, breaking barriers to accessible care.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Tailwind CSS</span>
              </div>
              <a 
                href="https://gentle-starburst-54199b.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Click Here
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl mb-6 flex items-center justify-center">
                <Globe className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Weather Dashboard in Ethiopia</h3>
              <p className="text-white/70 mb-4">
                A comprehensive weather application providing real-time weather data for Ethiopian cities with forecasts, alerts, and climate insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Weather API</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Chart.js</span>
              </div>
              <a 
                href="https://vocal-muffin-2af65d.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Let's work together</h3>
              <p className="text-white/80 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6 max-w-md mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-white/70">mercyzelalem91@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-white/70">linkedin.com/in/Mercy Zelalem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
        </div>
      </footer>
    </div>
  );
}

export default App;