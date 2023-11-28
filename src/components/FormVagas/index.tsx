import { FormEvent, useState } from "react"
import { FormStyled, ButtonStyled, InputStyled } from "./styled"

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>("")
  const EnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }
  return (
    <>
      <FormStyled onSubmit={EnviarForm}>
        <InputStyled
          type="search"
          onChange={({ target }) => setTermo(target.value)}
          placeholder="Front-End, FullStack, Node, Desgin"
        />
        <ButtonStyled type="submit">Pesquisar</ButtonStyled>
      </FormStyled>
    </>
  )
}

export default FormVagas
