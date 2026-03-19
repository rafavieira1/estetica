import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/config/client";
import { Check } from "lucide-react";

const faqs = [
  { 
    pergunta: "Como funciona a primeira avaliação?", 
    resposta: "Realizamos uma análise detalhada da sua pele e entendemos seus objetivos para criar um protocolo de tratamento 100% personalizado para você." 
  },
  { 
    pergunta: "Os procedimentos causam desconforto?", 
    resposta: "Nossa prioridade é o seu bem-estar. Utilizamos técnicas avançadas, produtos de alta tecnologia e anestésicos tópicos para garantir uma experiência confortável e relaxante." 
  },
  { 
    pergunta: "Em quanto tempo vejo os resultados?", 
    resposta: "Muitos de nossos tratamentos oferecem resultados imediatos, como o brilho e a textura após uma limpeza profunda. Outros estímulos de colágeno apresentam resultados progressivos nas semanas seguintes." 
  },
  { 
    pergunta: "Quais são as formas de pagamento?", 
    resposta: "Aceitamos PIX, cartões de débito e crédito, com possibilidade de parcelamento dependendo do protocolo escolhido." 
  },
  { 
    pergunta: "E se eu precisar remarcar meu horário?", 
    resposta: "Imprevistos acontecem! Pedimos apenas que nos comunique com pelo menos 24 horas de antecedência para reorganizarmos nossa agenda sem custos adicionais." 
  }
];

export default function AgendamentoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Form state
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [periodo, setPeriodo] = useState("Qualquer horário");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá! Meu nome é ${nome}. Gostaria de agendar um horário para o serviço de *${servico || "Avaliação"}* no período da *${periodo}*.`;
    const url = `https://wa.me/${CLIENT.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agendamento" className="py-24 lg:py-32 bg-white selection:bg-[#111] selection:text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* TÍTULO PADRONIZADO CENTRALIZADO NO TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24 flex justify-center"
        >
          <span className="uppercase tracking-[0.2em] text-xs font-bold border border-[#111] px-4 py-2 rounded-full text-[#111]">
            [ DÚVIDAS E RESERVAS ]
          </span>
        </motion.div>

        {/* Mudei "items-start" para "items-stretch" para a esquerda ocupar a mesma altura do Card da direita */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* LADO ESQUERDO: Título e FAQ */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
             {/* TÍTULO GRANDE (Alinhado à esquerda) com tipografia inspirada na imagem */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="mb-12"
             >
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium tracking-tight text-[#111] leading-[1.1]">
                  Reserve <span className="italic font-light">seu horário</span>
                  <br /> com antecedência
                </h2>
             </motion.div>

             {/* Spacer para jogar o FAQ lá pra baixo (igual na referência) */}
             <div className="flex-grow min-h-[4rem]"></div>

             {/* ACORDEÃO DE FAQ */}
             <div className="flex flex-col border-t border-[#111]/10 w-full mb-4">
               {faqs.map((faq, i) => (
                 <div key={i} className="border-b border-[#111]/10 overflow-hidden">
                   <button 
                     onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                     className="w-full py-5 flex items-center justify-between text-left group"
                   >
                     <span className={`text-base md:text-lg font-medium pr-8 transition-colors duration-300 ${openIndex === i ? 'text-[#111]' : 'text-[#555] group-hover:text-[#111]'}`}>
                       {faq.pergunta}
                     </span>
                     <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                       <span className={`absolute w-3 h-[1.5px] bg-[#111] transition-transform duration-300`} />
                       <span className={`absolute w-3 h-[1.5px] bg-[#111] transition-transform duration-300 ${openIndex === i ? 'rotate-0' : 'rotate-90'}`} />
                     </div>
                   </button>
                   <AnimatePresence>
                     {openIndex === i && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3, ease: "easeInOut" }}
                         className="overflow-hidden"
                       >
                         <p className="pb-6 text-sm md:text-base text-[#555] leading-relaxed max-w-lg">
                           {faq.resposta}
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
             </div>
          </div>

          {/* LADO DIREITO: Formulário */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* GRADIENTE (Visual VIP Cartão) */}
            <div className="w-full relative p-[2px] rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br flex from-[#E2D4C3] via-[#F8F4EE] to-[#D4C3AC] shadow-xl shadow-[#111]/5">
               <div className="bg-white rounded-[calc(2rem-2px)] lg:rounded-[calc(3rem-2px)] p-8 sm:p-10 lg:p-12 w-full flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Título do Card */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#111] mb-2 tracking-tight">Atendimento Exclusivo</h3>
                    <p className="text-[#555] text-sm md:text-base">Preencha os dados abaixo e entraremos em contato para confirmar sua reserva.</p>
                  </div>

                  {/* FORMULÁRIO */}
                  <form onSubmit={handleWhatsApp} className="flex flex-col gap-6">
                    
                    {/* Linha 1: Nome e Sobrenome (agora em duas colunas como na imagem) */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input 
                        type="text" 
                        required
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full bg-[#f4f4f4] text-[#111] placeholder:text-[#999] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#111]/10 transition-all font-medium text-sm"
                      />
                      <input 
                        type="text" 
                        placeholder="Sobrenome"
                        className="w-full bg-[#f4f4f4] text-[#111] placeholder:text-[#999] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#111]/10 transition-all font-medium text-sm"
                      />
                    </div>

                    {/* Linha 2: Serviço Desejado */}
                    <div>
                      <p className="text-sm font-bold text-[#111] mb-3 ml-2">Qual serviço você deseja realizar?</p>
                      <input 
                        type="text" 
                        placeholder="Insira o nome do tratamento..."
                        value={servico}
                        onChange={(e) => setServico(e.target.value)}
                        className="w-full bg-[#f4f4f4] text-[#111] placeholder:text-[#999] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#111]/10 transition-all font-medium text-sm"
                      />
                      <p className="text-xs text-[#999] mt-2 ml-4">Você receberá nosso menu após o contato.</p>
                    </div>

                    {/* Linha 3: Período Preferencial (Radio Buttons cinzas pílulas) */}
                    <div>
                      <p className="text-sm font-bold text-[#111] mb-3 ml-2">Qual sua preferência de turno?</p>
                      <div className="flex flex-col gap-3">
                        {["Manhã (09h - 12h)", "Tarde (13h - 18h)", "Sem preferência específica"].map((opcao) => (
                           <label key={opcao} className={`flex items-center gap-4 py-3 px-5 rounded-full cursor-pointer transition-colors border ${periodo === opcao ? 'bg-[#f4f4f4] border-[#d1d1d1]' : 'bg-[#f8f8f8] border-transparent hover:bg-[#f4f4f4]'}`}>
                              <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-white ${periodo === opcao ? 'border-[#111] bg-[#111]' : 'border-[#ccc]'}`}>
                                {periodo === opcao && <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />}
                              </div>
                              <span className="text-sm text-[#555] font-medium">{opcao}</span>
                           </label>
                        ))}
                      </div>
                    </div>

                    {/* Botão de Envio CTA (Agora na direita ou centralizado igual referência) */}
                    <div className="flex justify-center mt-6">
                      <button 
                        type="submit"
                        className="bg-[#111] text-white rounded-full py-4 px-10 font-bold text-sm hover:scale-[1.02] transform transition-all shadow-md active:scale-95"
                      >
                        Continuar para o WhatsApp
                      </button>
                    </div>

                  </form>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
