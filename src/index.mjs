import { Bot, session } from "grammy";
import "dotenv/config";
import { connectDB } from "./db/db.mjs";

const bot = new Bot(process.env.BOT_TOKEN);

const userBot = new Bot(process.env.USER_TOKEN);

bot.use(
  session({
    initial: () => ({
      typeOfAction: "",
      response: { type: "", user_id: "", message_id: "" },
      usersPagination: {
        usersPerPage: 2,
        sort: { updatedAt: -1 },
      },
    }),
  })
);

// bot.use(usersMenu);

bot.command("start", (ctx) => {
  ctx.reply("Welcome! Up and running.");
  // console.log(ctx.update);
});

bot.command("user", async (ctx) => {
  await usersCommand(ctx);
});


bot.on(":media", async (ctx) => {
  console.log(ctx.message);
});


bot.on("message", async (ctx) => {
  if (ctx.session.typeOfAction === "Response") {
    await userBot.api.sendMessage(
      ctx.session.response.user_id,
      ctx.message.text,
      {
        reply_to_message_id: ctx.session.response.message_id,
      }
    );
  }
});



bot.on("callback_query:data", async (ctx) => {
  //   await ctx.answerCallbackQuery("You clicked a button!");

  //   const [type, user_id, message_id] = ctx.callbackQuery.data.split("_");

  //   await userBot.api.sendMessage(user_id, "Your response from the admin bot", {
  //     reply_to_message_id: message_id,
  //   });

  // await ctx.reply('Please enter the response to this message: ', {
  //   reply_markup: {
  //     force_reply: true,
  //   },
  //   reply_to_message_id: ctx.update.callback_query.message.message_id,
  // })
  const [type, user_id, message_id] = ctx.callbackQuery.data.split("_");
  ctx.session.typeOfAction = "Response";
  ctx.session.response = { type, user_id, message_id };
  await ctx.answerCallbackQuery("You clicked a button!");
  await ctx.reply("Please enter the response to this message: ");
});



connectDB();
bot.start();
