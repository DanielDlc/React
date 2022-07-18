# Spring React

- [Heroku](https://dsmeta-danieldlc.herokuapp.com/)

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

## Objetivos do Banco de dados

- Implementar o Back end
- Acessar o banco de dados
- Integração com SMS
- Implementação na nuvem

## Configuração de segurança

#### criação de cors para aplicação backend acessar frontend

###### com SpringToolSuite aberto, dentro do diretóro backend -> src/main/java -> com.dev...dsmeta

criar uma classe com nome SecurityConfig e um package com.devsuperior.dsmeta.config e colar as informações de segurança

```bash
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

 @Bean
 public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  
  http.headers().frameOptions().disable();
  http.cors().and().csrf().disable();
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
  http.authorizeHttpRequests((auth) -> auth.anyRequest().permitAll());

  return http.build();
 }

 @Bean
 CorsConfigurationSource corsConfigurationSource() {
  CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
  configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
  final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  source.registerCorsConfiguration("/**", configuration);
  return source;
 }
}
```

#### Rodar aplicação abrindo o Boot Dashboard

local -> dsmeta * clicar com botão direito e escolher `(Re)start`
para rodar a aplicação `tomcat` no endereço <http://localhost:8080/>

## Banco de Dados

### Criação da entidade Sale

##### criar uma classe com nome `Sale` e um package com.devsuperior.dsmeta.entities

##### criar as entidades com os nomes `id, seller_name, visited, deals, amount,date`, declarar as variáveis os tipos

##### criar construtor para criar o objeto com o mesmo nome da classe e declarar os métodos de acesso (get e set)

### Fazer mapeamento objeto-realcional(JPA)

##### com isso teremos o mapeamento de um dado representado na tabela para um dado representado Orientado a Objeto

##### criando annotation com o nome `@Entity` ao lado de uma classe para fazer o pré processamento na hora de compilar

##### customizar nome da tabela usando `@Table(name = "tb_sales")`

##### Identificar vendas do banco de dados com `@Id`  

##### concluindo a entidade Sale com `@generatedValue` para ela ser uma tabela do banco de dados

### Configurar dados de conexão do banco de dados com h2

local -> dsmeta -> src/main/resources -> application.properties colar as informações abaixo:

```bash
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

##### Configurações acima contém o endereço do banco de dados, o usuário e senha e todas as consultas na linguagem sql

##### podemos reiniciar a aplicação no local -> dsmeta * clicar com botão direito e escolher `(Re)start`

##### após reiniciar e criar a tabela pode acessar o endereço

<http://localhost:8080/h2-console>

##### precisamos colocar url exata no campo do aplicativo H2 JDBC URL: `jdbc:h2:mem:testdb`

### Fazer seed do banco de dados

##### criar um arquivo import.sql no local -> src/main/resources -> `import.sql`

##### inserir todas as informações da table no banco, colar e `(Re)start`

```javascript
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',121,67,18196.0,'2022-06-16');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',26,14,4255.0,'2022-06-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',55,42,13249.0,'2022-06-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',73,65,20751.0,'2022-06-10');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',47,25,7318.0,'2022-06-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',72,60,15608.0,'2022-06-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',97,68,8901.0,'2022-06-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',68,26,13231.0,'2022-06-02');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',73,53,19476.0,'2022-05-22');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',28,23,20530.0,'2022-05-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',83,44,4864.0,'2022-05-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',82,43,21753.0,'2022-05-06');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',43,26,7362.0,'2022-05-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',54,23,10549.0,'2022-04-28');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',125,84,13333.0,'2022-04-25');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',44,26,7431.0,'2022-04-23');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',46,25,21099.0,'2022-04-19');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',42,28,7217.0,'2022-04-19');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',52,21,10107.0,'2022-04-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',121,90,18174.0,'2022-04-17');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',65,14,8095.0,'2022-04-12');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',107,74,11507.0,'2022-04-12');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',140,74,11709.0,'2022-04-09');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',95,91,8288.0,'2022-04-08');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',68,43,17016.0,'2022-04-07');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',21,20,17126.0,'2022-04-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',38,15,7957.0,'2022-03-31');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',53,29,20903.0,'2022-03-29');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',19,10,3987.0,'2022-03-28');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',78,34,20795.0,'2022-03-27');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',83,44,4938.0,'2022-03-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',32,12,6926.0,'2022-03-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',64,33,8193.0,'2022-03-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',39,39,10557.0,'2022-03-05');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',158,84,21601.0,'2022-03-02');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',12,6,7625.0,'2022-02-29');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',82,82,22465.0,'2022-02-27');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',68,56,12595.0,'2022-02-17');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',27,13,4636.0,'2022-02-16');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',52,33,10155.0,'2022-02-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',142,81,13610.0,'2022-02-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',81,45,15306.0,'2022-02-08');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',64,35,17460.0,'2022-02-07');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',48,24,21413.0,'2022-02-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',150,82,6505.0,'2022-01-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',138,95,7983.0,'2022-01-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',70,48,9564.0,'2022-01-16');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',162,84,7302.0,'2022-01-15');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',57,54,9126.0,'2022-01-12');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',78,60,5253.0,'2022-01-06');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',81,53,11553.0,'2022-01-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',168,92,6299.0,'2021-12-28');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',48,13,22411.0,'2021-12-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',107,67,9788.0,'2021-12-24');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',106,62,18942.0,'2021-12-20');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',40,26,11731.0,'2021-12-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',101,68,19882.0,'2021-12-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',185,100,14618.0,'2021-12-17');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',82,47,7951.0,'2021-12-15');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',86,45,4147.0,'2021-12-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',95,88,12943.0,'2021-12-09');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',75,58,18747.0,'2021-12-02');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',96,50,12624.0,'2021-12-01');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',79,40,14770.0,'2021-11-21');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',73,46,14124.0,'2021-11-20');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',92,58,20953.0,'2021-11-20');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',43,30,9690.0,'2021-11-18');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',58,30,11396.0,'2021-11-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',49,14,5119.0,'2021-11-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',53,23,8206.0,'2021-11-12');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',49,25,8269.0,'2021-11-10');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',53,29,17984.0,'2021-11-09');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',43,26,3056.0,'2021-11-08');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',51,21,8624.0,'2021-11-06');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',64,41,10959.0,'2021-11-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',75,23,15883.0,'2021-10-30');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',51,44,14038.0,'2021-10-27');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',141,81,13535.0,'2021-10-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',135,98,17241.0,'2021-10-25');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',116,66,16415.0,'2021-10-19');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',60,44,5329.0,'2021-10-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',63,32,16618.0,'2021-10-07');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',176,100,5062.0,'2021-10-01');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',118,45,22235.0,'2021-09-29');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',150,97,14484.0,'2021-09-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',115,63,18081.0,'2021-09-24');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',159,88,16101.0,'2021-09-23');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',76,45,11150.0,'2021-09-22');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',65,63,17982.0,'2021-09-09');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',90,68,15927.0,'2021-09-08');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',22,12,9793.0,'2021-09-06');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',19,11,4185.0,'2021-09-05');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',68,21,15541.0,'2021-09-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',64,47,7287.0,'2021-09-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',153,92,17913.0,'2021-09-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',93,53,12648.0,'2021-09-02');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',78,32,12021.0,'2021-08-30');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',94,49,18787.0,'2021-08-29');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',54,28,3974.0,'2021-08-28');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',45,25,5681.0,'2021-08-26');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',11,1,4008.0,'2021-08-14');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',118,80,5218.0,'2021-08-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',52,21,21220.0,'2021-08-09');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',127,23,8831.0,'2021-08-06');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',78,23,13900.0,'2021-08-04');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',102,52,22086.0,'2021-08-03');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',54,53,15731.0,'2021-07-31');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Barry Allen',173,93,10816.0,'2021-07-22');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',60,45,17633.0,'2021-07-20');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',138,72,14528.0,'2021-07-19');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',147,96,21582.0,'2021-07-17');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Logan',32,12,9751.0,'2021-07-13');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',83,59,8496.0,'2021-07-08');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',58,48,5283.0,'2021-07-07');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Kal-El',55,35,20474.0,'2021-07-05');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Anakin',84,34,5787.0,'2021-07-01');
INSERT INTO tb_sales(seller_name,visited,deals,amount,date) VALUES ('Padme',79,68,11976.0,'2021-06-27');
```

## Objetivos do teste de endpoint da API REST

- Criar repository

- Criar service

- Criar controller

- Commir API test

### Criando componente do sistema responsável por acessar o banco de dados - repository

- criando interface

##### local -> dsmeta -> src/main/java -> com.devsuperiordsmeta ->  botão direito: new -> interface

##### escrever na aba Package: `com.devsuperiordsmeta.repositories` e aba Name: `SaleRepositore`

```bash
package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
```

- criando service para implementar operações de negocios como buscar vendas entre outras funções

##### local -> dsmeta -> src/main/java -> com.devsuperiordsmeta ->  botão direito: new -> class

##### escrever na aba Package: `com.devsuperiordsmeta.services` e aba Name: `SaleService`

##### criar uma função para buscar as vendas do banco de dados

```bash
package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
 
 @Autowired
 private SaleRepository repository;
 
 public List<Sale> findSales() {
  return repository.findAll();
 }

}

- criação do controller para implementação da API 
##### disponibilizar o endpoint para o frontend acessar o backend
 
##### local -> dsmeta -> src/main/java -> com.devsuperiordsmeta ->  botão direito: new -> class

##### escrever na aba Package: `com.devsuperiordsmeta.controllers` e aba Name: `SaleController`

```bash
package com.devsuperior.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
 
 @Autowired
 private SaleService service;
 
 @GetMapping
 public List<Sale> findSales(){
  return service.findSales();
 }
 
}

```

- Consulta por data

##### modificar SaleController.java para

```bash
 public Page<Sale> findSales(
   @RequestParam(value="minDate", defaultValue = "") String minDate, 
   @RequestParam(value="maxDate", defaultValue = "") String maxDate, 
   Pageable pageable){
  return service.findSales(minDate, maxDate, pageable);
 }
```

##### modificar também o SaleService.java para

```bash
 public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
  
  LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
  
  LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
  LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
  
  return repository.findSales(min, max, pageable);
 }
```

##### modificar SaleRepository.java

```bash
public interface SaleRepository extends JpaRepository<Sale, Long> {

 @Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
 Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);
 
}
```

##### após fazer as modificações recarregar a aplicação com `(Re)start`

##### com isso podemos utilizar o postman para buscar em datas específicas no banco de dados

##### com Postman aberto -> Collections clicar em + > New Collection -> colocar nome `DSMeta`

##### DSMeta -> botão direito -> Add request *acrescenta requisição, colocar o nome de `Sales`

##### agora posso escolher a opção GET e passar as datas como exemplo para buscar informações

##### `http://localhost:8080/sales?minDate=2021-11-01&maxDate=2021-12-31` clicar em Send

## Dependências Maven do Twilio para enviar SMS

### inclui dentro do backend

##### local -> dsmeta -> pom.xml > na linha 48 <dependencies>  incluir

```bash
<dependency>
 <groupId>com.twilio.sdk</groupId>
 <artifactId>twilio</artifactId>
 <version>8.31.1</version>
</dependency>
```

### definir variáveis de ambiente no arquivo application.properties

##### para configurar a variável onde a aplicação executar

##### local -> dsmeta -> src/main/resources -> application.properties

```bash
twilio.sid=${TWILIO_SID}
twilio.key=${TWILIO_KEY}
twilio.phone.from=${TWILIO_PHONE_FROM}
twilio.phone.to=${TWILIO_PHONE_TO}
```

### Criar uma classe SmsServic

##### local -> dsmeta -> src/main/java -> com.devsuperiordsmeta.services -> `SmsService`

```bash
@Service
public class SmsService {

 @Value("${twilio.sid}")
 private String twilioSid;

 @Value("${twilio.key}")
 private String twilioKey;

 @Value("${twilio.phone.from}")
 private String twilioPhoneFrom;

 @Value("${twilio.phone.to}")
 private String twilioPhoneTo;

 public void sendSms() {

  Twilio.init(twilioSid, twilioKey);

  PhoneNumber to = new PhoneNumber(twilioPhoneTo);
  PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

  Message message = Message.creator(to, from, "Teste").create();

  System.out.println(message.getSid());
 }
}
```

##### SaleController salvar endpoint para enviar a mensagem

```bash
package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;
import com.devsuperior.dsmeta.services.SmsService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
 
 @Autowired
 private SaleService service;
 
 @Autowired
 private SmsService smsService;
 
 @GetMapping
 public Page<Sale> findSales(
   @RequestParam(value="minDate", defaultValue = "") String minDate, 
   @RequestParam(value="maxDate", defaultValue = "") String maxDate, 
   Pageable pageable){
  return service.findSales(minDate, maxDate, pageable);
 }
 
 @GetMapping("/notification")
 public void notifySms() {
  smsService.sendSms();
 }
 
}

```

### Maven

- Instalação

##### [Download Maven](https://maven.apache.org/)

##### Maven é uma ferramenta de gerenciamento e automação de construção (build) de projetos

##### Após instalar é necessário adicionar nas variáveis de ambiente `path`

- verificar instalação

```bash
mvn --version
```

- adicionar manualmente e verificar a versão do seu Maven dentro do SpringTool...

##### no canto superior esquerdo do SpringTool... -> Window -> Preferences -> Installations

##### adicionar manualmente escolhendo a opção add e indicando o caminho do maven

##### pode ser possível atualizar seu projeto java caso ocorra algum problema

##### clicar no seu projeto com botão direito -> escolher opção Maven -> Update Project... -> Force Update of Snapshots/Releases

##### Após concluir, rodar o projeto novamente no Boot Dashboard em local -> dsmeta [:8080] -> botão direito  escolher (Re)start

### Heroku

##### Instalar  [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

##### criar conta no [heroku](https://www.heroku.com/)

##### Criando uma nova aplicação -> new -> Create new app -> definir um App name -> configurar as variáveis de ambiente

##### Settings -> Config vars

##### abrindo uma nova aba do navegador, entrar no site do [twilio](https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1) e informar abaixo de acordo com a variável de ambiente

```bash
TWILIO_SID #colocarAqui_Account SID
```

```bash
TWILIO_KEY #colocarAqui_Auth Token
```

```bash
TWILIO_PHONE_FROM #colocarAqui_My Twilio phone number
```

```bash
TWILIO_PHONE_TO #colocarAqui_MeuNumeroDeTelefone+55219....
```

- Criar arquivo no projeto

##### pasta principal dsmeta -> botão direito -> new -> file -> system.properties

`java.runtime.version=17`

- Após instalar Heroku CLI terminal

```bash
heroku -v
```

```bash
heroku login
```

```bash
heroku git remote -a <nome-do-app>
```

```bash
git remote -v
```

```bash
git subtree push --prefix dsmeta/backend heroku main
```

### Postman

##### efetuar download [Postman](https://www.postman.com/)

##### Com Postman aberto -> Collections -> + ->  New Collection -> renomear para dsmeta

##### Com botão direito -> add request -> Sales

##### GET `http://localhost:8080/slaes`

#### Duplicar o Sales e renomear para buscar através do heroku

##### GET `https://dsmeta-danieldlc.herokuapp.com/sales?minDate=2011-11-01&maxDate=2021-12-31`

#### enviar notificação para o celular de acordo com o banco de dados

##### GET `https://dsmeta-danieldlc.herokuapp.com/sales/53/notification`

### Integração do back end com front end e implantar front end

#### Fazendo requisição com Axios e useEffect

##### dentro da pasta front end, rodar o comando

```bash
yarn add axios@0.27.2
```

##### fazendo requisição no frontend

##### local -> dsmeta -> frontend -> src -> components -> index.tsx

##### dentro da função SalesCard

```bash
  useEffect(() => {
    axios.get("http://localhost:8080/sales")
      .then(response => {
        console.log(response.data);
        
      })
  })
```
