export interface NotificationDTO {
    to : string; // The recipient's email address
    subject : string; // The subject of the notification
    templateId : string; // The ID of the email template to use
    params : Record<string, any>; // Parameters to be passed to the email template
}

