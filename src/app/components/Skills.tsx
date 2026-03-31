import { motion } from "motion/react";
import { Brain, Code2, Database, Cloud, Smartphone, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Inteligencia Artificial & ML",
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "LangChain", level: 88 },
        { name: "OpenAI API", level: 92 },
        { name: "Hugging Face", level: 85 },
        { name: "scikit-learn", level: 90 }
      ]
    },
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "React Native", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 88 },
        { name: "GraphQL", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 87 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 92 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 88 },
        { name: "Terraform", level: 82 },
        { name: "GitHub Actions", level: 87 }
      ]
    },
    {
      category: "Data & Analytics",
      icon: Layers,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Kafka", level: 80 },
        { name: "Elasticsearch", level: 82 },
        { name: "Redis", level: 88 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 87 }
      ]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 78 },
        { name: "iOS (Swift)", level: 75 },
        { name: "Android (Kotlin)", level: 75 },
        { name: "Expo", level: 82 },
        { name: "Mobile UI/UX", level: 80 }
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
