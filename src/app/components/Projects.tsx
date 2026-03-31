import { motion } from "motion/react";
import {
  Github, Brain, Zap, Code2, Database, Layers, Smartphone,
  Sparkles, Globe, Shield, BookOpen, Layout, Server,
  Terminal, Link, LifeBuoy, Camera, Scissors, Bot,
  ShoppingCart, MessageCircle, Send, TrendingUp, MessageSquare
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Dify - Agentic Workflow Platform",
      category: "Inteligencia Artificial",
      description: "Plataforma para el desarrollo de flujos de trabajo con agentes inteligentes, integrando LLMs con herramientas empresariales.",
      technologies: ["Python", "TypeScript", "React", "PostgreSQL", "Redis"],
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      highlights: ["Desarrollo de agentes autónomos", "Orquestación de LLMs", "Arquitectura escalable"],
      github: "https://github.com/aehenao/dify",
      badge: "Fork - Contribución"
    },
    {
      title: "freya (Rust GUI)",
      category: "Desktop & Rust",
      description: "Librería GUI multiplataforma para Rust impulsada por Skia. Desarrollo de interfaces nativas de alto rendimiento.",
      technologies: ["Rust", "Skia", "Astro", "TypeScript"],
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      highlights: ["UI Nativa", "Alta Performance", "Renderizado Skia"],
      github: "https://github.com/aehenao/freya",
      badge: "Fork - Contribución"
    },
    {
      title: "MyFramework (PHP)",
      category: "Arquitectura",
      description: "Framework MVC creado desde cero en PHP, implementando ruteo, ruteo y controladores similares a Laravel.",
      technologies: ["PHP", "Composer", "MVC", "Patterns"],
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      highlights: ["Ruteo Custom", "Inyección dependencias", "ORM Ligero"],
      github: "https://github.com/aehenao/MyFramework"
    },
    {
      title: "miniFFA Framework",
      category: "Fullstack Tooling",
      description: "Micro-framework para desarrollo rápido uniendo Python (FastAPI) con ReactJS y compilación Nuitka.",
      technologies: ["Python", "React", "Nuitka", "FastAPI"],
      icon: Smartphone,
      color: "from-amber-500 to-orange-600",
      highlights: ["Compilación nativa", "Desarrollo Ágil", "Multi-plataforma"],
      github: "https://github.com/aehenao/miniFFA"
    },
    {
      title: "Upefarma Platform",
      category: "E-Commerce/Pharma",
      description: "Sistema integral para gestión de inventarios y ventas en farmacias con alta disponibilidad.",
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      highlights: ["Inventario Masivo", "UX Reactiva", "Reportes PDF"],
      github: "https://github.com/aehenao/",
      badge: "Privado"
    },
    {
      title: "Sigedenv CRM (Frappe)",
      category: "Enterprise ERP",
      description: "CRM para sector educación construido sobre framework Frappe / ERPNext.",
      technologies: ["Python", "JavaScript", "Frappe", "MariaDB"],
      icon: Database,
      color: "from-cyan-600 to-blue-600",
      highlights: ["ERP Custom", "Módulos Frappe", "Workflows"],
      github: "https://github.com/aehenao",
      badge: "Privado"
    },
    {
      title: "Mi PanamaEbay",
      category: "Freelance",
      description: "Plataforma personalizada para cliente en Panamá integrada con servicios de eBay.",
      technologies: ["PHP", "Vue.js", "Blade", "HTML"],
      icon: Globe,
      color: "from-indigo-400 to-blue-500",
      highlights: ["eBay Integration", "Custom API", "Multi-language"],
      github: "https://github.com/aehenao/",
      badge: "Privado"
    },
    {
      title: "Bot Amazon Ofertas",
      category: "Automation / Scraping",
      description: "Bot que detecta ofertas de más del 30% en Amazon y envía notificaciones inteligentes.",
      technologies: ["Python", "Cython", "Scraping", "Docker"],
      icon: ShoppingCart,
      color: "from-red-500 to-rose-600",
      highlights: ["Notificaciones push", "Algoritmo ofertas", "Multi-threading"],
      github: "https://github.com/aehenao/Bot_amazon_ofertas_python"
    },
    {
      title: "RobotW (WhatsApp)",
      category: "Bot / Chat",
      description: "Sistema automatizado para gestión de mensajes y procesos a través de WhatsApp.",
      technologies: ["Python", "QML", "JavaScript", "Shell"],
      icon: MessageSquare,
      color: "from-green-500 to-emerald-600",
      highlights: ["WhatsApp API", "GUI Integrada", "Scripts Automatizados"],
      github: "https://github.com/aehenao/RobotW"
    },
    {
      title: "nvim-ide",
      category: "DevTools",
      description: "Configuración profesional de Neovim optimizada para desarrollo Fullstack y IA.",
      technologies: ["Lua", "Neovim", "LSP", "Plugins"],
      icon: Terminal,
      color: "from-slate-700 to-slate-900",
      highlights: ["LSP Config", "Super Fast UI", "Custom Keymaps"],
      github: "https://github.com/aehenao/nvim-ide"
    },
    {
      title: "Linktr",
      category: "Social Platform",
      description: "Alternativa personalizada a Linktree para centralizar presencia digital con Vue y PHP.",
      technologies: ["PHP", "Vue.js", "HTML", "CSS"],
      icon: Link,
      color: "from-fuchsia-500 to-purple-600",
      highlights: ["Custom Theme", "Analytics", "SEO Ready"],
      github: "https://github.com/aehenao/Linktr"
    },
    {
      title: "HelpDesk System",
      category: "Soporte Técnico",
      description: "Sistema de tickets y soporte técnico para gestión interna de departamentos IT.",
      technologies: ["PHP", "Vue.js", "Blade", "Less"],
      icon: LifeBuoy,
      color: "from-sky-500 to-blue-600",
      highlights: ["Ticket System", "SLA Control", "Email Alerts"],
      github: "https://github.com/aehenao/HelpDesk"
    },
    {
      title: "voymenu Backend",
      category: "Backend API",
      description: "Motor API robusto para plataforma de gestión de menús digitales y restaurantes.",
      technologies: ["PHP", "JavaScript", "MySQL", "Roff"],
      icon: Server,
      color: "from-neutral-600 to-neutral-800",
      highlights: ["REST API", "Scalable DB", "Auth System"],
      github: "https://github.com/aehenao",
      badge: "Privado"
    },
    {
      title: "instagramx",
      category: "Social Media",
      description: "Herramienta de automatización y analítica para perfiles de Instagram.",
      technologies: ["TypeScript", "API Rest", "Automation"],
      icon: Camera,
      color: "from-pink-600 to-rose-500",
      highlights: ["Media Analysis", "Auto-posts", "Analytics"],
      github: "https://github.com/aehenao/instagramx"
    },
    {
      title: "asisweb_poli",
      category: "Académico",
      description: "Sistema de asistencia web desarrollado para proyectos del Politécnico.",
      technologies: ["TypeScript", "HTML", "CSS"],
      icon: BookOpen,
      color: "from-green-600 to-teal-700",
      highlights: ["Attendance Tracking", "QR Support", "User Roles"],
      github: "https://github.com/aehenao/asisweb_poli"
    },
    {
      title: "botTelegramFreelancer",
      category: "Bot / Send",
      description: "Bot de Telegram especializado para la gestión de clientes y servicios freelance.",
      technologies: ["Python", "PowerShell", "Telegram API"],
      icon: Send,
      color: "from-blue-400 to-blue-600",
      highlights: ["Instant Messaging", "Customer CRM", "Task Alerts"],
      github: "https://github.com/aehenao/botTelegramFreelancer"
    },
    {
      title: "Botwhat",
      category: "WhatsApp / Automation",
      description: "Herramienta de automatización para interacciones en WhatsApp usando Python.",
      technologies: ["Python", "PowerShell", "Batchfile"],
      icon: MessageCircle,
      color: "from-green-400 to-green-600",
      highlights: ["Message Automation", "Scripting", "Custom Flows"],
      github: "https://github.com/aehenao/Botwhat"
    },
    {
      title: "Bot Steam",
      category: "Gaming / Automation",
      description: "Bot para interacciones automáticas dentro de la plataforma Steam.",
      technologies: ["JavaScript", "Node.js", "Nix"],
      icon: Zap,
      color: "from-indigo-600 to-indigo-800",
      highlights: ["Steam API", "Auto-trade", "Activity Bot"],
      github: "https://github.com/aehenao/BotSteam"
    },
    {
      title: "valley-laravel",
      category: "Backend / API",
      description: "API robusta desarrollada en Laravel para proyectos de la organización Valley.",
      technologies: ["PHP", "Laravel", "PostgreSQL"],
      icon: Server,
      color: "from-red-600 to-red-800",
      highlights: ["API Restful", "Architecture", "Database Design"],
      github: "https://github.com/aehenao/valley-laravel"
    },
    {
      title: "barbetorio",
      category: "Management System",
      description: "Plataforma de gestión para barberías y centros de estética con Vue y Laravel.",
      technologies: ["PHP", "Vue.js", "Laravel", "Blade"],
      icon: Scissors,
      color: "from-amber-600 to-amber-800",
      highlights: ["Booking System", "Inventory", "Client Management"],
      github: "https://github.com/aehenao/barbetorio",
      badge: "Privado"
    },
    {
      title: "Onatex Odoo",
      category: "ERP / Modules",
      description: "Repositorio de módulos personalizados para Odoo v17.0 adaptados a las necesidades de Onatex.",
      technologies: ["Python", "JavaScript", "Odoo", "XML"],
      icon: Database,
      color: "from-indigo-400 to-indigo-600",
      highlights: ["Custom Modules", "ERP Integration", "Business Logic"],
      github: "https://github.com/aehenao/Onatex"
    },
    {
      title: "valley-angular",
      category: "Frontend / Angular",
      description: "Frontend moderno desarrollado en Angular para la plataforma de servicios Valley.",
      technologies: ["TypeScript", "Angular", "HTML", "CSS"],
      icon: Layout,
      color: "from-red-500 to-red-700",
      highlights: ["SPA Architecture", "Reactive Forms", "State Management"],
      github: "https://github.com/aehenao/valley-angular"
    },
    {
      title: "voymenu Front",
      category: "Frontend / Mobile-ready",
      description: "Interfaz de usuario reactiva para la plataforma de menús digitales voymenu.",
      technologies: ["PHP", "Vue.js", "JavaScript", "Blade"],
      icon: Smartphone,
      color: "from-amber-400 to-amber-600",
      highlights: ["Mobile First", "Vue Components", "QR Integration"],
      github: "https://github.com/aehenao/",
      badge: "Privado"
    },
    {
      title: "bot-modular-node",
      category: "Bot / Node.js",
      description: "Arquitectura modular para la creación de bots multiplataforma usando Node.js.",
      technologies: ["JavaScript", "Node.js", "Modular"],
      icon: Bot,
      color: "from-neutral-500 to-neutral-700",
      highlights: ["Modular Design", "Plugin System", "Async Flows"],
      github: "https://github.com/aehenao/bot-modular-node"
    },
    {
      title: "bot_apuestas",
      category: "Automation / Data",
      description: "Herramienta automatizada para análisis y seguimiento en plataformas de apuestas.",
      technologies: ["Python", "Data Analysis", "Automation"],
      icon: TrendingUp,
      color: "from-teal-400 to-teal-600",
      highlights: ["Predictive Logic", "Real-time Tracking", "Alert System"],
      github: "https://github.com/aehenao/bot_apuestas"
    },
    {
      title: "bot_panamaebay",
      category: "Scraping / Retail",
      description: "Bot especializado en la sincronización de precios y stock con la plataforma eBay.",
      technologies: ["JavaScript", "Node.js", "eBay API"],
      icon: Bot,
      color: "from-sky-400 to-sky-600",
      highlights: ["API Sync", "Price Scraper", "Stock Control"],
      github: "https://github.com/aehenao/bot_panamaebay"
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
                  {/* Icon Header */}
                  <div className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]"></div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <project.icon className="w-20 h-20 text-white drop-shadow-lg" />
                    </motion.div>

                    {/* Category */}
                    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                      {project.badge && (
                        <span className={`px-3 py-1 ${project.badge === 'Privado' ? 'bg-red-500/90' : 'bg-amber-500/90'} backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-wider w-fit`}>
                          {project.badge}
                        </span>
                      )}
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 uppercase tracking-wider w-fit">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                    {/* Highlights */}
                    <div className="mb-4 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-blue-600">✓</span>
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
                            className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-sm font-bold transition-all flex-1 justify-center shadow-md hover:shadow-lg"
                      >
                        <Github className="w-4 h-4" />
                        Ver Código
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

