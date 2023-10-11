

[![ISC License](https://img.shields.io/badge/License-ISC-green.svg)](https://choosealicense.com/licenses/isc/)
# easy-notify-ts

**easy-notify-ts** is a simple and lightweight JavaScript library for displaying toast notifications in your web applications. It allows you to easily show alert, error, or success messages in a customizable and stylish manner. This library is written in TypeScript and provides an intuitive way to notify your users about important events or messages.

# Installation

You can install **easy-notify-ts** via npm:

```bash
npm install easy-notify-ts
```

# Usage

Here's how you can use the library in your web application:
 ```typescript
 import { NotificationType, renderToastNotification } from 'easy-notify-ts';

// Create a notification object

const notification: ToastNotification = {
  type: NotificationType.Success, // Choose from Alert, Error, or Success
  title: 'Notification Title',
  content: 'This is the notification content.',
  color: '#3f8860', // Optional: Set a custom background color
};

// Display the notification
renderToastNotification(notification);

 ```
# API 
API
NotificationType
An enum defining the types of notifications:

- **Alert**: Represents an alert notification.
- **Error**: Represents an error notification.
- **Success**: Represents a success notification.

* **type**: The type of notification (one of the values from NotificationType).
* **title**: The title of the notification.
* **content**: The content or message of the notification.
* **color** (optional): A custom background color for the notification.




## Screenshots

![](https://raw.githubusercontent.com/CodyTave/Easy-Notify/master/chrome-capture-2023-9-11.gif)

## Notification Types

| Type             | Color                                                                |
| ----------------- | ------------------------------------------------------------------ |
| **Alert** |   ![#e67e22](https://via.placeholder.com/10/e67e22?text=+)**#e67e22** |
| **Error** |   ![#c0392b](https://via.placeholder.com/10/c0392b?text=+)**#c0392b** |
| **Success** |   ![#3f8860](https://via.placeholder.com/10/3f8860?text=+)**#3f8860** |


## Authors

- [@CodyTave](https://github.com/CodyTave)


## License

[ISC](https://choosealicense.com/licenses/isc/)


## Demo

[Demo](https://easy-notify-demo.vercel.app/)
