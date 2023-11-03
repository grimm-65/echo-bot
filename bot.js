const {Telegraf} = require('telegraf');
require('dotenv').config();

const Token = process.env.Token;
const bot = new Telegraf(Token);

 

 /*bot.use((ctx, next)=>{
  	console.log(ctx);

  	next();
  });
  */


bot.start((ctx)=>{

	user = `${ctx.message.from.username}`;
	//Logger(ctx)//will be called every time uses youre bot

	const helpMessage = `
	Hello ${user}
	This bot echos back what you type
	using /echo  command
	For more info /help
	`;
	ctx.reply(helpMessage);
});

const helpMessage = `
	Commands you can run using this bot
	/start - Start the bot
	/help  -  Commmand guide
	/echo  -  echo command (it echos 😂)
	`;



bot.help((ctx)=>{
	
	ctx.reply(helpMessage);

});

		//ECHO FUNCTIIONALITY
bot.command('echo', (ctx)=>{

	let input = ctx.message.text;
	let inputArray = input.split(" "); //Split the input by spaces
	console.log(inputArray.length);
   
	let message = "";
	//perform check to see if user input has argum ents

	if (inputArray.length == 1){
		message = "You said echo";
	}else{
		inputArray.shift(); // removes the first element of inputArray
		message = inputArray.join(" ");// join inputArray with message
	}
	ctx.reply(message);
});
bot.launch();