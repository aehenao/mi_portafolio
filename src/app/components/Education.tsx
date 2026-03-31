import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Maestría en Inteligencia Artificial",
      institution: "Universidad de Tecnología Avanzada",
      period: "2018 - 2020",
      description: "Especialización en Deep Learning, Computer Vision y Natural Language Processing.",
      highlights: [
        "Tesis: 'Optimización de Redes Neuronales para Procesamiento en Tiempo Real'",
        "GPA: 3.9/4.0",
        "Investigación publicada en conferencia internacional de IA"
      ]
    },
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Instituto Tecnológico Superior",
      period: "2014 - 2018",
      description: "Formación integral en desarrollo de software, algoritmos y arquitectura de sistemas.",
      highlights: [
        "Graduado con honores (Top 5% de la clase)",
        "Proyecto final: Sistema de recomendación basado en ML",
        "Presidente del club de programación competitiva"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022"
    },
    {
      name: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      year: "2021"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI - Coursera",
      year: "2020"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Meta",
      year: "2019"
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
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
               Formación <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Académica</span>
             </h2>
            <p className="text-xl text-gray-600">
              Educación y certificaciones que respaldan mi expertise técnico
            </p>
          </motion.div>

          {/* Education */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-lg text-purple-600 font-semibold">{edu.institution}</p>
                      <p className="text-sm text-gray-600 mt-1">{edu.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Destacados:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-600 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold">Certificaciones Profesionales</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="font-bold mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
