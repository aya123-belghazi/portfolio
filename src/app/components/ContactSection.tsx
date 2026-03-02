import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export function ContactSection() {
  return (
    <section id="contact" className="pt-20 pb-6 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête Contactez-moi (Optionnel, tu peux l'enlever si tu veux juste le footer) */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contactez-moi
          </motion.h2>
          <motion.p className="text-lg text-gray-600">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </motion.p>
        </motion.div>

        {/* --- DÉBUT DU BLOC FOOTER UNIFIÉ --- */}
        <motion.div 
          className="flex flex-col w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1. Les boutons de réseaux sociaux au centre */}
          <div className="flex flex-col justify-center items-center mb-6">
            <div className="flex gap-6 mb-4">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=belghaziaya92@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 flex items-center justify-center bg-[#00c2cb] text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
  aria-label="Email"
>
                <Mail className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/aya123-belghazi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-[#0f172a] text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/aya-belghazi-741133361/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-[#1d4ed8] text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Connectons-nous sur les réseaux professionnels
            </p>
          </div>

          {/* 2. Première ligne de séparation */}
          <div className="w-full border-t border-gray-200 my-8"></div>

          {/* 3. Les 3 colonnes du Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Colonne Gauche : Logo et Description */}
            <div className="space-y-4 md:col-span-1 md:pr-8">
              <div className="flex items-center gap-3">
                {/* J'ai entouré le Logo d'une div colorée pour reproduire ton design */}
                <div className="w-10 h-10 bg-[#00c2cb] rounded-full flex items-center justify-center text-white">
                   <Logo />
                </div>
                <span className="text-xl font-extrabold text-gray-900">A.B Dev</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Développeuse Full Stack passionnée, créant des expériences web modernes et performantes avec expertise et créativité.
              </p>
            </div>

            {/* Colonne Centrale : Navigation */}
            <div className="flex flex-col md:items-center">
              <div className="text-left">
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Navigation
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#projets" className="text-gray-500 hover:text-[#00c2cb] transition-colors duration-200 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      Mes Projets
                    </a>
                  </li>
                  <li>
                    <a href="#competences" className="text-gray-500 hover:text-[#00c2cb] transition-colors duration-200 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      Mes Compétences
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-500 hover:text-[#00c2cb] transition-colors duration-200 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonne Droite : Profil */}
            {/* Colonne Droite : Profil */}
            <div className="flex flex-col md:items-end md:text-right">
              <div className="text-left md:text-right">
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Profil
                </h4>
                <div className="space-y-3 text-sm text-gray-500">
                  <p className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4 text-[#00c2cb]" />
                    Tanger, Maroc
                  </p>
                  {/* Nouvelle ligne professionnelle au lieu de "Étudiante" */}
                  <p>Prête pour de nouveaux défis</p>
                  
                  {/* Nouvelle ligne pour la disponibilité */}
                  <p className="text-[#00c2cb] font-semibold pt-1">
                    Disponible immédiatement
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 4. Deuxième ligne de séparation */}
          <div className="w-full border-t border-gray-100 my-6"></div>

          {/* 5. Copyright */}
          <div className="text-center text-xs text-gray-400">
            <p>© 2026 Dev Portfolio - AYA BELGHAZI. Tous droits réservés.</p>
          </div>
        </motion.div>
        {/* --- FIN DU BLOC FOOTER UNIFIÉ --- */}

      </div>
    </section>
  );
}