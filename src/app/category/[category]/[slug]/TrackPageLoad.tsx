"use client";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrackPageLoad = ({ action, category, label }: any) => {
  trackClickEvent({action, category, label});
  return null;
};

export default TrackPageLoad;
