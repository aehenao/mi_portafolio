import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Director de Tecnología (CTO)",
      company: "Tech Innovation Corp",
      period: "2022 - Presente",
      location: "Remote",
      description: "Liderazgo de la estrategia tecnológica de la empresa, gestión de equipos de desarrollo y implementación de soluciones basadas en IA.",
      achievements: [
        "Implementación de arquitectura de microservicios que mejoró la escalabilidad en 300%",
        "Liderazgo de equipo de 15+ desarrolladores",
        "Desarrollo de plataforma de IA que generó $2M en ingresos anuales",
        "Reducción de costos operativos en 40% mediante automatización con ML"
      ],
      technologies: ["Python", "AWS", "Kubernetes", "TensorFlow", "React", "Node.js"]
    },
    {
      role: "Senior Software Engineer & AI Lead",
      company: "AI Solutions Inc",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description: "Desarrollo de soluciones de IA y liderazgo técnico en proyectos de machine learning y deep learning.",
      achievements: [
        "Desarrollo de sistema de recomendación con ML que aumentó engagement 45%",
        "Implementación de pipeline de NLP para análisis de sentimientos en tiempo real",
        "Creación de chatbot con GPT-3 que redujo tickets de soporte en 60%",
        "Mentoría de 5 desarrolladores junior en técnicas de IA"
      ],
      technologies: ["PyTorch", "FastAPI", "PostgreSQL", "Docker", "LangChain", "OpenAI API"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Ventures",
      period: "2018 - 2020",
      location: "New York, NY",
      description: "Desarrollo full stack de aplicaciones web y móviles con enfoque en performance y user experience.",
      achievements: [
        "Desarrollo de 10+ aplicaciones web de alto tráfico",
        "Implementación de CI/CD que redujo tiempo de deployment en 70%",
        "Optimización de queries SQL que mejoró performance en 5x",
        "Migración exitosa de monolito a arquitectura serverless"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS Lambda", "GraphQL"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
               Experiencia <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Profesional</span>
             </h2>
            <p className="text-xl text-gray-600">
              Trayectoria construyendo productos y liderando equipos tecnológicos
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 via-blue-600 to-transparent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-8 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-xl text-purple-600 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Logros destacados:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-600 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-gray-600">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full text-sm text-purple-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
