
const qrcode = require('qrcode-terminal');

const { Client ,LocalAuth} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {

    const text = message.body;
	if(text.includes("price") || text.includes("howmuch") || text.includes("eggs") ) {
		message.reply('Good day. thank you for contacting me . You can get 30 eggs for as little as 53 rands');
	}
    else if(text.includes('order') || text.includes('deliver')){
        message.reply('Good day. thank you for contacting me. You can get 30 eggs for as little as 53 rands .I do door to door deliveries around Braamfontein');

    }
    else if(text.includes('payment') || text.includes('deliver')){
        message.reply('Good day . you only pay upon delivery');   
    }
    else{
        message.reply('Hey is your fav egg chicken ,I will get back to you as soon as i can');   
    }
});

client.initialize();