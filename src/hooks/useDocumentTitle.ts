import { useEffect } from 'react';

export default function(
  message: string,
  appendSitename: boolean,
): void {
  const siteName = 'subculturecreations.com';
  useEffect(
    () => {
      if (appendSitename && siteName) {
        document.title = `${message} • ${siteName}`;
      } else {
        document.title = message;
      }
    },
    [message],
  );
}
