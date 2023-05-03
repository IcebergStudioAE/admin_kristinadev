// import usersMenu from "./menus/usersMenu.mjs";
// import { usersNumber } from "./db/dbFunctions.mjs";
// import { usersPhoto } from "./data/photos.mjs";
// import { usersText } from "./data/text.mjs";

// export const usersCommand = async (ctx) => {
//   ctx.session.usersPagination.currentPage = 0;
//   ctx.session.usersPagination.usersNumber = await usersNumber();
//   await ctx.replyWithPhoto(usersPhoto, {
//     caption: usersText(ctx),
//     parse_mode: "HTML",
//     reply_markup: usersMenu,
//   });
// };
