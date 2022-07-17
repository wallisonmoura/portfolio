import * as UI from '@mui/material'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiGit,
  SiMaterialui,
  SiReact,
  SiGithub,
  SiTypescript,
  SiNpm,
  SiYarn,
  SiMongodb,
  SiOracle,
  SiStyledcomponents,
  SiMysql,
  SiEslint,
  SiPrettier,
  SiEditorconfig,
  SiSqlite,
} from 'react-icons/si'
import { FaMobileAlt, FaNode } from 'react-icons/fa'

export const Habilidades: React.FC = () => {
  const theme = UI.useTheme()

  return (
    <UI.Stack display="flex" width="100%" gap={2}>
      <UI.Typography variant="h4">Habilidades</UI.Typography>

      <UI.Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, md: 3 }}
        textAlign="center"
      >
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiHtml5 size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>HTML5</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiCss3 size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>CSS3</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiJavascript size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Javascript</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiTypescript size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Typescript</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <FaNode size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>NodeJS</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiNpm size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>NPM</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiYarn size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>yarn</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiGit size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Git</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiGithub size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Github</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiDocker size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Docker</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiReact size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>React</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <FaMobileAlt size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>React Native</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiMongodb size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>MongoDB</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiOracle size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>OracleDB</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiMysql size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>MySQLDB</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiSqlite size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>SqliteDB</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiStyledcomponents size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Styled-Component</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiMaterialui size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Material-UI</UI.Typography>
        </UI.Grid>

        <UI.Grid item xs={6} sm={4} md={2}>
          <SiEslint size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Eslint</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiPrettier size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>Prettier</UI.Typography>
        </UI.Grid>
        <UI.Grid item xs={6} sm={4} md={2}>
          <SiEditorconfig size="4rem" color={theme.palette.text.primary} />
          <UI.Typography>EditorConfig</UI.Typography>
        </UI.Grid>
      </UI.Grid>
    </UI.Stack>
  )
}
