import { ListStyled, LinkStyled, ListTitleStyled } from "./styled"

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <ListStyled>
    <ListTitleStyled>{titulo}</ListTitleStyled>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(", ")}</li>
    </ul>
    <LinkStyled href="#">Ver detalhes e candidatar-se</LinkStyled>
  </ListStyled>
)

export default Vaga
