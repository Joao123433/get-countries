# Visualizador de Bandeiras de Países
Este repositório contém um simples trecho de código JavaScript que obtém informações de países da [Restcountries API](https://restcountries.com/) e exibe dinamicamente em uma página da web. As informações exibidas incluem o nome do país, bandeira e um link para sua página na Wikipedia.

## Estrutura do Código
O código está organizado em diversas funções para melhorar a legibilidade e manutenção.
- `getCountries:` Obtém assincronamente dados de países da API Restcountries.
- `createDiv, createA, createImg, createH2:` Funções utilitárias para criar elementos HTML (div, a, img, h2) com atributos específicos.
- `rendercountries:` Renderiza informações de países criando elementos HTML e anexando-os à seção main.
- `setup:` Configura a aplicação obtendo países e renderizando-os na página da web.

## Link
https://joao123433.github.io/Calculadora-Cientifica