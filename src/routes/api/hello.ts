export default eventHandler((event) => {
  const farewell = getQuery(event);

  if (farewell === undefined || farewell?.bye !== "true") {
    return { nitro: "Is Awesome!", isReal: true };
  }
  if (farewell?.bye === "true") {
    return { 
      GoodBye: "have a nice day!",
      nitro: "Is Awesome!",
    };
  }
});
