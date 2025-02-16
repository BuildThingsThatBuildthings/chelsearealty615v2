import { useEffect } from 'react';

export const EmailCaptureForm = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/yHaFyFx7DgjivU4hd1dL"
      style={{
        width: '100%',
        height: '430px',
        border: 'none',
        borderRadius: '0px'
      }}
      id="inline-yHaFyFx7DgjivU4hd1dL"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Email Capture"
      data-height="430"
      data-layout-iframe-id="inline-yHaFyFx7DgjivU4hd1dL"
      data-form-id="yHaFyFx7DgjivU4hd1dL"
      title="Email Capture"
    />
  );
};
