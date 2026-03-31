import { motion } from "motion/react";
import { Brain, Code2, Database, Cloud, Smartphone, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Inteligencia Artificial & Automatización",
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Agentes IA (Dify.ai, Flowise, n8n)", level: 85 },
        { name: "RAG y LLMs", level: 80 },
        { name: "Machine Learning Básico", level: 75 },
        { name: "Prompt Engineering", level: 70 }
      ]
    },
    {
      category: "Desarrollo Fullstack",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PHP & Laravel", level: 70 },
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Node.js", level: 95 },
        { name: "Python", level: 90 },
        { name: "React & Vue.js", level: 70 },
        { name: "Rust", level: 15 }
      ]
    },
    {
      category: "Bases de Datos",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Supabase", level: 65 }
      ]
    },
    {
      category: "Infraestructura & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (S3, EC2, Route53)", level: 80 },
        { name: "Docker & Contenedores", level: 75 },
        { name: "Linux Administration", level: 70 },
        { name: "DigitalOcean", level: 65 },
        { name: "Proxmox Virtualización", level: 60 }
      ]
    },
    {
      category: "Gestión de Proyectos",
      icon: Layers,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Análisis Funcional", level: 85 },
        { name: "Diseño de Diagramas de Flujo", level: 80 },
        { name: "Planificación con Gantt", level: 75 },
        { name: "Levantamiento de Requerimientos", level: 70 },
        { name: "Metodologías Ágiles", level: 65 }
      ]
    },
    {
      category: "Aprendizaje Actual",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Rust", level: 15 },
        { name: "LangGraph & LangChain", level: 60 },
        { name: "FlutterFlow", level: 60 },
        { name: "Resolución de Problemas", level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
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
               Habilidades <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Técnicas</span>
             </h2>
            <p className="text-xl text-gray-600">
              Stack tecnológico completo con fuerte especialización en IA
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Otras Competencias</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile/Scrum",
                "Team Leadership",
                "Technical Architecture",
                "System Design",
                "Code Review",
                "Mentoring",
                "Product Strategy",
                "Microservices",
                "API Design",
                "Testing (TDD)",
                "Security Best Practices",
                "Performance Optimization"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full text-sm font-semibold text-purple-700 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
