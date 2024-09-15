  export const url = process.env.NEXTAUTH_URL;
export const headers = new Headers({
  "Content-Type": "https://market-backend-zeta.vercel.app",
});

export const stringify = (data: any) => {
  return JSON.stringify(data);
};
