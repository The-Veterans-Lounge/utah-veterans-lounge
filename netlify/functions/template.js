const { withCORS } = require("./utils/cors");

/**
 * Example Netlify Function
 * - Wraps in try/catch for error logging
 * - Applies shared CORS policy
 * - Returns JSON response
 */

const handler = async (event, context) => {
  try {
    // Your logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello veterans!" }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    console.error("Function Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Oops! Something went wrong!" }),
    };
  }
};

exports.handler = withCORS(handler);
