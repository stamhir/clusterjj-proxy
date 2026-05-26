exports.handler = async function(event, context) {

  const allowedReferrer = "chic-salamander-331be0.netlify.app";

  const referer = event.headers.referer || "";

  if (!referer.includes(allowedReferrer)) {
    return {
      statusCode: 403,
      body: "Access denied"
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: "https://claude.ai/public/artifacts/43762499-7ed2-4d29-a97a-7f1d9fb62097"
    })
  };
};
