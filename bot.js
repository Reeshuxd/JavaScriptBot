const { Telegraf, Markup } = require('telegraf')
const TOKEN = "Your Bot Token Here"
const bot = new Telegraf(TOKEN)

bot.command('start', async (ctx) => {
	await ctx.reply(
		`Heya ${ctx.message.from.first_name}\nIt's a Sample JavaScript Bot!`,
		Markup.inlineKeyboard([
			[Markup.button.url(" It's a url button ", "google.com")],
			[Markup.button.callback(" It's a callback button ", "button")]
		]
	      )
	   )
})

bot.action('button', async (ctx) => {
	await ctx.answerCbQuery()
	await ctx.editMessageText(
		"You Clicked A Button"
	)
})

bot.launch()
console.log("Sucessfully Started Bot!")
console.log("Visit @TheTeleGramSupportChat!")
