import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, TrendingUp, ShieldCheck, Trophy, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  const whatsappUrl = "https://wa.me/5511999999999";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-roque.png" alt="Roque Imóveis Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#oportunidade" className="hover:text-primary transition-colors">Oportunidade</a>
            <a href="#imoveis" className="hover:text-primary transition-colors">Imóveis</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <Button asChild variant="default" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              <a href="#contato">Falar com Especialista</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img src="/hero-bg.png" alt="Stadium Atmosphere" className="w-full h-full object-cover object-center opacity-40" />
        </div>
        
        <div className="container relative z-20 px-6 py-20 mx-auto">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT - TEXTO */}
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm tracking-widest uppercase mb-8">
          <Trophy className="w-4 h-4" /> Copa do Mundo 2026
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] tracking-tight mb-8">
          O BRASIL <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
            ESTÁ PRONTO.
          </span><br/>
          E VOCÊ?
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium leading-relaxed">
          A maior oportunidade imobiliária da década. Alugue, invista ou compre propriedades premium durante o evento mais esperado do planeta.
        </p>
      </motion.div>

      {/* 🔥 BOTÕES (AQUI) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap items-center gap-6"
      >
        <Button 
          asChild 
          size="lg" 
          className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] hover:scale-105"
        >
          <a href="#imoveis">
            Ver Propriedades Exclusivas <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>

        <Button 
          asChild 
          size="lg" 
          variant="outline" 
          className="h-14 px-8 text-lg font-bold border-white/20 hover:bg-white/5 rounded-full backdrop-blur-sm"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5 text-green-500" /> WhatsApp
          </a>
        </Button>
      </motion.div>

      {/* CONTAGEM */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-20 pt-10 border-t border-white/10"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
          Contagem Regressiva para a Glória
        </p>
        <Countdown />
      </motion.div>
    </div>

    {/* RIGHT - IMAGEM */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative hidden lg:block"
    >
      <img
        src="/hero.png"
        alt="Jogador Brasil"
        className="w-full max-w-lg mx-auto drop-shadow-[0_0_60px_rgba(251,191,36,0.35)]"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10" />
    </motion.div>

  </div>
</div>
      </section>

      {/* Stats / The Opportunity */}
      <section id="oportunidade" className="py-24 relative bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">A FEBRE JÁ COMEÇOU.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A Copa do Mundo de 2026 trará um fluxo sem precedentes de turistas, investidores e entusiastas para o Brasil. A demanda por acomodações de alto padrão está projetada para superar a oferta em 300%. A hora de garantir seu lugar é agora.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">+4M</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Turistas Esperados</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-accent mb-2">300%</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Aumento na Demanda</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">ROI</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Histórico em Mega Eventos</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-accent mb-2">VIP</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Assessoria Exclusiva</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <img src="/prop-1.jpg" alt="Luxury Living" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold">Investimento Seguro</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Propriedades selecionadas a dedo para máxima rentabilidade durante e após o evento.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="imoveis" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">SELEÇÃO PREMIUM</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Nosso portfólio exclusivo de propriedades de alto padrão, prontas para receber você ou seus inquilinos com conforto e sofisticação.</p>
            </div>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 rounded-full">
              Ver Todo o Portfólio <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/prop-2.jpg", title: "Villa Sunset", loc: "Rio de Janeiro, RJ", price: "Sob Consulta", tags: ["Vista Mar", "Piscina Infinita"] },
              { img: "/prop-3.png", title: "Penthouse Skyline", loc: "São Paulo, SP", price: "Sob Consulta", tags: ["Cobertura Duplex", "Design Moderno"] },
              { img: "/prop-1.jpg", title: "Reserva das Águas", loc: "Salvador, BA", price: "Sob Consulta", tags: ["Frente ao Mar", "Segurança 24h"] }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    {prop.tags.map(t => (
                      <span key={t} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{prop.title}</h3>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="flex items-center gap-1 text-sm"><MapPin className="w-4 h-4" /> {prop.loc}</span>
                  <span className="font-bold text-white">{prop.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Benefits */}
      <section id="servicos" className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">O PADRÃO ROQUE</h2>
            <p className="text-lg text-muted-foreground">Não somos apenas uma imobiliária. Somos sua ponte segura para o mercado imobiliário brasileiro durante o maior evento do mundo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Processos transparentes e contratos rigorosos adaptados para locações de temporada e internacionais." },
              { icon: Star, title: "Curadoria Rigorosa", desc: "Apenas 5% das propriedades avaliadas entram em nosso portfólio Copa 2026." },
              { icon: MessageCircle, title: "Concierge 24/7", desc: "Atendimento multilíngue dedicado para garantir uma experiência impecável do check-in ao check-out." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture / Contact */}
      <section id="contato" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">NÃO FIQUE DE FORA.</h2>
              <p className="text-xl text-muted-foreground mb-8">
                As melhores propriedades estão sendo negociadas agora. Deixe seus dados ou chame direto no WhatsApp para receber um portfólio sob medida para seus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-6 h-6" /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src="/logo-roque.png" alt="Roque Imóveis Logo" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                CRECI J.08.118
              </p>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Roque Imóveis. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
