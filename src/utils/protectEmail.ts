/* eslint-disable no-param-reassign */
export const protectEmail = (email: string): string => {
  return email.replace(/(.{2})(.*)(?=@)/, (gp1, gp2) => {
    for (let i = 0; i < 5; i += 1) {
      gp2 += '*';
    }
    return gp2;
  });
};
