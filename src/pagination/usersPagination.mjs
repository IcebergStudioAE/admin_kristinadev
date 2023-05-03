// import { usersText } from "../data/text.mjs";
// import { usersNumber } from "../db/dbFunctions.mjs";

// export const moveRightUsersPagination = async (ctx) => {
//   ctx.session.usersPagination.currentPage =
//     ctx.session.usersPagination.currentPage + 1;
//   ctx.session.usersPagination.usersNumber = await usersNumber();
//   await ctx.menu.update();
//   await ctx.editMessageCaption({ caption: usersText(ctx) });
// };
