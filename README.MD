easy-notify-ts
easy-notify-ts is a simple and lightweight JavaScript library for displaying toast notifications in your web applications. It allows you to easily show alert, error, or success messages in a customizable and stylish manner. This library is written in TypeScript and provides an intuitive way to notify your users about important events or messages.

Installation
You can install easy-notify-ts via npm:

bash
Copy code
npm install easy-notify-ts
Usage
Here's how you can use the library in your web application:

typescript
Copy code
import { NotificationType, ToastNotification, renderToastNotification } from 'easy-notify-ts';

// Create a notification object
const notification: ToastNotification = {
type: NotificationType.Success, // Choose from Alert, Error, or Success
title: 'Notification Title',
content: 'This is the notification content.',
color: '#3f8860', // Optional: Set a custom background color
};

// Display the notification
renderToastNotification(notification);
API
NotificationType
An enum defining the types of notifications:

Alert: Represents an alert notification.
Error: Represents an error notification.
Success: Represents a success notification.
ToastNotification
An interface for specifying the content and appearance of a toast notification:

type: The type of notification (one of the values from NotificationType).
title: The title of the notification.
content: The content or message of the notification.
color (optional): A custom background color for the notification.
renderToastNotification(notification: ToastNotification)
A function to render and display a toast notification with the provided ToastNotification object.

Customization
You can easily customize the appearance of the toast notifications by modifying the toastElement.style.cssText section in the renderToastNotification function in your application.

Animations
The library includes simple fade-in and fade-out animations for the toast notifications. You can customize these animations by editing the LoadAnimations function in your application.

License
This library is distributed under the MIT License.

Contributing
We welcome contributions from the open-source community. If you'd like to contribute, please follow our Contribution Guidelines.

Issues
If you encounter any issues or have suggestions for improvements, please create a GitHub Issue in our repository.

Acknowledgments
This library was created by [Your Name] and is inspired by [mention any relevant inspiration or credits].

Thank you for using easy-notify-ts! We hope it simplifies adding toast notifications to your web application. If you have any questions or need assistance, please don't hesitate to reach out.

Happy coding! 🚀
