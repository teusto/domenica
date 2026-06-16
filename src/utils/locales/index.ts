export type Locale = "en-US" | "it-IT" | "pt-BR";

export type SectionId =
  | "init"
  | "problem"
  | "solution"
  | "services"
  | "ship-safe";

interface ServiceMappedQA {
  question: string;
  answers: string[];
}

interface Testimonial {
  name: string;
  text: string;
}

export interface LocaleMessages {
  languageSelector: {
    options: Array<{
      locale: Locale;
      label: string;
    }>;
  };
  navScroller: {
    labels: Record<SectionId, string>;
  };
  hero: {
    lineOne: string;
    lineTwo: string;
    subtitle: string;
    cta: string;
    logoAlt: string;
  };
  problem: {
    cards: Array<{
      title: string;
      description: string;
    }>;
    summary: string;
  };
  solution: {
    titleLeft: string;
    titleRight: string;
    wordCarousels: [string[], string[]];
    paragraphs: [string, string];
  };
  services: {
    title: string;
    mappedQA: ServiceMappedQA[];
    decisionHelper: string;
    cta: string;
  };
  leadMagnet: {
    title: string;
    description: string;
    meta: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  bookButton: {
    label: string;
  };
}

export const DEFAULT_LOCALE: Locale = "en-US";

export const MESSAGES_BY_LOCALE: Record<Locale, LocaleMessages> = {
  "en-US": {
    languageSelector: {
      options: [
        { locale: "en-US", label: "EN" },
        { locale: "it-IT", label: "IT" },
        { locale: "pt-BR", label: "PT" },
      ],
    },
    navScroller: {
      labels: {
        init: "home",
        problem: "problem",
        solution: "solution",
        services: "services",
        "ship-safe": "assessment",
      },
    },
    hero: {
      lineOne: "turn ai generated prototypes into",
      lineTwo: "production-ready products",
      subtitle:
        "we help founders launch faster, reduce technical risk, and prepare for growth",
      cta: "Get Started",
      logoAlt: "Domenica Logo",
    },
    problem: {
      cards: [
        {
          title: "It works today. Will it work tomorrow?",
          description:
            "AI-generated products often look finished but hide architectural decisions that become expensive as usage grows.",
        },
        {
          title: "Users find problems before you do.",
          description:
            "Security gaps, broken flows, and edge cases rarely appear during development. They appear when real users start clicking.",
        },
        {
          title: "A pitch is not a business.",
          description:
            "Investors care about execution risk, not just product ideas. A prototype alone rarely answers those concerns.",
        },
        {
          title: "Launching isn't the finish line.",
          description:
            "A product can function perfectly and still fail if the message, onboarding, and user journey don't convert.",
        },
      ],
      summary: "Shipping is easy. Reliability is hard.",
    },
    solution: {
      titleLeft: "Find Your Risks",
      titleRight: "Ship Safe Framework™",
      wordCarousels: [
        [
          "Missing Validation",
          "Missing Testing",
          "Missing Documentation",
          "Missing Support",
        ],
        ["Ship", "Verify", "Scale", "Convert"],
      ],
      paragraphs: [
        "Most AI-generated products don't fail because of ideas. They fail because of execution. Most founders skip the boring parts. That's why products break.",
        "We help you build resilient systems from day one. We bridge the gap between AI prototypes and production-ready products.",
      ],
    },
    services: {
      title: "Get unstuck at any stage of your product journey.",
      mappedQA: [
        {
          question: "I have an idea",
          answers: [
            "Architecture planning",
            "Product development & Deployment",
            "Analytics setup",
          ],
        },
        {
          question: "I already built something with AI",
          answers: [
            "Security review",
            "Scalability review",
            "Prioritized action plan",
          ],
        },
        {
          question: "I'm preparing to pitch",
          answers: ["Landing page strategy", "Showcase demo"],
        },
      ],
      decisionHelper: "Not sure which service fits?",
      cta: "Let's chat",
    },
    leadMagnet: {
      title: "Ship Safe Assessment™",
      description:
        "Most AI-generated products look finished long before they're ready. Answer 8 quick questions and discover where your biggest risks are before users, customers, or investors do.",
      meta: "Takes less than 2 minutes.",
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "John Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    bookButton: {
      label: "Book Introductory Call With Dom",
    },
  },
  "it-IT": {
    languageSelector: {
      options: [
        { locale: "en-US", label: "EN" },
        { locale: "it-IT", label: "IT" },
        { locale: "pt-BR", label: "PT" },
      ],
    },
    navScroller: {
      labels: {
        init: "home",
        problem: "problema",
        solution: "soluzione",
        services: "servizi",
        "ship-safe": "assessment",
      },
    },
    hero: {
      lineOne: "trasforma i prototipi generati con ai in",
      lineTwo: "prodotti pronti per la produzione",
      subtitle:
        "aiutiamo i founder a lanciare più velocemente, ridurre il rischio tecnico e prepararsi alla crescita",
      cta: "Inizia ora",
      logoAlt: "Logo Domenica",
    },
    problem: {
      cards: [
        {
          title: "Funziona oggi. Ma funzionerà domani?",
          description:
            "I prodotti generati con AI spesso sembrano finiti, ma nascondono decisioni architetturali che diventano costose quando l'utilizzo cresce.",
        },
        {
          title: "Gli utenti trovano i problemi prima di te.",
          description:
            "Bug di sicurezza, flussi rotti e casi limite raramente emergono durante lo sviluppo. Appaiono quando gli utenti reali iniziano a usarlo.",
        },
        {
          title: "Un pitch non è un'azienda.",
          description:
            "Gli investitori guardano al rischio di esecuzione, non solo all'idea. Un prototipo da solo raramente risponde a queste preoccupazioni.",
        },
        {
          title: "Il lancio non è il traguardo.",
          description:
            "Un prodotto può funzionare perfettamente e fallire comunque se messaggio, onboarding e percorso utente non convertono.",
        },
      ],
      summary: "Lanciare è facile. Essere affidabili è difficile.",
    },
    solution: {
      titleLeft: "Trova i tuoi rischi",
      titleRight: "Ship Safe Framework™",
      wordCarousels: [
        [
          "Validazione mancante",
          "Testing mancante",
          "Documentazione mancante",
          "Supporto mancante",
        ],
        ["Rilascia", "Verifica", "Scala", "Converti"],
      ],
      paragraphs: [
        "La maggior parte dei prodotti AI non fallisce per mancanza di idee. Fallisce per l'esecuzione. Molti founder saltano le parti noiose. Per questo i prodotti si rompono.",
        "Ti aiutiamo a costruire sistemi resilienti dal primo giorno. Colmiamo il divario tra prototipi AI e prodotti pronti per la produzione.",
      ],
    },
    services: {
      title: "Sblocca il tuo prodotto in qualunque fase del percorso.",
      mappedQA: [
        {
          question: "Ho un'idea",
          answers: [
            "Pianificazione architetturale",
            "Sviluppo prodotto e deployment",
            "Setup analytics",
          ],
        },
        {
          question: "Ho già costruito qualcosa con l'AI",
          answers: [
            "Revisione sicurezza",
            "Revisione scalabilità",
            "Piano d'azione prioritizzato",
          ],
        },
        {
          question: "Mi sto preparando al pitch",
          answers: ["Strategia landing page", "Demo showcase"],
        },
      ],
      decisionHelper: "Non sai quale servizio scegliere?",
      cta: "Parliamone",
    },
    leadMagnet: {
      title: "Ship Safe Assessment™",
      description:
        "La maggior parte dei prodotti AI sembra pronta molto prima di esserlo davvero. Rispondi a 8 domande rapide e scopri i tuoi rischi prima di utenti, clienti o investitori.",
      meta: "Richiede meno di 2 minuti.",
    },
    testimonials: {
      title: "Testimonianze",
      items: [
        {
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "John Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    bookButton: {
      label: "Prenota una call introduttiva con Dom",
    },
  },
  "pt-BR": {
    languageSelector: {
      options: [
        { locale: "en-US", label: "EN" },
        { locale: "it-IT", label: "IT" },
        { locale: "pt-BR", label: "PT" },
      ],
    },
    navScroller: {
      labels: {
        init: "início",
        problem: "problema",
        solution: "solução",
        services: "serviços",
        "ship-safe": "assessment",
      },
    },
    hero: {
      lineOne: "transforme protótipos gerados por ai em",
      lineTwo: "produtos prontos para produção",
      subtitle:
        "ajudamos founders a lançar mais rápido, reduzir risco técnico e se preparar para crescer",
      cta: "Começar",
      logoAlt: "Logo Domenica",
    },
    problem: {
      cards: [
        {
          title: "Funciona hoje. Vai funcionar amanhã?",
          description:
            "Produtos gerados por AI muitas vezes parecem prontos, mas escondem decisões de arquitetura que ficam caras conforme o uso cresce.",
        },
        {
          title: "Usuários encontram os problemas antes de você.",
          description:
            "Falhas de segurança, fluxos quebrados e casos de borda raramente aparecem no desenvolvimento. Eles surgem quando usuários reais começam a clicar.",
        },
        {
          title: "Pitch não é negócio.",
          description:
            "Investidores se importam com risco de execução, não só com a ideia. Um protótipo sozinho raramente responde essas preocupações.",
        },
        {
          title: "Lançar não é a linha de chegada.",
          description:
            "Um produto pode funcionar perfeitamente e ainda falhar se mensagem, onboarding e jornada do usuário não converterem.",
        },
      ],
      summary: "Lançar é fácil. Confiabilidade é difícil.",
    },
    solution: {
      titleLeft: "Encontre seus riscos",
      titleRight: "Ship Safe Framework™",
      wordCarousels: [
        [
          "Falta validação",
          "Falta testes",
          "Falta documentação",
          "Falta suporte",
        ],
        ["Lançar", "Validar", "Escalar", "Converter"],
      ],
      paragraphs: [
        "A maioria dos produtos com AI não falha por falta de ideia. Falha na execução. Muitos founders pulam as partes chatas. É por isso que os produtos quebram.",
        "Ajudamos você a construir sistemas resilientes desde o primeiro dia. Fechamos a lacuna entre protótipos com AI e produtos prontos para produção.",
      ],
    },
    services: {
      title: "Destrave seu produto em qualquer fase da jornada.",
      mappedQA: [
        {
          question: "Eu tenho uma ideia",
          answers: [
            "Planejamento de arquitetura",
            "Desenvolvimento e deployment",
            "Configuração de analytics",
          ],
        },
        {
          question: "Já construí algo com AI",
          answers: [
            "Revisão de segurança",
            "Revisão de escalabilidade",
            "Plano de ação priorizado",
          ],
        },
        {
          question: "Estou me preparando para pitch",
          answers: ["Estratégia de landing page", "Demo de showcase"],
        },
      ],
      decisionHelper: "Não tem certeza de qual serviço é ideal?",
      cta: "Vamos conversar",
    },
    leadMagnet: {
      title: "Ship Safe Assessment™",
      description:
        "A maioria dos produtos com AI parece pronta muito antes de realmente estar. Responda 8 perguntas rápidas e descubra seus maiores riscos antes de usuários, clientes ou investidores.",
      meta: "Leva menos de 2 minutos.",
    },
    testimonials: {
      title: "Depoimentos",
      items: [
        {
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "John Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jane Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    bookButton: {
      label: "Agende uma call introdutória com Dom",
    },
  },
};
