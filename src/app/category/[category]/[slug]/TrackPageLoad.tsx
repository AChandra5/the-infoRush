'use client';

import { useEffect } from 'react';
import { trackClickEvent } from '@/events/gtagEvents/CTATracker';

interface Props {
  action: string;
  category: string;
  label: string;
}

export default function TrackPageLoad({ action, category, label }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      trackClickEvent({action, category, label});
    }
  }, [action, category, label]);

  return null; // nothing to render
}
