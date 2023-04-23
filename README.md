# OpenAI Text Moderation Utility

A Node.js utility that uses the OpenAI text moderation API to parse text content to determine if it contains offensive, threatening, hateful, violent, or sexual language. The utility accepts a text string and the model to use for moderation and returns a JSON object with the moderation results. This utility can be useful for moderating user-generated content in web and mobile applications, especially in online communities.

## Installation

- Go to the RapidAPI homepage: https://rapidapi.com/

- Create an account or log in if you already have one.

- Search for the OpenAI80 API in the search bar at the top of the page.

- Click on the OpenAI80 API search result to access its page.

- On the API page, you will see a button called "Subscribe to Test" or "Subscribe to Use". Click on this button to subscribe to the API.

- If the API is free, you will receive an API key automatically. If the API is paid, you will need to select a subscription plan before you can receive an API key.

- To find your API key, click on the "Dashboard" button on the top navigation bar.

- On the dashboard page, you will see a section called "My Apps". Click on the application you created to use the API.

- On the application details page, you will find your API key in the "Key" section. Copy and paste the API key into your JavaScript code.
    
## Documentation

- Make sure you have Node.js installed on your computer. You can download it from the official website: https://nodejs.org

- Create a new JavaScript file in your favorite code editor.

- Copy and paste the code from the "OpenAI Text Moderation Utility" into the JavaScript file.

- Save the file with a descriptive name, for example: "moderation-util.js".

- Import the utility into your main JavaScript file using the require() statement. For example:
```bash
const moderationUtil = require('./moderation-util');
```

- To use the utility, call the moderateText() function that is available in the moderationUtil object. This function accepts two arguments: the text to moderate and the template to use for moderation. For example:
```bash
moderationUtil.moderateText('This text contains offensive language.', 'text-moderation-stable')
  .then((moderationResult) => {
    console.log(moderationResult);
  })
  .catch((err) => {
    console.error(err);
  });
```
- When the moderateText() function is called, it returns a promise that resolves to a JSON object containing the results of the text moderation. You can use these results to make decisions about user-generated content, such as hiding content if it is offensive or sending a notification to moderators to review the content.
## Usage/Examples

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099718824107982980/Snap__2_-removebg-preview.png)

## Deployment

To deploy this project run

```bash
  node moderation-util.js
```


## Authors

- [@qzxtu](https://www.github.com/qzxtu)


## License

[MIT](https://rapidapi.com/openai-api-openai-api-default/api/openai80/)

## Support

 [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)   
 [![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
