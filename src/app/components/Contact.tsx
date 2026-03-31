import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "573194077980";
    const text = `Hola Andres, mi nombre es *${formData.name}*.\n\n` +
                 `*Asunto:* ${formData.subject}\n` +
                 `*Mensaje:* ${formData.message}\n\n` +
                 `*Mi correo es:* ${formData.email}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Small delay for UX feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andrestivenhenao@gmail.com",
      href: "mailto:andrestivenhenao@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 3194077980",
      href: "https://wa.me/573194077980"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Cali, Valle del Cauca",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aehenao",
      color: "hover:text-gray-900"
    }
    // {
    //   icon: Linkedin,
    //   label: "LinkedIn",
    //   href: "https://linkedin.com",
    //   color: "hover:text-blue-600"
    // },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: "https://twitter.com",
    //   color: "hover:text-blue-400"
    // }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
               Conectemos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Para Trabajar Juntos</span>
             </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes una idea innovadora? Conectemos y hagámosla realidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">Información de Contacto</h3>
<p className="text-gray-600 mb-8">
                   Disponible para consultoría técnica, desarrollo de proyectos fullstack y soluciones de IA aplicada al negocio.
                 </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                      <info.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-4">Sígueme en:</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Disponible para proyectos</span>
                </div>
                <p className="text-sm text-gray-600">
                  Actualmente aceptando nuevos proyectos y oportunidades de consultoría en IA
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="¿De qué quieres hablar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    />
                  </div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    type="submit"
                    className={`w-full px-6 py-4 font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-green-500/50"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Abriendo WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        Enviar por WhatsApp
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
