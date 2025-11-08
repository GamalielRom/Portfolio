import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function Hero(){
    return(
        <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/*Animated Background */}
           <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
                <img
                src="/images/other/gamaliel.jpg"
                alt="gamaliel"
                className="w-full h-full object-cover"
                />
            </div>

            {/*text */}
            <div className="ml-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span className="text-blue-400">G</span>amaliel <span className="text-blue-400">R</span>omualdo
                </h1>
                <p className="text-gray-300 text-lg max-w-lg mb-6">
                I'm a software developer passionate about clean code, data, and creative solutions.
                Currently exploring web development, AI, and system design.
                 </p>
                 <div className="flex justify-center md:justify-start gap-4">
                     <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                    >
                    View Projects
                    </a>
                    <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition"
                    >
                    Contact Me
                    </a>
                 </div>

                 {/*Social Icons */}
                 <div className="flex justify-center md:justify-start gap-6 mt-8">
                    <a
                    href="https://github.com/GamalielRom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition text-2xl"
                    >
                    <FaGithub />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/gamaliel-romualdo-6a2567307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition text-2xl"
                    >
                    <FaLinkedin />
                    </a>
                 </div>
            </div>
        </section>
    )
}