export default eventHandler((event) => {
  const farewell = getQuery(event);
  const response: Record<string, string | boolean> = {
    nitro: "Is Awesome! 🚀",
    isReal: true,
  };

  if (farewell?.bye === "true") {
    delete response.isReal;
    response.GoodBye = "have a nice day! 👋";
  }

  return response;
});
