'use client';

import { useEffect } from 'react';

const conversionSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO;

export default function GoogleAdsConversion() {
  useEffect(() => {
    // ตรวจสอบว่ามีค่า conversion ID และไม่ใช่ค่า default
    if (
      conversionSendTo &&
      !conversionSendTo.includes('AW-XXXXXXXXX') &&
      typeof window.gtag === 'function'
    ) {
      window.gtag('event', 'conversion', {
        send_to: conversionSendTo,
      });
    }
  }, []);

  return null;
}
