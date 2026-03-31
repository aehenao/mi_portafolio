import { motion } from "motion/react";
import { ExternalLink, Github, Brain, MessageSquare, Image, TrendingUp, Shield, Zap, Code2, Database, Cloud, Layers, Smartphone } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Plataforma de Agentes Inteligentes",
      category: "Inteligencia Artificial",
      description: "Sistema de agentes IA usando Dify.ai y Flowise para automatización de procesos empresariales, integración con bases de conocimiento y respuestas contextualizadas.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      technologies: ["Dify.ai", "Flowise", "n8n", "Supabase", "Pinecone", "JavaScript"],
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      highlights: [
        "Automatización de atención al cliente",
        "Integración con CRM empresarial",
        "Reducción del 40% en tiempo de respuesta"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Gestión Empresarial Fullstack",
      category: "Desarrollo Web",
      description: "Aplicación completa para gestión de inventario, ventas y clientes construida con Laravel, Vue.js y PostgreSQL, desplegada en AWS.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["Laravel", "Vue.js", "PHP", "PostgreSQL", "AWS", "Docker"],
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "Gestión de inventario en tiempo real",
        "Reportes y analíticas avanzadas",
        "Despliegue en infrastructure cloud"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "API RESTful para Aplicaciones Móviles",
      category: "Backend Development",
      description: "Interfaz de programación de aplicaciones robusta y segura construida con Node.js, Express y MongoDB, incluyendo autenticación JWT y documentación Swagger.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Docker"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
      highlights: [
        "Arquitectura escalable y modular",
        "Documentación automática de endpoints",
        "Optimización de consultas a base de datos"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Automatización de Procesos",
      category: "Infraestructura & DevOps",
      description: "Flujos de trabajo automatizados usando n8n para sincronización de datos entre aplicaciones, generación de reportes y notificaciones inteligentes.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      technologies: ["n8n", "PostgreSQL", "API REST", "Linux", "Cron", "JavaScript"],
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      highlights: [
        "Integración de múltiples sistemas",
        "Ejecución programada de tareas",
        "Monitoreo y alertas en tiempo real"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Aplicación de Análisis de Sentimientos",
      category: "Data & Analytics",
      description: "Herramienta para análisis de opiniones en redes sociales usando técnicas de NLP y visualización interactiva de resultados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["Python", "NLTK", "TextBlob", "Chart.js", "HTML/CSS", "Flask"],
      icon: Layers,
      color: "from-yellow-500 to-orange-500",
      highlights: [
        "Procesamiento de texto en múltiples idiomas",
        "Visualización de tendencias temporales",
        "Exportación de reportes en diversos formatos"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Aprendizaje y Experimentación con Rust",
      category: "Desarrollo de Sistemas",
      description: "Proyectos de práctica para dominar Rust enfocados en seguridad, rendimiento y concurrencia, incluyendo manipulacion de archivos y servicios de red.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      technologies: ["Rust", "Cargo", "Tokio", "Serde", "Actix-web", "Linux"],
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      highlights: [
        "Sintaxis segura y libre de errores comunes",
        "Compilación a binarios nativos eficientes",
        "Experimentación con concurrencia segura"
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
