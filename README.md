# Aplicação no React Native

### Comandos de inicialização

```
npx react-native@latest init application --version 0.71.7

npx install-expo-modules

yarn add expo-device
```

### Configuração do Jest

[Documentação](https://callstack.github.io/react-native-testing-library/docs/getting-started)

```
yarn add --dev @testing-library/react-native

yarn add --dev @testing-library/jest-native
```

#### Rodar o teste

```
yarn test
yarn test --testPathPattern=HomeScreen
ou instalar a extensão Jest Runner
yarn test --coverage
```

#### Observações sobre os teste

- Não é regra, mas é interessante ter apenas um expect dentro de cada teste;
-

### Configurando o eslint e prettier

Usei esse [tutorial](https://github.com/devfraga/react-native-eslint-prettier) se baseando na execução dos comandos com yarn.

### Configuração de tema

Após criação das pastas styles, tokens e hooks com os arquivos, fazer a instalação das libs.

- [react-theme-provider](https://github.com/callstack/react-theme-provider)
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library#installation)

### Adicionando JSON Server

[json-server](https://github.com/typicode/json-server)
No react native a BASE_URL em HTTP deve ser: http://10.0.2.2:3001 ao invés de local host

```
npx json-server --watch ./mock/all-users.json --port 3001
```

### TODO

- [OK] criação do app com expo
- [OK] configuração do jest
- [OK] configuração do eslint e prettier
- [OK] navegação entre páginas
- [OK] configuração de tema
- [OK] configuração de chamadas API
- [OK] adicionando mock (Json Server)
- [] Criar CRUD com json-server
- [] Adicionar utils (utilidades)
- [] passagem de parametro entre telas
- [] criação de componentes mais comuns
- [] adicionando imagens e svgs
- [] configuração de pipeline
- [] configuração de asyncstorage
- [] configuração de context api
- [] autenticação com google analytics
- [] configuração do husky
- [] configuração do [storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/)
