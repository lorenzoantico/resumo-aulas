# Bootcamp - DIO (Impulso full stack)

## Módulo 03 - Introdução ao javascript

### RESUMO (EM DESENVOLVIMENTO)

# variáveis

- váriaveis são elementos variáveis (var)
- constantes são elementos que não podem ser alterados. (const)

# Funções

- primeiro crie a função (function)
- é preciso chamar a função (nomefunção())

## introduzindo javascript no html

- organizando as pastas (chamado de arquitetura)
- estrutura básica de projeto: nome do projeto > index.html / readme.md / assets > css / js 

_exemplo_ 

projeto-teste

    index.html
    readme.md
    assets
        css
            style.css
        js
            index.js

## Manipulando DOM

- DOM é uma árvore de elementos / dependencias 
- para selecionar um determinado elemento no html utilizar:

``` 
    document.getElementsByTagName('h1'); //seleciona a tag h1
    var heading1 = document.getElementsByTagName('h1')[0]; //cria variavel heading 1 para receber a tag selecionada

    heading1 //mostra a tag selecionada
```



