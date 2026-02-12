import { useEffect } from 'react';

const AccessibilityWidget = () => {
  useEffect(() => {
    // Create VLibras container
    const container = document.createElement('div');
    container.setAttribute('vw', 'true');
    container.className = 'enabled';
    const btn = document.createElement('div');
    btn.setAttribute('vw-access-button', 'true');
    btn.className = 'active';
    container.appendChild(btn);
    document.body.appendChild(container);

    // Load VLibras script
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
      container.remove();
    };
  }, []);

  return null;
};

export default AccessibilityWidget;
