import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              Diseñado y desarrollado con{" "}
              <Heart className="inline w-4 h-4 text-blue-500 fill-blue-500" />
              {" "}por un apasionado de la tecnología
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
            <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">Sobre Mí</a>
              <span>•</span>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experiencia</a>
              <span>•</span>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Proyectos</a>
              <span>•</span>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
