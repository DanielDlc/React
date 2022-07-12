# Spring React

## Descrição da Fundação

- Criar Html e Css
- Criar arquivo index.html, style.css e logo

### Estrutura

- Frontend estático, projeto e repositório no github
- Layaout estático, componentes React, DatePicker e React Hook useState.

## Objetivos do Projeto

### Criar projetos backend e frontend

- Salvar os projetos no Github em monorepo (Salvar os dois projetos em um mesmo repositório)
- Montar o visual estático do frontend

## Criar projeto frontend ReactJS

### Criando react com typescript com comando react-ts

```bash
Yarn create vite frontend –template react-ts
```

## Fazer download das dependências e bibliotecas

```bash
yarn
````

## Executar a aplicação

```bash
yarn dev
````

## Criar o projeto backend Spring Boot

- [Spring Initializr](https://start.spring.io/)

#### criar um projeto usando

| Project   | Language       | Versão Spring Boot                           |
| :---------- | :--------- | :---------------------------------- |
| `Maven Project` | `Java` | 2.7.1 |

#### Project Metadata

| Group   | artifact  | Name   | Description    | Package name                           |
| :---------- | :--------- | :---------- | :--------- | :---------------------------------- |
| `com.devsuperior` | `dsmeta` | `dsmeta` | `Projeto da Semana Spring React Devsuperior`| com.devsuperior.dsmeta |

### escolher dependências (ADD DEPENDENCIES... ou Ctrl + B)

- Spring Web
- Spring Data JPA
- H2 Database
- Spring Security
clicar em GENERATING...fazer download do arquivo, renomear para backend, recortar e colar ao lado do diretório frontend

### ajustar o arquivo pom.xml

incluir o plugin no final do arquivo em build -> plugins

```bash
<plugin>
 <groupId>org.apache.maven.plugins</groupId>
 <artifactId>maven-resources-plugin</artifactId>
 <version>3.1.0</version><!--$NO-MVN-MAN-VER$ -->
</plugin>
```

Atualizar o projeto após ter colado o plugin maven-resources

- Botão direito no projeto -> Maven -> Update project (force update)

## Limpar o Projeto ReactJS

### excluindo arquivos

- favicon.svg
- logo.svg
- App.Css

### modificar arquivos

- App.tsx

```bash
function App() {
  return(
    <h1>Olá, Mundo!</>
  )
}

export default App
```

- index.css

remover todas as linhas e adicionar infrmações desse arquivo abaixo, da linha 1 até 21

- [style.css](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/style.css)

## Criando Componente ReactJS

### criando sub diretórios no diretório frontend

Criar diretório src -> assets -> img e colar icone do link abaixo

- [notification-icon.svg](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/notification-icon.svg)

- Criar diretório components -> NotificationButton e o arquivo index.tsx

```bash
import Icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return(
      <div className="dsmeta-red-btn">
        <img src={Icon} alt="Notificar" />
      </div>
    )
}

export default NotificationButton
```

- modificar arquivo App.tsx

```bash
import NotificationButton from './components/NotificationButton'

function App() {
  return(
    <>
      <h1>Olá, Mundo!</h1>
      <NotificationButton />
    </>
  )
}

export default App
```

- dentro do diretório -> NotificationButton criar arquivo styles.css

```bash
.dsmeta-red-btn {
  height: 45px;
  width: 45px;
  background: rgba(255, 107, 114, 0.1);
  border: 1px solid #ff6b72;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.dsmeta-red-btn img {
  width: 19px;
}
```
