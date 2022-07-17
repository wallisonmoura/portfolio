import * as UI from '@mui/material'

export const Experiencias = () => {
  const theme = UI.useTheme()
  return (
    <UI.Stack width="100%" height="100%" gap={2}>
      <UI.Typography variant="h4">Experiências</UI.Typography>
      <UI.Stack>
        <UI.Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <UI.Typography variant="h6">Desenvolvedor Pleno</UI.Typography>

          <UI.Typography variant="h6">Set/2020 - Atualmente</UI.Typography>
        </UI.Stack>
        <UI.Typography
          variant="body1"
          fontWeight={theme.typography.fontWeightBold}
        >
          Microcis - Secretária de Defesa Social/PE
        </UI.Typography>
        <UI.Typography variant="body1">
          Criação de protótipos de novos projetos utilizando o figma,
          desenvolvimento de API’s rest com Nodejs, desenvolvimento de sistemas
          Web e Mobile utilizando React e React Native com Typescript,
          atualizações de projetos legados, documentação e arquitetura dos
          sistemas;
        </UI.Typography>
      </UI.Stack>

      <UI.Divider />
      <UI.Stack>
        <UI.Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <UI.Typography variant="h6">
            Monitor de Laboratório de Informática do 1º período dos curso de ADS
            e SI
          </UI.Typography>
          <UI.Typography variant="h6">Fev/2020 –Jun/2020</UI.Typography>
        </UI.Stack>
        <UI.Typography
          variant="body1"
          fontWeight={theme.typography.fontWeightBold}
        >
          Faculdade Católica Imaculada Conceição do Recife
        </UI.Typography>
        <UI.Typography variant="body1">
          Auxiliar e esclarecer dúvidas aos estudantes em atividades propostas
          pelos Professores relacionadas em Lógica de programação, banco de
          dados, programação web, metodologias e ferramentas.
        </UI.Typography>
      </UI.Stack>
      <UI.Divider />
      <UI.Stack>
        <UI.Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <UI.Typography variant="h6">
            Auxiliar da Relações Públicas
          </UI.Typography>
          <UI.Typography variant="h6">Mar/2012 – Fev/2019</UI.Typography>
        </UI.Stack>
        <UI.Typography
          variant="body1"
          fontWeight={theme.typography.fontWeightBold}
        >
          Exército Brasileiro
        </UI.Typography>
        <UI.Typography variant="body1">
          Auxiliar administrativo, realização de artes gráficas e mídias
          digitais, publicações de matérias em intranet e internet no sistema
          Joomla;
        </UI.Typography>
      </UI.Stack>
    </UI.Stack>
  )
}
