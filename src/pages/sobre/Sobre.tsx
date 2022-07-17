import * as UI from '@mui/material'

export const Sobre = () => {
  return (
    <UI.Stack width="100%" height="100%" gap={2}>
      <UI.Typography variant="h4">Sobre</UI.Typography>

      <UI.Typography>
        Olá, meu nome é Wallison Moura, sou formando em Análise e
        Desenvolvimento de sistema pela Faculdade Catolica Imaculada Conceição
        do Recife, atualmente trabalho como Desenvolvedor Pleno pela empresa
        Transformatio Technology Eireli (alocado na Secretária de Defesa Social
        de Pernambuco) na qual venho desenvolvendo novos sistema e atualizações
        de sistemas legados.
      </UI.Typography>
      <UI.Typography>
        Sou apaixonado por inovação e experimentos em projetos com novas
        tecnologias, sempre busco expandir meus conhecimentos, para cada vez me
        especializar nesta área na qual escolhi para minha vida.
      </UI.Typography>
    </UI.Stack>
  )
}
