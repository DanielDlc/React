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

## Criando projeto frontend ReactJS

### criação do react com typescript usando o  comando react-ts

```bash
Yarn create vite frontend –template react-ts
```

### fazer download das dependências e bibliotecas

```bash
yarn
````

### executar a aplicação

```bash
yarn dev
````

## Criando projeto backend Spring Boot

- [Spring Initializr](https://start.spring.io/)

### criar um projeto usando

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

- remover todas as linhas e adicionar infrmações desse arquivo abaixo, utilizas linhas 1 até 21

- [style.css](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/style.css)

## Criando Componente ReactJS

### Logo

#### Criando subdiretórios no diretório frontend

criar diretório src -> assets -> img e colar icone do link abaixo

- [notification-icon.svg](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/notification-icon.svg)

- Dentro do diretório src, criar diretório components -> NotificationButton e o arquivo index.tsx
- importar icone e css no arquivo index.tsx e definir {Icon} como alias

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

- ainda no diretório components -> NotificationButton
- criar arquivo styles.css apenas com as propiedades btn

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

- dentro do diretório principal src
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

### Header

#### criando subdiretórios no diretório frontend

#### Entrar no diretório src -> components -> Criar diretório Header e os arquivos index.tsx e styles.css

- modificar arquivo index.tsx
- fazer download da logo no link abaixo e colocar no diretório src -> assets -> img
- [logo.svg](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/logo.svg)

```bash
import logo from '../../assets/img/logo.svg'
import '../Header/styles.css'

function Header() {
  return(
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.linkedin.com/in/daniel-louro-costa-dev/">@DanielDlc</a>
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
```

- modificando diretório styles.css

```bash
header {
  background: linear-gradient(180deg, #102347 0%, #181818 100%);
  height: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dsmeta-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dsmeta-logo-container img {
  width: 23.5rem;
}

.dsmeta-logo-container h1 {
  margin-top: 1.5rem;
  font-size: 2.4rem;
}

.dsmeta-logo-container p {
  font-size: 1.4rem;
  font-weight: 300;
}

.dsmeta-card {
  background-color: #283142;
  border-radius: 10px;
  padding: 30px 10px;
}
```

## Main

#### retornando ao diretório principal src

- modificar App.tsx
- fazendo import do Header criado anteriormente e preparando para o card de vendas SalesCard

```bash
import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {
  return(
    <>
      <Header />
      <main>
        <section id="sales">
          <div class="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
```

#### criando subdiretórios no diretório frontend

#### Entrar no diretório src -> components -> Criar diretório SalesCard e os arquivos index.tsx e styles.css

- modificar arquivo index.tsx
- criar os import -> import `'../SalesCard/stiles.css'` e `import NotificationButton from '../NotificationButton'`
- adicionando informações desse arquivo abaixo, utilizando as linhas 28 até 101
- [index.html](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/index.html)
- após adicionar informações, modificar ~~class~~ para `className`

```javascript
 <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="...
```

- modificar arquivo styles.css
- adicionando informações desse arquivo abaixo, utilizando as linhas 51 até 168
- [styles.css](https://github.com/DanielDlc/React/blob/main/DSMETA-CSS/style.css)
- remover as classes ~~.dsmeta-container~~, ~~#sales~~, ~~.dsmeta-red-btns~~ e ~~.dsmeta-red-btns img~~

## Datepicker

#### dentro do diretório frontend vamos instalar o componente React Date Picker

componente útil para escolher a data desejada

- [Documentação do projeto](https://github.com/Hacker0x01/react-datepicker)

```bash
yarn add react-datepicker4.8.0 @types/react-datepicker@4.4.2
```

- dentro do diretório SalesCard -> index.tsx, iremos importar as bibliotecas

```javascript
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
```

- vamos remover as linhas ~~<input className="dsmeta-form-control" type="text" />~~
- incluir:

```javascript
<DatePicker
    selected={new Date()}
    onChange={(date: Date) => {}}
    className="dsmeta-form-control"
    dateFormat="dd/MM/yyyy"
/>
```

## React Hook useState

#### Guardar um estado do componente

##### Alterando useState, irá modificar o estado atual

- importar react hook e useState

```javascript
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import '../SalesCard/styles.css'
```

- criando uma função

```bash
function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return(
```

- declarar uma data mínima e data máxima dentro da função no arquivo index.tsx

```javascript
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>>
```
