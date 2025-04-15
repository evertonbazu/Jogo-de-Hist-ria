const questions = [
  // Capítulo 1 – 30 questões
  {
    q: "O que é a História como ciência?",
    options: [
      "É a arte de contar histórias fictícias.",
      "É a investigação das ações humanas ao longo do tempo.",
      "É o estudo dos mitos e lendas das civilizações antigas.",
      "É uma ciência exata sobre o tempo e o espaço."
    ],
    correct: 1,
    feedback: "A História investiga ações humanas ao longo do tempo, não é ficção."
  },
  {
    q: "Qual dessas situações mostra a presença da História no dia a dia?",
    options: [
      "Comprar roupas da moda.",
      "Comer um alimento típico de festa junina.",
      "Dormir até mais tarde.",
      "Jogar videogame com os amigos."
    ],
    correct: 1,
    feedback: "Festas e tradições têm origem histórica."
  },
  {
    q: "Qual é o papel da ampulheta como símbolo da História?",
    options: [
      "Representa o tempo das antigas civilizações.",
      "Mostra que a História só existe no passado.",
      "Foi usada para medir o tempo e representa a passagem do tempo.",
      "Simboliza a memória e a tecnologia do futuro."
    ],
    correct: 2,
    feedback: "A ampulheta simboliza o tempo que passa e a importância da História."
  },
  {
    q: "Por que, antigamente, poucos eram considerados sujeitos históricos?",
    options: [
      "Porque só existiam reis e imperadores.",
      "Porque apenas líderes e governantes eram registrados.",
      "Porque ninguém mais fazia ações importantes.",
      "Porque não havia população suficiente."
    ],
    correct: 1,
    feedback: "No passado, só se registravam as ações dos governantes."
  },
  {
    q: "Qual das opções representa uma fonte histórica?",
    options: [
      "Um brinquedo antigo guardado por gerações.",
      "Uma opinião na internet.",
      "Um filme de ficção científica.",
      "Uma piada contada na escola."
    ],
    correct: 0,
    feedback: "Fontes históricas são vestígios do passado."
  },
  {
    q: "Hoje, quem pode ser considerado sujeito histórico?",
    options: [
      "Apenas pessoas que trabalham no governo.",
      "Somente adultos que fazem leis.",
      "Qualquer pessoa que, com suas ações, transforma a realidade.",
      "Alunos que tiram boas notas na escola."
    ],
    correct: 2,
    feedback: "Hoje, todos que agem podem ser sujeitos históricos."
  },
  {
    q: "O que mudou na forma de contar a História ao longo do tempo?",
    options: [
      "A inclusão de datas mais recentes.",
      "A substituição dos livros pelos vídeos.",
      "A valorização de diferentes grupos sociais.",
      "O fim do uso de documentos oficiais."
    ],
    correct: 2,
    feedback: "A História passou a incluir diferentes perspectivas."
  },
  {
    q: "Por que é importante estudar a História?",
    options: [
      "Para saber as datas de todos os acontecimentos.",
      "Para memorizar nomes de imperadores e presidentes.",
      "Para entender como o passado influencia o presente e o futuro.",
      "Para aprender somente sobre guerras e revoluções."
    ],
    correct: 2,
    feedback: "Estudar História ajuda a compreender nosso mundo."
  },
  {
    q: "Qual ação de Roberto, dono de loja de brinquedos, mostra que ele é um sujeito histórico?",
    options: [
      "Comprar novos brinquedos para a loja.",
      "Fazer promoções no Natal.",
      "Doar brinquedos a crianças carentes.",
      "Brincar com seus próprios filhos."
    ],
    correct: 2,
    feedback: "Ação solidária influencia a comunidade."
  },
  {
    q: "Por que as crianças são consideradas sujeitos históricos?",
    options: [
      "Porque sempre foram tratadas como adultos.",
      "Porque aprendem sobre História na escola.",
      "Porque suas ações também influenciam a sociedade.",
      "Porque gostam de brincar e aprender."
    ],
    correct: 2,
    feedback: "Crianças participam e transformam a sociedade."
  },
  {
    q: "Qual documento ajudou a contar a história de Hana Brady?",
    options: [
      "Um jornal da época.",
      "Um livro de História.",
      "Uma mala com objetos pessoais.",
      "Uma carta do governo."
    ],
    correct: 2,
    feedback: "A mala de Hana é um registro histórico pessoal."
  },
  {
    q: "Como as crianças eram vistas no passado?",
    options: [
      "Como seres com direitos garantidos.",
      "Como pessoas incapazes de aprender.",
      "Como adultos em miniatura, com responsabilidades.",
      "Como líderes da família."
    ],
    correct: 2,
    feedback: "No passado, crianças eram tratadas como adultos em miniatura."
  },
  {
    q: "O que provocou a mudança na visão sobre a infância?",
    options: [
      "A criação de programas de TV.",
      "A construção de escolas públicas.",
      "O surgimento de leis e de um ensino pensado para elas.",
      "O aumento da população infantil."
    ],
    correct: 2,
    feedback: "A criação de leis e a educação reformaram a visão sobre a infância."
  },
  {
    q: "Qual desses registros pode ser considerado documento histórico?",
    options: [
      "Um brinquedo moderno.",
      "Um desenho feito por uma criança durante a guerra.",
      "Um brinquedo novo comprado na loja.",
      "Um comercial de TV atual."
    ],
    correct: 1,
    feedback: "Registros artísticos contam a história."
  },
  {
    q: "Qual conquista foi muito importante na luta das mulheres?",
    options: [
      "A construção de escolas femininas.",
      "O direito de trabalhar fora de casa.",
      "O direito ao voto.",
      "A liberdade de usar roupas coloridas."
    ],
    correct: 2,
    feedback: "O direito ao voto foi fundamental para a emancipação feminina."
  },
  {
    q: "O que mostra a imagem de mulheres inglesas em 1908?",
    options: [
      "Um desfile da alta sociedade.",
      "Uma reunião política de homens.",
      "Um grupo exigindo direitos iguais.",
      "Uma homenagem às rainhas do passado."
    ],
    correct: 2,
    feedback: "As mulheres se organizaram para conquistar direitos iguais."
  },
  {
    q: "Quem foi Celina Guimarães Viana?",
    options: [
      "A primeira presidente do Brasil.",
      "Uma mulher que ensinava História na escola.",
      "A primeira mulher registrada a votar no Brasil.",
      "A líder de um movimento estudantil."
    ],
    correct: 2,
    feedback: "Celina foi pioneira no voto feminino no Brasil."
  },
  {
    q: "Por que as mulheres precisaram lutar por seus direitos?",
    options: [
      "Porque não queriam trabalhar.",
      "Porque tinham poucos deveres.",
      "Porque não eram reconhecidas como cidadãs.",
      "Porque não gostavam da política."
    ],
    correct: 2,
    feedback: "A luta foi necessária para o reconhecimento da cidadania feminina."
  },
  {
    q: "O que mostra que estudantes também fazem parte da História?",
    options: [
      "A criação de festas escolares.",
      "A participação em manifestações importantes.",
      "A boa participação nas aulas.",
      "O uso de uniforme escolar."
    ],
    correct: 1,
    feedback: "Estudantes também deixam sua marca na história com mobilizações."
  },
  {
    q: "Qual movimento estudantil contribuiu para o impeachment de Fernando Collor?",
    options: [
      "Movimento pela Cidadania.",
      "Caras Pintadas.",
      "Revolta dos Estudantes.",
      "Protesto das Escolas Livres."
    ],
    correct: 1,
    feedback: "O movimento dos Caras Pintadas foi crucial contra Collor."
  },
  {
    q: "O que é cidadania?",
    options: [
      "O conjunto de regras para morar em outro país.",
      "A união de leis que só os políticos conhecem.",
      "A prática de direitos e deveres por quem vive em sociedade.",
      "A liberdade de escolher o que quiser."
    ],
    correct: 2,
    feedback: "Cidadania significa exercer direitos e cumprir deveres em sociedade."
  },
  {
    q: "Qual é um exemplo de dever do cidadão?",
    options: [
      "Ter acesso à saúde pública.",
      "Ir à escola.",
      "Cumprir as leis e respeitar o próximo.",
      "Assistir às propagandas políticas."
    ],
    correct: 2,
    feedback: "Cumprir as leis e respeitar o próximo é um dever cidadão."
  },
  {
    q: "O que é democracia representativa?",
    options: [
      "O sistema onde todos votam e tomam decisões juntos.",
      "Quando apenas o presidente decide tudo.",
      "Quando os cidadãos escolhem representantes para tomar decisões.",
      "Quando os governadores são escolhidos pelo exército."
    ],
    correct: 2,
    feedback: "Democracia representativa baseia-se na escolha de representantes."
  },
  {
    q: "Quem é obrigado a votar nas eleições no Brasil?",
    options: [
      "Crianças e adolescentes.",
      "Pessoas entre 18 e 70 anos.",
      "Jovens de 16 anos.",
      "Maiores de 70 anos."
    ],
    correct: 1,
    feedback: "No Brasil, a votação é obrigatória para pessoas de 18 a 70 anos."
  },
  {
    q: "Qual é a importância da memória na História?",
    options: [
      "Permite que a gente se esqueça do passado.",
      "Ajuda a decorar datas e nomes.",
      "Garante que fatos importantes sejam lembrados e estudados.",
      "É usada só em museus e bibliotecas."
    ],
    correct: 2,
    feedback: "A memória é crucial para preservar e estudar a História."
  },
  {
    q: "O que representa a mala de Hana Brady?",
    options: [
      "Um brinquedo antigo.",
      "Uma lembrança pessoal sem valor histórico.",
      "Um documento que permitiu conhecer a história de uma criança na guerra.",
      "Um presente que foi perdido no tempo."
    ],
    correct: 2,
    feedback: "A mala de Hana é um registro importante da história vivida na guerra."
  },
  {
    q: "Por que a cidadania é considerada uma conquista histórica?",
    options: [
      "Porque surgiu com os impérios antigos.",
      "Porque sempre foi garantida por leis.",
      "Porque foi fruto de lutas sociais ao longo do tempo.",
      "Porque só os adultos a possuem."
    ],
    correct: 2,
    feedback: "A cidadania é resultado de lutas históricas coletivas."
  },
  {
    q: "O que mostra que nem todos os direitos são respeitados?",
    options: [
      "Todos os espaços públicos têm acessibilidade.",
      "Existem leis que garantem tudo igualmente.",
      "Crianças ainda enfrentam dificuldades, como Isabel na biblioteca.",
      "As pessoas não gostam de seguir regras."
    ],
    correct: 2,
    feedback: "Casos como o de Isabel indicam desafios na acessibilidade."
  },
  {
    q: "Qual é o papel das crianças como sujeitos históricos?",
    options: [
      "Ajudar os adultos a lembrar do passado.",
      "Repetir o que os mais velhos dizem.",
      "Pensar, agir e transformar o lugar onde vivem.",
      "Apenas estudar o conteúdo da escola."
    ],
    correct: 2,
    feedback: "Crianças têm a capacidade de transformar sua realidade."
  },
  {
    q: "Como a memória coletiva é construída?",
    options: [
      "Por meio de documentos oficiais.",
      "Por meio das lembranças registradas por grupos e sociedades.",
      "Pelos jornais do governo.",
      "Somente por monumentos antigos."
    ],
    correct: 1,
    feedback: "A memória coletiva se forma com relatos e registros da sociedade."
  },
  // Capítulo 2 – 30 questões
  {
    q: "Qual é a principal função do historiador?",
    options: [
      "Prever o futuro.",
      "Criar histórias de ficção.",
      "Estudar o passado para entender o presente.",
      "Ensinar matemática na escola."
    ],
    correct: 2,
    feedback: "O historiador analisa vestígios do passado para entender o presente."
  },
  {
    q: "Onde o historiador pode trabalhar?",
    options: [
      "Apenas em escolas.",
      "Apenas em bibliotecas.",
      "Em escolas, museus, arquivos e pesquisas.",
      "Só em editoras de livros."
    ],
    correct: 2,
    feedback: "O historiador atua em diversas áreas, como ensino, museus, arquivos e pesquisas."
  },
  {
    q: "O que são fontes históricas?",
    options: [
      "Histórias contadas por professores.",
      "Registros deixados pelos governos.",
      "Vestígios do passado que ajudam o historiador.",
      "Objetos antigos encontrados por acaso."
    ],
    correct: 2,
    feedback: "Fontes históricas são vestígios que auxiliam na pesquisa do passado."
  },
  {
    q: "Qual dessas opções é uma fonte histórica escrita?",
    options: [
      "Pintura.",
      "Carta antiga.",
      "Escultura.",
      "Canção popular."
    ],
    correct: 1,
    feedback: "Uma carta antiga é uma fonte histórica escrita."
  },
  {
    q: "O que torna uma fonte importante para o historiador?",
    options: [
      "Ter muitos desenhos.",
      "Estar colorida.",
      "Ajudar a entender o passado.",
      "Ser encontrada na internet."
    ],
    correct: 2,
    feedback: "O valor de uma fonte está em sua relevância para interpretar o passado."
  },
  {
    q: "Por que a História pode ser reescrita?",
    options: [
      "Porque os historiadores gostam de mudar tudo.",
      "Porque surgem novas fontes e interpretações.",
      "Porque os livros estão errados.",
      "Porque as pessoas esquecem o passado."
    ],
    correct: 1,
    feedback: "Novas fontes e interpretações podem alterar nossa compreensão histórica."
  },
  {
    q: "Qual é o papel do museu na preservação da História?",
    options: [
      "Ensinar matemática.",
      "Guardar objetos importantes do passado.",
      "Vender lembrancinhas.",
      "Proteger a natureza."
    ],
    correct: 1,
    feedback: "Museus preservam objetos que são importantes vestígios históricos."
  },
  {
    q: "Um relato contado por uma pessoa mais velha é uma fonte:",
    options: [
      "Visual.",
      "Escrita.",
      "Oral.",
      "Científica."
    ],
    correct: 2,
    feedback: "Relatos de pessoas são considerados fontes orais."
  },
  {
    q: "Qual dessas opções pode ser considerada uma fonte visual?",
    options: [
      "Entrevista com um morador.",
      "Foto antiga da cidade.",
      "Carta manuscrita.",
      "Poema popular."
    ],
    correct: 1,
    feedback: "Fotos são fontes visuais importantes para o historiador."
  },
  {
    q: "O que significa tombamento de um bem cultural?",
    options: [
      "Derrubar o bem.",
      "Mudar sua localização.",
      "Proteger e preservar o bem.",
      "Guardá-lo em segredo."
    ],
    correct: 2,
    feedback: "Tombamento é o processo legal de proteger um bem cultural."
  },
  {
    q: "Quem é responsável pelos patrimônios culturais do Brasil?",
    options: [
      "UNESCO.",
      "IBGE.",
      "IPHAN.",
      "INEP."
    ],
    correct: 2,
    feedback: "O IPHAN é o órgão responsável pelos patrimônios culturais no Brasil."
  },
  {
    q: "A UNESCO cuida de patrimônios:",
    options: [
      "Só do Brasil.",
      "Da América do Sul.",
      "Do mundo todo.",
      "Apenas da Europa."
    ],
    correct: 2,
    feedback: "A UNESCO protege patrimônios culturais em todo o mundo."
  },
  {
    q: "Qual desses é um exemplo de patrimônio cultural material?",
    options: [
      "A literatura de cordel.",
      "O frevo.",
      "O Museu do Ipiranga.",
      "Uma lenda indígena."
    ],
    correct: 2,
    feedback: "O Museu do Ipiranga é um patrimônio material."
  },
  {
    q: "Qual desses é um patrimônio imaterial?",
    options: [
      "Um castelo medieval.",
      "A dança do frevo.",
      "Um livro antigo.",
      "Uma cidade histórica."
    ],
    correct: 1,
    feedback: "O frevo é considerado patrimônio imaterial."
  },
  {
    q: "O que são vestígios históricos?",
    options: [
      "Sobras de objetos sem valor.",
      "Restos de comida do passado.",
      "Marcas deixadas pelas ações humanas.",
      "Palavras inventadas pelos historiadores."
    ],
    correct: 2,
    feedback: "Vestígios históricos são marcas deixadas por ações humanas."
  },
  {
    q: "Por que preservar o patrimônio é importante?",
    options: [
      "Para fazer propaganda.",
      "Para deixar a cidade bonita.",
      "Para manter viva a memória de um povo.",
      "Para ganhar prêmios internacionais."
    ],
    correct: 2,
    feedback: "Preservar o patrimônio garante a continuidade da memória cultural."
  },
  {
    q: "Qual é a função de um inventário cultural?",
    options: [
      "Vender produtos antigos.",
      "Registrar informações sobre patrimônios.",
      "Contar histórias fictícias.",
      "Apagar memórias antigas."
    ],
    correct: 1,
    feedback: "Inventários registram informações importantes sobre bens culturais."
  },
  {
    q: "A cidade-fortaleza de Fasil Ghebbi, na Etiópia, é exemplo de:",
    options: [
      "Fonte oral.",
      "Patrimônio imaterial.",
      "Patrimônio cultural da humanidade.",
      "Invenção moderna."
    ],
    correct: 2,
    feedback: "Fasil Ghebbi é um patrimônio cultural da humanidade."
  },
  {
    q: "A fonte usada por Pedro no caso do “Casarão da Melodia” foi:",
    options: [
      "Escrita.",
      "Visual.",
      "Oral.",
      "Arqueológica."
    ],
    correct: 2,
    feedback: "A fonte utilizada foi oral, baseada em relatos de moradores."
  },
  {
    q: "O frevo é praticado principalmente no:",
    options: [
      "Carnaval de Pernambuco.",
      "Festival de Parintins.",
      "Réveillon do Rio.",
      "Bumba-meu-boi do Maranhão."
    ],
    correct: 0,
    feedback: "O frevo é tradicionalmente praticado no Carnaval de Pernambuco."
  },
  {
    q: "A literatura de cordel é patrimônio cultural do tipo:",
    options: [
      "Material.",
      "Imaterial.",
      "Visual.",
      "Natural."
    ],
    correct: 1,
    feedback: "A literatura de cordel é considerada patrimônio imaterial."
  },
  {
    q: "O trabalho do historiador é marcado pela:",
    options: [
      "Cópia de fatos.",
      "Descoberta e interpretação.",
      "Criação de novas histórias.",
      "Publicação de revistas."
    ],
    correct: 1,
    feedback: "O historiador investiga, descobre e interpreta vestígios do passado."
  },
  {
    q: "Os patrimônios culturais podem ser:",
    options: [
      "Apenas visuais.",
      "Apenas artísticos.",
      "Materiais ou imateriais.",
      "Temporários ou digitais."
    ],
    correct: 2,
    feedback: "Os patrimônios podem ser divididos em materiais e imateriais."
  },
  {
    q: "Um sítio arqueológico é exemplo de:",
    options: [
      "Fonte oral.",
      "Patrimônio cultural material.",
      "Festa religiosa.",
      "Livro escolar."
    ],
    correct: 1,
    feedback: "Sítios arqueológicos são exemplos de patrimônios culturais materiais."
  },
  {
    q: "Qual alternativa mostra algo que o historiador pode pesquisar?",
    options: [
      "O futuro da humanidade.",
      "O gosto musical da turma.",
      "A origem de uma comunidade pesqueira.",
      "O horóscopo da semana."
    ],
    correct: 2,
    feedback: "O historiador pode pesquisar a origem de comunidades locais."
  },
  {
    q: "Para interpretar fontes, o historiador deve:",
    options: [
      "Apenas ler livros antigos.",
      "Fazer cópias e guardá-las.",
      "Analisar vestígios com atenção e cruzar informações.",
      "Imitar os costumes antigos."
    ],
    correct: 2,
    feedback: "A análise detalhada e o cruzamento de informações são essenciais."
  },
  {
    q: "Quando algo é tombado, significa que:",
    options: [
      "Será destruído.",
      "Deve ser preservado e protegido.",
      "Vai ser esquecido.",
      "Pode ser vendido."
    ],
    correct: 1,
    feedback: "Tombamento garante a proteção legal do bem cultural."
  },
  {
    q: "O Museu Britânico está localizado em:",
    options: [
      "Paris.",
      "Roma.",
      "Londres.",
      "Lisboa."
    ],
    correct: 2,
    feedback: "O Museu Britânico está localizado em Londres."
  },
  {
    q: "O Museu do Ipiranga homenageia:",
    options: [
      "Abolição da Escravatura.",
      "Revolução de 1930.",
      "A Proclamação da Independência.",
      "Ditadura Militar."
    ],
    correct: 2,
    feedback: "O Museu do Ipiranga celebra a Proclamação da Independência."
  },
  {
    q: "Preservar o patrimônio ajuda a:",
    options: [
      "Esquecer o passado.",
      "Ganhar dinheiro com turismo.",
      "Valorizar a identidade e a cultura dos povos.",
      "Acabar com os museus."
    ],
    correct: 2,
    feedback: "Preservar o patrimônio fortalece a identidade cultural."
  }
];
