const { withCORS } = require("./utils/cors");

const handler = async (event, context) => {
  try {
    const environment = process.env.NODE_ENV || "development";

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
        environment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Health Check Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
      }),
    };
  }
};

exports.handler = withCORS(handler);
