/**
 * Sends an 'event' to Google Analytics (gtag.js).
 * This is a safe wrapper that checks if gtag is available on the window object.
 * @param action - The name of the event (e.g., 'click_whatsapp').
 * @param params - Optional parameters for the event.
 */
export const trackGtagEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: "engagement",
      event_label: eventName,
      ...params,
    });
  }
};