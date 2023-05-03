import { User } from "./schemas/User.mjs";

export const usersNumber = async () => {
  return await User.countDocuments({});
};
