const { Client} = require('whatsapp-web.js');
const client = new Client();

const qrcode = require('qrcode-terminal');


//mensagens do questionário: 
const {welcomeMessage, monicaSticker, pergunta1} = require('./src/messages')

client.on('qr', qr => qrcode.generate(qr, {small: true}));
client.on('ready', () => console.log('Client is ready!'));

client.on("message", message => {
    const {body, from} = message;

    const userHello =  body == "oi" || body == "Oi" || body == "OI"
    const yes =  body == "sim" || body == "Sim" || body == "SIM"
    const not = body == "não" || body == "Não" || body == "NÃO" || body == "nao" || body =="NAO"

    
    if(userHello) message.reply(welcomeMessage, from)
    
    if(yes) message.reply(pergunta1, from);
    
    if(not) message.reply(monicaSticker, from)
    
    if(body == "1") message.reply("Você programa a menos de 1 ano", from);
    if(body == "2") message.reply("Você programa entre 1 e 3 anos", from);
    if(body == "3") message.reply("Você programa entre 3 e 5 anos", from);

    // if(!yes || !not || !"1" || !"2" || !"3") message.reply("Parece que você tentou digitar coisas diferentes do que foi pedido.")

});

client.initialize();


