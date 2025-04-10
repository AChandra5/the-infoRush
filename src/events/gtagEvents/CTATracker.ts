interface clickProps {
  action: string;
  category: string;
  label: string;
  path?: string;
}
export const trackClickEvent = ({
  action,
  category,
  label,
  path = window.location.pathname,
}: clickProps) => {
  if (typeof window !== undefined && typeof window.gtag === "function") {
    const resolvedPath = path || window.location.pathname;
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      current_page_path: resolvedPath,
    });
  } else {
    console.warn("gtag not available");
  }
};
