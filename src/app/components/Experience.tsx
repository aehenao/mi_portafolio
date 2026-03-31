import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Director IT",
      company: "Valley groups",
      period: "Abril 2023 - Febrero 2025",
      location: "Cali",
      description: "Liderazgo estratégico y supervisión de proyectos tecnológicos enfocados en optimizar procesos empresariales y generar ventajas competitivas.",
      achievements: [
        "Coordinación de equipos multidisciplinarios de desarrollo, infraestructura y análisis.",
        "Definición de arquitecturas tecnológicas y selección de stack (AWS, DigitalOcean, Proxmox, Docker).",
        "Impulso de prácticas de automatización e integración continua (CI/CD) para mejorar la eficiencia.",
        "Promoción del uso de IA y agentes inteligentes para optimizar procesos internos y toma de decisiones.",
        "Gestión integral de requerimientos, priorización de iniciativas y comunicación con stakeholders."
      ],
      technologies: ["AWS", "DigitalOcean", "Proxmox", "Docker", "Linux", "IA", "CI/CD", "Automatización"]
    },
    {
      role: "Desarrollador de Software",
      company: "Klaxen sas",
      period: "Octubre 2020 - Actualidad",
      location: "Yumbo",
      description: "Desarrollo e implementación de software para la automatización y optimización de procesos internos y externos.",
      achievements: [
        "Desarrollo de soluciones con PHP, JavaScript, Laravel, Python, React y Vue.",
        "Administración de servidores Windows (Active Directory) y entornos cloud (AWS, DigitalOcean, Kamatera).",
        "Integración de software de terceros como Zoho CRM, CGUNO y Drive API para backups automáticos.",
        "Soporte y mantenimiento a plataformas basadas en CMS como Joomla y Wordpress."
      ],
      technologies: ["PHP", "JavaScript", "Laravel", "Python", "React", "Vue", "AWS", "DigitalOcean", "Kamatera", "Zoho CRM", "Joomla", "Wordpress"]
    },
    {
      role: "Desarrollador de Software Freelancer",
      company: "Freelancer.com.co",
      period: "Enero 2020 - Actualidad",
      location: "Cali",
      description: "Asesoramiento técnico y desarrollo de plataformas a medida, especializado en optimización de procesos y soluciones de IA.",
      achievements: [
        "Desarrollo de bots de scraping y chatbots conversacionales con Wait.io y DialogFlow.",
        "Implementación de soluciones avanzadas con IA, RAG y agentes inteligentes (Dify.ai, n8n, Flowise).",
        "Uso de tecnologías de vanguardia como LangChain, LangGraph y Rust para proyectos específicos.",
        "Consultoría técnica para empresas nacionales e internacionales con excelentes calificaciones."
      ],
      technologies: ["Node.js", "React", "Laravel", "Python", "IA", "RAG", "Rust", "Dify.ai", "n8n", "Flowise", "LangChain", "Metabase"]
    },
    {
      role: "Gestor de Acceso",
      company: "Universidad Autónoma de Occidente",
      period: "Enero 2017 - Actualidad",
      location: "Cali",
      description: "Administración de infraestructura de identidad, acceso y seguridad de la información corporativa.",
      achievements: [
        "Administración de Active Directory, GPO y plataforma de correo Gmail para empresas.",
        "Gestión de seguridad endpoint con Kaspersky y administración de servidores Windows/Linux.",
        "Desarrollo de Dashboard en tiempo real para visualización del estado de protección de equipos.",
        "Automatización de procesos de depuración de AD mediante scripts avanzados en PowerShell."
      ],
      technologies: ["Active Directory", "PowerShell", "Linux", "Windows Server", "Kaspersky", "GPO", "Gmail API"]
    },
    {
      role: "Practicante",
      company: "Universidad Autónoma de Occidente",
      period: "Agosto 2014 - Agosto 2015",
      location: "Cali",
      description: "Soporte técnico integral y mantenimiento preventivo/correctivo de infraestructura de cómputo.",
      achievements: [
        "Mantenimiento de computadores, recuperación de datos y backup de perfiles de usuario.",
        "Diagnóstico de hardware e instalación/configuración de sistemas operativos.",
        "Prueba de herramientas tecnológicas para facilitar el soporte técnico a usuarios finales.",
        "Gestión de configuración y backups de Outlook para el personal administrativo."
      ],
      technologies: ["Hardware Support", "Windows", "Outlook", "Data Recovery", "Excel"]
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
