import { useEffect, useState } from 'react';

export const EmailCaptureForm = () => {
  const [iframeHeight, setIframeHeight] = useState('430px');

  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Function to update iframe height based on screen size
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setIframeHeight('350px');
      } else {
        setIframeHeight('430px');
      }
    };

    // Initial call and event listener
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/T0gJ3mTmefXcstgCHes3"
      style={{
        width: '100%',
        height: iframeHeight,
        border: 'none',
        borderRadius: '3px',
        overflow: 'hidden',
        transition: 'height 0.3s ease-in-out'
      }}
      id="inline-T0gJ3mTmefXcstgCHes3" 
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="CMA Request"
      data-height={iframeHeight}
      data-layout-iframe-id="inline-T0gJ3mTmefXcstgCHes3"
      data-form-id="T0gJ3mTmefXcstgCHes3"
      title="CMA Request"
    />
  );
};
