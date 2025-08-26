import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(
      '.developer_container, .sponsor_container, .model_img, .home_data, .home_img',
      { origin: 'top' }
    );
    sr.reveal('.home_title span:nth-child(1), .about_img', {
      origin: 'left',
    });
    sr.reveal(
      '.model_tooltip, .about_data, .home_title span:nth-child(3)',
      {
        origin: 'right',
      }
    );
    sr.reveal(
      '.home_tooltip, .model_button, .title, .home_social, .home_button, .home_title span:nth-child(2)',
      { origin: 'bottom' }
    );

    sr.reveal('.tech_img', { interval: 200 });

    return () => sr.destroy();
  }, []);
}
