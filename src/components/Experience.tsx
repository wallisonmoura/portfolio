import { ExperienceIcon } from './icons'

const Experience = () => {
  return (
    <section
      id="section-experience"
      className="flex-col lg:h-screen gap-8 justify-center py-4 lg:pt-0"
    >
      <div className="flex border-b-2  border-blue-700 gap-4 drop-shadow-white-sm">
        <ExperienceIcon />
        <h2>Experiência Profissional</h2>
      </div>
      <div className="flex flex-col text-white bg-gradient-to-r from-blue-700 to-fuchsia-800 rounded-lg p-4 w-3/4 gap-2 drop-shadow-blue-md">
        <div className="font-semibold">
          <p className="text-white">
            Desenvolvedor Full Stack Pleno na Transformatio Technology Eireli -
            (alocado na Secretária de Defesa Social de Pernambuco)
          </p>
          <p className="text-gray-300">Set 2020 - Dez 2022</p>
        </div>
        <ul className="flex flex-col list-disc px-4">
          <li>
            Participação na criação, elaboração e desenvolvimento de novos
            sistemas e aplicativos;
          </li>
          <li>
            Colaboração com a criação dos protótipos e design dos projetos com o
            editor gráfico figma;
          </li>
          <li>
            Responsável pelo desenvolvimento de sistema web e mobile que
            melhoraram tanto os processos policias, como a agilidade no trabalho
            na segurança pública do estado. Utilizamos o trello onde eram
            definidas e refinadas as tarefas da equipe. Os versionamentos dos
            códigos através do git e o gerenciador de repositórios gitlab. A
            comunicação dos sistemas web e o mobile era através de
            microsserviços de vários departamentos governamentais e a
            autenticação pelo LDAP da ATI do estado com jwt token;
          </li>
          <li>
            Desenvolvimento de sistemas para substituição de sistemas legados;
          </li>
        </ul>
        <p>
          <b>Tecnologias e bibliotecas:</b> React, React Native, Typescript,
          Styled Component, Docker, Material UI, Context Api, Zustand, REST API,
          Axios, Micro serviços, App Center, CodePush e OpenShift;
        </p>
      </div>
    </section>
  )
}

export default Experience
