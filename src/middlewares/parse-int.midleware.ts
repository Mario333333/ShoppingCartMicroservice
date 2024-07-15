export const ParseIntMiddleware: any = (
  req: { query: any },
  _res: any,
  next: () => void
) => {
  const queryStrings = req.query;

  for (const key in queryStrings) {
    const element = queryStrings[key];

    const length = element.length;
    const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));

    if (isValid) {
      queryStrings[key] = parseInt(queryStrings[key]);
    }
  }
  req.query = queryStrings;
  
  next();
};
