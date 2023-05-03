import { Menu, MenuRange } from "@grammyjs/menu";
import { usersPhoto } from "../data/photos.mjs";
import { usersText } from "../data/text.mjs";
import { User } from "../db/schemas/User.mjs";
import { moveRightUsersPagination } from "../pagination/usersPagination.mjs";

const usersNumberOnPage = 2;

const usersMenu = new Menu("users-menu")
  .dynamic(async (ctx) => {
    const users = await User.find({})
      .sort({ updatedAt: -1 })
      .limit(2)
      .skip(2 * ctx.session.usersPagination.currentPage);
    const usersNumber = await User.countDocuments({});
    console.log(usersNumber);
    const usersList = new MenuRange();
    users.map((user) => {
      usersList.text(user.username).row();
    });
    return usersList;
  })
  .text("<", async (ctx) => {
    if (ctx.session.currentPage !== 0) {
      ctx.session.currentPage = ctx.session.currentPage - 1;
      ctx.menu.update();
    }
  })
  .text(
    (ctx) => ctx.session.currentPage,
    async (ctx) => {
      ctx.answerCallbackQuery(`You are on page ${ctx.session.currentPage}`);
      console.log(pagesNumber);
    }
  )
  .text(">", async (ctx) => {
    ctx.session.currentPage = ctx.session.currentPage + 1;
    ctx.menu.update();
    console.log(ctx.session.currentPage);
  });
  .dynamic(async (ctx) => {
    const pagesNumber = (await User.countDocuments({})) / usersNumberOnPage;
    const pagination = new MenuRange();
    if (ctx.session.usersPagination.currentPage !== 0) {
      pagination.text("<<").text("<");
    }
    if (ctx.session.currentPage !== pagesNumber - 1) {
      pagination
        .text(">", async (ctx) => {
          moveRightUsersPagination(ctx);
        })
        .text(">>");
    }
    return pagination;
  });

// // const usersMenu = new Menu("users-menu").text("Text");

// export default usersMenu;
