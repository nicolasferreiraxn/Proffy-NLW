<p align="center">
   <img src=".github/logo.png" alt="Proffy" width="280"/>
</p>

# Aula 01 🚀

- Pagina de entrada 💻
<p align="center">
   <img src=".github/web-landing.png" alt="Proffy" width="560"/>
</p>

<hr>

- Pagina de professores 💻
  - Listagem de professores.
  - Filtragem por matéria, horário e dia da semana.
  - Preço e contatos dos professores.
  <p align="center">
   <img src=".github/web-list.png" alt="Proffy" width="560"/>
  </p></br>

# Aula 02 🚀

- Desenvolvido API REST
  - Criação de professores para aulas.
  - Total de conexões já realizadas com os professores.
  - Filtragem pela matéria, aula e horário.

- Banco de dados
  - SQLite3

- Tecnologias
  - TypeScript
  - Express
  - Knex

# Aula 03

- [X] Conclusão da pagina Teacher Form.
- [X] Conclusão do front-end.
- [X] Conexão do front-end com o back-end.
- [X] Contador de conexões adicionado a pagina inicial (Landing page).

- Passos percorridos
  - React State para guardar as informações do Teacher Form.
  - Axios para conectar ao back-end.
  - Criado os componetes
    - [X] Select
    - [X] Textarea
    - [X] Input

- Features adicionadas a mais fora da aula
  - Ao acessar a rota /study agora lista todos os proffy cadastrados no banco de dados
  - Ao buscar algum proffy que não existe a aplicação responde que nada foi encontrado.
  - No back-end foi adicionado a rota /classes para listar todos os proffy
  - Componentes
    - [X] TeacherEmpty

# Aula 04 e 05

- [x] Criação da aplicação mobile em React Native
  - Tecnologias empenhadas
    - [X] React Native
    - [X] Expo
    - [X] TypeScript
    - [X] Axios
    - [X] React Native - Navigate tabs
    - [X] React Native - Async Storage
    - [X] Fonts
      - Poppins
      - Achivo
  - Filtro de proffy
  - Listagem de proffy favoritos
  - Input de pesquisa para o filtro
  - Ligação entre aplicação Mobile e API REST

# Extras

- Mobile
  - Extras adicionados
    - [X] Input retirados e adicionados Selects
    - [X] Rota para listagem das matérias
    - [X] Rota para listagem dos dias da semana
    - [X] Rota para listagem de todos os proffy sem precisar filtragem
    - [X] Messagem de quando não houver proffy ou pesquisa não sucedida
    - [X] Listagem em real time dos proffy e dos proffy favorited
  - Tecnologias
    - [X] React Native Date Picker
    - [X] React Native Modal DateTime Picker
    - [X] React Native Picker Select
</br>

- Web
  - Extras adicionados
    - [X] Listagem de proffy
    - [X] Rota para listagem das matérias
    - [X] Rota para listagem dos dias da semana
    - [X] Rota para listagem de todos os proffy sem precisar filtragem
    - [X] Teacher Form
      - Inputs de WhatsApp e Preço/Hora com mask
      - Todos os inputs são obrigatorio o preenchimento


<p>Visualização do projeto realizado.</p>

<p>
  <img src=".github/ProffysScreen.gif" alt="Proffy" width="360"/>
  <img src=".github/ProffyFavoritedAndScreen.gif" alt="Proffy" width="360"/>
  <img src=".github/SearchProffyFeature.gif" alt="Proffy" width="360"/>
  <img src=".github/GiveClassesScreen.gif" alt="Proffy" width="360"/>
</p>

</br>
</br>

# Comandos

De clone ou baixe os arquivos
</br>
<hr>

Iniciar projeto Web/React

* src/Extras/web
```
yarn install ou npm install
pós instalão
yarn start ou npm start
Rodando na porta: 3000
```

<hr>

Iniciar API REST
* src/Extras/server
```
yarn install ou npm install

pós instalão

yarn knex:migrate
yarn start ou npm start

Rodando na porta: 3333
```

<hr>

Iniciar Expo React Native
* src/Extras/mobile
```
yarn install ou npm install
pós instalão
expo-cli start
Leia o QRCode com o app expo ou configure seu emulador de sua preferencia.
```




# Observações 🔖

Conforme o projeto ouver avanços cada pasta respectivamente terá seus arquivos conforme o que foi passado.

</br>
Por exemplo, na aula 02 só foi falado sobre API e sua construção, na aula 03 vai ser falado sobre a junção
do front-end com back-end e então na pasta `Aula 03` hávera as pastas WEB e SERVER contendo os respectivos
arquivos da aula em si citada.

Na pasta "Aula 04" encontrasse o conteúdo das respectivas aulas 04 e 05, pois eu não tive tempo de realizar a aula 04 rsrs
</br>

Na pasta Extras, contem todo o ecosistema, Mobile, Web e API com as novas funcionalidades implementadas!

# Agradecimentos

<h2>Quero agradecer imensamente a Rocketseat pelo apoio e material disponibilizado!</h2>


> Com ❤ feito por Nicolas Ferreira
