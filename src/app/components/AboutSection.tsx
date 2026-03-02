import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="parcours" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mon <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Parcours</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Développeuse Full Stack et étudiante passionnée, je me spécialise dans la conception 
            d'applications web complètes, de la conception à la mise en production. Mon approche 
            combine créativité, rigueur technique et souci du détail pour transformer des idées 
            en solutions digitales performantes et élégantes. Je m'épanouis dans l'apprentissage 
            continu des nouvelles technologies et dans la création d'expériences utilisateur 
            fluides et intuitives.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
