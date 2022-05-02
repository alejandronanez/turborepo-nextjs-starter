import React from 'react';

const GOOGLE_ANALYTICS_SITE_ID = 'UA-XXXXXXXXX';

export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_SITE_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_SITE_ID}');
          `,
        }}
      />
    </>
  );
};
