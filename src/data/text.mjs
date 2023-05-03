import { usersNumber } from "../db/dbFunctions.mjs";

export const usersText = (ctx) => `
Всего пользователей: ${ctx.session.usersPagination.usersNumber}
Страница: ${ctx.session.usersPagination.currentPage + 1}/${Math.ceil(
  ctx.session.usersPagination.usersNumber /
    ctx.session.usersPagination.usersPerPage
)}
`;
