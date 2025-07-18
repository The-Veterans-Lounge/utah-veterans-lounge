const withCORS = (handler) => async (event, context) => {
  const response = await handler(event, context);

  return {
    ...response,
    headers: {
      ...(response.headers || {}),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
    },
  };
};

module.exports = { withCORS };
