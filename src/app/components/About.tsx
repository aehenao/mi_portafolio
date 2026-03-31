import { motion } from "motion/react";
import { Brain, Sparkles, Code, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Experto en IA",
      description: "Especializado en Machine Learning, Deep Learning y LLMs",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "Desarrollo completo de aplicaciones web y móviles",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Liderazgo Técnico",
      description: "Dirección de equipos y estrategia tecnológica",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Innovación",
      description: "Implementación de soluciones cutting-edge",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
<h2 className="text-4xl md:text-5xl font-bold mb-4">
               Sobre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mí</span>
             </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apasionado por la tecnología y la inteligencia artificial, con una visión estratégica 
              para liderar proyectos innovadores que generan impacto real.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="h-full p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-xl mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Focus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-blue-800 to-blue-900 p-12 text-white"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold">Especialización en Inteligencia Artificial</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Experiencia en IA</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▸</span>
                      <span>Desarrollo e implementación de modelos de Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▸</span>
                      <span>Integración de Large Language Models (GPT, Claude, Llama)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▸</span>
                      <span>Computer Vision y procesamiento de imágenes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▸</span>
                      <span>NLP y análisis de sentimientos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Tecnologías IA</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'scikit-learn', 'Keras', 'AutoML'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
