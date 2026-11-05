export const contact = {
  phone: '(11) 94020-7989',
  whatsapp: '5511940207989',
  email: 'punchcare@punchcare.com.br',
  city: 'Taboão da Serra, SP',
  cnpj: '27.735.726/0001-29',
}

export const whatsappLink = (message = 'Olá! Gostaria de falar com a Punch Care.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`

export const menu = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Punch Control', href: '#punch-control' },
  { label: 'Contato', href: '#contato' },
]

export const pillars = [
  { title: 'Cuidado', text: 'Seu ferramental tratado como nosso.' },
  { title: 'Precisão', text: 'Cada medida conferida e registrada.' },
  { title: 'Conhecimento', text: 'Quem conhece compressão por dentro.' },
]

export const services = [
  {
    number: '01',
    title: 'Polimento',
    summary: 'Recuperação da face, da ponta e do corpo de punções e matrizes.',
    items: [
      'Remoção de riscos, marcas e oxidação',
      'Recuperação do acabamento da face e da gravação',
      'Menos aderência, menos lascamento e mais vida útil',
    ],
    focus: '8% 45%',
  },
  {
    number: '02',
    title: 'Dimensionamento',
    summary: 'Medição completa com relatório por peça.',
    items: [
      'Comprimento total, de trabalho e da cabeça',
      'Comparação com a tolerância do seu jogo',
      'Relatório em PDF e registro no Punch Control',
    ],
    focus: '50% 30%',
  },
  {
    number: '03',
    title: 'Representação técnica',
    summary: 'Ferramental novo com apoio na especificação.',
    items: [
      'Indicação de fabricante, aço e revestimento',
      'Desenho e RFQ do jogo para a sua máquina',
      'Acompanhamento do pedido até a entrega',
    ],
    focus: '92% 40%',
  },
]

export const steps = [
  { title: 'Coleta', text: 'Buscamos o ferramental na sua empresa.' },
  { title: 'Inspeção', text: 'Avaliamos cada peça e enviamos o orçamento.' },
  { title: 'Serviço', text: 'Polimento e medição com relatório.' },
  { title: 'Entrega', text: 'Ferramental de volta, pronto para produzir.' },
]

export const values = [
  { title: 'Missão', text: 'Prolongar a vida útil do ferramental e dar segurança à produção dos nossos clientes.' },
  { title: 'Visão', text: 'Ser referência em cuidado de ferramental de compressão no Brasil.' },
  { title: 'Valores', text: 'Precisão, transparência, compromisso com prazos e respeito ao cliente.' },
]

export const features = [
  { title: 'Produção no tablet', text: 'O mecânico inicia o lote, registra as medições de cada hora e encerra passo a passo.' },
  { title: 'Vida útil e previsão', text: 'Os kg de cada lote descontam a vida útil, e o sistema avisa antes do limite.' },
  { title: 'Controle dimensional', text: 'Medidas com faixa aceita por jogo. Valor fora da faixa abre uma ocorrência.' },
  { title: 'Rastreabilidade', text: 'Histórico de cada jogo com data e responsável, e relatórios para auditoria.' },
]
