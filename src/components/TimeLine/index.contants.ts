import inicio from '../../assets/inicio.jpg'
import primeira_pesca from '../../assets/primeira_pesca.jpg'
import piscina from '../../assets/piscina.jpg'
import piscina2 from '../../assets/piscina2.jpg'
import capitolio from '../../assets/capitolio.jpg'
import alianca from '../../assets/alianca.jpg'
import argentina from '../../assets/argentina.jpg'
import holambra2 from '../../assets/holambra2.jpg'


export interface TimeLineItemProps {
    title: string;
    date: string;
    description: string;
    image: string;
}

export const TIME_LINE_ITEMS: TimeLineItemProps[] = [
    {
        title: 'UFLA',
        description: 'Vi a Yasmin pela primeira vez no dia 27/02/2020 na recepção de calouros da UFLA\n' +
            '(Universidade federal de Lavras). Ela estava apresentando a Empresa Júnior do Curso de\n' +
            'Administração Pública (a Alfa Pública Jr) para os calouros do curso (dentre eles, eu). Ela foi o\n' +
            'primeiro motivo para que surgisse em mim o interesse de entrar nessa empresa. Achei ela\n' +
            'linda, sentia que precisava me aproximar por algum motivo, mesmo sem que ela me\n' +
            'conhecesse..',
        date: '27/02/2020',
        image: inicio
    },
    {
        title: 'Alfa Pública Jr',
        description: 'Quando entrei na Alfa Pública Jr, (em junho devido à pandemia), demorei muito tempo para\n' +
            'conseguir mandar uma mensagem e falar que sentia algo por ela. O medo de não ser recíproco\n' +
            'acabou atrasando um pouco o processo. Após criar coragem, finalmente, no dia 22 de Outubro\n' +
            'de 2020, deixei o receio de lado e mandei uma mensagem para ela. A conversa foi natural, e\n' +
            'quando mal percebemos estávamos conversando todos os dias. Ligávamos um para o outro e\n' +
            'ficávamos horas e horas conversando. A verdade é que parecia que eu há conhecia há anos, e\n' +
            'a cada dia, eu me encantava mais pela pessoa que a Yasmin se apresentava',
        date: '22/10/2020',
        image: piscina2
    },
    {
        title: 'Lavras',
        description: 'Após um mês e meio de conversa, Yasmin veio para Lavras no dia 11/12/2025 para a imersão\n' +
            'da empresa Jr, e pudemos nos ver pessoalmente em um restaurante numa sexta feira à noite.\n' +
            'Pude, então, materializar o amor em forma de pessoa.',
        date: '11/12/2025',
        image: alianca
    },
    {
        title: 'Empresa Jr',
        description: 'Passamos o sábado 12/12 juntos na imersão da Empresa Jr. A companhia da Yasmin alegrou o\n' +
            'meu final de semana. Porém, despedi da Yasmin no sábado à noite, pois não sabia quando\n' +
            'veria ela novamente já que domingo, dia 13/12, iríamos embora para nossas cidades (Bom\n' +
            'Sucesso e Divinópolis). As aulas na UFLA seguiam suspensas devido à pandemia do Covid-19 e\n' +
            'não havia expectativa de retorno. ',
        date: '26/01/2024',
        image: primeira_pesca
    },
    {
        title: 'ônibus',
        description: 'Eu iria embora no domingo às 08:00 de ônibus enquanto Yasmin iria às 14:30, também de\n' +
            'ônibus. Porém, quis o destino de Deus que amanhecesse chovendo, impossibilitando que eu\n' +
            'fosse embora 08:00. O próximo ônibus era 13:00. Aproveitei do fato para ir até a casa da Sofia\n' +
            '(onde Yasmin estava ficando naqueles 3 dias) para vê-la antes de ir embora. Conversamos\n' +
            'bastante e algo me dizia que eu não poderia deixa-la ir embora sem que eu lhe fizesse um\n' +
            'pedido muito importante: “Namora comigo?” – Sim, ela respondeu. E ali iniciou o nosso para\n' +
            'sempre.',
        date: '17/03/2024',
        image: capitolio
    },
    {
        title: 'Divinópolis',
        description: 'Vivemos momentos inesquecíveis juntos. Namoramos à distância um período, onde eu ia para\n' +
            'Divinópolis frequentemente e Yasmin para Bom Sucesso e Lavras. Depois, a UFLA retornou as\n' +
            'aulas e pudemos ficar mais próximos, inclusive fazer matérias juntos. Na graduação a Yasmin\n' +
            'decidiu realizar um sonho que ela tinha, fazer um intercâmbio para Portugal. Quando me \n' +
            'questionou se eu a apoiava não hesitei, afinal, amar é respeitar os sonhos individuais de cada\n' +
            'um',
        date: '27/04/2024',
        image: piscina
    },
    {
        title: 'Holambra',
        description: 'Confesso que foram 6 meses difíceis, de muita saudade. Não houve um só dia que não\n' +
            'pensasse nela e torcia para que seu retorno fosse breve. Em momento algum deixamos nosso\n' +
            'amor esfriar, mesmo à distância. O amor, respeito e admiração perseveraram e em seu\n' +
            'retorno pudemos matar uma saudade continental',
        date: '14/07/2024',
        image: holambra2
    },
    {
        title: 'Nossas viagens',
        description: 'Viajamos bastante durante esses quase 5 anos... Casca D’anta, Roça em Piumhi, Varginha MG,\n' +
            'Cabo Frio, Mineirão, Capitólio e outros tanto locais incríveis, até chegar em Tiradentes, no dia\n' +
            '03/05/2024... Passamos um final de semana em Tiradentes para comemorar o aniversário da\n' +
            'Yasmin, porém, no dia 04/05/2024 quem ganhou o maior presente de todos fui eu: Pude ver\n' +
            'ela dizer “sim” com os olhos carregados de emoção numa tarde de sábado, um sim para nosso\n' +
            'amor, para nossa família e para a eternidade',
        date: '15/09/2024',
        image: argentina
    },

]
