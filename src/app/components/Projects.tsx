import { motion } from "motion/react";
import { ExternalLink, Github, Brain, MessageSquare, Image, TrendingUp, Shield, Zap } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "AI Chat Platform",
      category: "Inteligencia Artificial",
      description: "Plataforma conversacional empresarial potenciada por GPT-4 con integración de knowledge bases personalizadas y análisis de sentimientos en tiempo real.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      technologies: ["Python", "LangChain", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "10,000+ usuarios activos mensuales",
        "99.9% uptime",
        "Procesamiento de 1M+ mensajes/mes"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Analytics",
      category: "Deep Learning",
      description: "Sistema de análisis de video en tiempo real usando YOLO y CNN para detección de objetos, seguimiento y análisis de comportamiento en retail.",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop",
      technologies: ["PyTorch", "OpenCV", "YOLO", "TensorFlow", "AWS SageMaker", "Redis"],
      icon: Image,
      color: "from-purple-500 to-blue-500",
      highlights: [
        "Precisión del 95% en detección",
        "Procesamiento de 30 FPS",
        "Deployed en 50+ tiendas"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Analytics Engine",
      category: "Machine Learning",
      description: "Motor de predicción para e-commerce que anticipa comportamiento de compra y optimiza inventario usando modelos de serie temporal y clasificación.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["scikit-learn", "XGBoost", "pandas", "Apache Airflow", "Docker", "MongoDB"],
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      highlights: [
        "ROI de 250% en primer año",
        "Reducción de 35% en stock muerto",
        "Predicciones con 87% de precisión"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "NLP Sentiment Analyzer",
      category: "Natural Language Processing",
      description: "Herramienta de análisis de sentimientos multilingüe para redes sociales con clasificación de emociones y extracción de insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["Transformers", "BERT", "Hugging Face", "Flask", "Elasticsearch", "Kubernetes"],
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      highlights: [
        "Soporte para 15+ idiomas",
        "Análisis de 100K+ posts/día",
        "Dashboard en tiempo real"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Cybersecurity AI Suite",
      category: "AI Security",
      description: "Suite de seguridad con detección de anomalías usando ML, identificación de amenazas en tiempo real y respuesta automatizada.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      technologies: ["TensorFlow", "Keras", "Splunk", "ELK Stack", "AWS Lambda", "Python"],
      icon: Shield,
      color: "from-red-500 to-blue-500",
      highlights: [
        "Detección de amenazas en <1s",
        "Reducción de 60% en falsos positivos",
        "Protección de 500+ endpoints"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Recommendation System",
      category: "Machine Learning",
      description: "Sistema de recomendación híbrido usando collaborative filtering y deep learning para personalización en tiempo real.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      technologies: ["PyTorch", "Redis", "Kafka", "Spark", "Neo4j", "GraphQL"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      highlights: [
        "Aumento de 45% en engagement",
        "Latencia <50ms",
        "CTR mejorado en 35%"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proyectos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Destacados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones innovadoras en IA y desarrollo de software que han generado impacto real
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg`}>
                        <project.icon className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                    {/* Highlights */}
                    <div className="mb-4 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-purple-600">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition-colors flex-1 justify-center"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow flex-1 justify-center`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
