const {resolve} = require('path')
const {MessageMedia} = require('whatsapp-web.js');

const botResponses =  {
  
    "welcomeMessage": "Olá, sou seu assistende virtual criado pelo MinhaStack. Estamos aqui para te ajudar a encontrar os conteúdos certos para você, mas pra isso precisamos fazer algumas perguntas. Vamos começar?\n 1 - sim \n 2 - não",
    "pergunta1": "há quanto tempo você é programador?\nDigite 1 se: programa a menos de 1 ano\nDigite 2 se: programa entre 1 e 3 anos\nDigite 3 se: programa de 3 a 5 anos ",
    "monicaSticker": MessageMedia.fromFilePath(resolve(__dirname, "Stickers", "monicaDeformada.png"))
    
}

module.exports = botResponses;
