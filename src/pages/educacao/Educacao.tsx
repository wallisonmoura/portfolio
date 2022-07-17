import * as UI from '@mui/material'

export const Educacao: React.FC = () => {
  const theme = UI.useTheme()
  return (
    <UI.Stack width="100%" height="100%" gap={2}>
      <UI.Typography variant="h4">Formação Superior</UI.Typography>

      <UI.Typography variant="body1">
        Graduado em Análise e Desenvolvimento de Sistemas. Faculdade Católica
        Imaculada Conceição do Recife.
      </UI.Typography>
      <UI.Divider />
      <UI.Typography variant="h4">Formação complementar</UI.Typography>

      <UI.Stack>
        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Fundamentos de Arquitetura de Software:
          </UI.Typography>
          <UI.Typography variant="body1">Full Cycle (15h) – 2022</UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Docker:
          </UI.Typography>
          <UI.Typography variant="body1">Full Cycle (21h) – 2021</UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Padrões e técnicas avançada com Git e Github:
          </UI.Typography>
          <UI.Typography variant="body1">Full Cycle (9h) – 2021</UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Projetos Ágeis com SCRUM:
          </UI.Typography>
          <UI.Typography variant="body1">
            Digital Innovation One Inc (2h) – 2020
          </UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Javascript Completo:
          </UI.Typography>
          <UI.Typography variant="body1">
            Udemy cursos (35,5h) – 2020
          </UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Academia Accenture Nodejs:
          </UI.Typography>
          <UI.Typography variant="body1">Accenture (60h) – 2020</UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Mongo, Express, Angular, Node:
          </UI.Typography>
          <UI.Typography variant="body1">
            Udemy cursos (13,5h) - 2020
          </UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Java:
          </UI.Typography>
          <UI.Typography variant="body1">
            Udemy cursos (49,5h) – 2019;
          </UI.Typography>
        </UI.Stack>
        <UI.Divider />

        <UI.Stack width="100%" flexDirection="row" gap={1}>
          <UI.Typography
            variant="body1"
            fontWeight={theme.typography.fontWeightBold}
          >
            Curso de Introdução ao Desenvolvimento Web: HTML e CSS:
          </UI.Typography>
          <UI.Typography>Google Actívate (40h) – 2019</UI.Typography>
        </UI.Stack>
        <UI.Divider />
      </UI.Stack>
    </UI.Stack>
  )
}
