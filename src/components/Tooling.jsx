import { Reveal } from './Reveal'
import { DieDrawing, PunchDrawing, TabletsDrawing } from './Drawings'

const items = [
  {
    title: 'Punções',
    text: 'Superiores e inferiores, com face, ponta e gravação conferidas peça a peça.',
    Drawing: PunchDrawing,
  },
  {
    title: 'Matrizes',
    text: 'Furo, acabamento e desgaste medidos para o jogo voltar alinhado à máquina.',
    Drawing: DieDrawing,
  },
  {
    title: 'Comprimidos',
    text: 'Redondos, ovais, oblongos e especiais: o ferramental certo para o formato do seu produto.',
    Drawing: TabletsDrawing,
  },
]

export function Tooling() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Ferramental</p>
          <h2>Cada peça com o cuidado que ela pede.</h2>
        </Reveal>
        <div className="tooling-list">
          {items.map(({ title, text, Drawing }, index) => (
            <Reveal as="article" key={title} className="tooling" delay={index * 120}>
              <Drawing />
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
