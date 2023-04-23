const https = require('https');

function moderateText(text, model) {
  const options = {
    method: 'POST',
    hostname: 'openai80.p.rapidapi.com',
    port: null,
    path: '/moderations',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'API KEY HERE',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    }
  };

  const requestBody = {
    input: text,
    model: model
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        const moderationResult = JSON.parse(responseBody);
        resolve(moderationResult);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(JSON.stringify(requestBody));
    req.end();
  });
}

module.exports = {
  moderateText: moderateText
};