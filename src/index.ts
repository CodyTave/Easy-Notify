export enum NotificationType {
  Alert = "alert",
  Error = "error",
  Success = "success",
}

export interface ToastNotification {
  type: NotificationType;
  title: string;
  content: string;
  color?: string;
}

export function renderToastNotification(notification: ToastNotification): void {
  LoadAnimations();
  const prev = document.querySelectorAll("#ToastNotif");
  if (prev) {
    prev.forEach((node) => {
      document.body.removeChild(node);
    });
  }
  const toastElement = document.createElement("div");
  toastElement.id = "ToastNotif";
  let backgroundColor = notification.color
    ? notification.color
    : notification.type === NotificationType.Alert
    ? "#e67e22"
    : notification.type === NotificationType.Error
    ? "#c0392b"
    : "#3f8860";
  toastElement.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 4px;
    color: #ecebf0;
    max-width: 400px;
    min-width: 300px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 50;
    background-color: ${backgroundColor};
    animation-name: fadeInBlur;
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
    animation-fill-mode: forwards;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
  `;

  const titleElement = document.createElement("div");
  titleElement.style.cssText = `
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const contentElement = document.createElement("div");
  contentElement.style.cssText = `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
    font-size: 14px;
  `;

  toastElement.classList.add("toast", notification.type);

  titleElement.textContent = notification.title;
  contentElement.textContent = notification.content;

  toastElement.appendChild(titleElement);
  toastElement.appendChild(contentElement);
  document.body.appendChild(toastElement);

  setTimeout(() => {
    toastElement.style.animationName = "fadeOut";
    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 1000);
  }, 6000);
}

function LoadAnimations() {
  document.styleSheets[0].insertRule(`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`);

  document.styleSheets[0].insertRule(`
  @keyframes fadeInBlur {
    0% {
      opacity: 0;
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`);
}
