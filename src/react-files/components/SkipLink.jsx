import { useRef } from 'react';

const SkipLink = () => {
  const skipLinkRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    
    const afterNavbar = document.getElementById('after-navbar');
    
    if (afterNavbar) {
      afterNavbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      setTimeout(() => {
        const firstHeading = afterNavbar.querySelector('h1, h2, h3, h4, h5, h6');
        
        if (firstHeading) {
          firstHeading.setAttribute('tabindex', '-1');
          firstHeading.focus();
          
          setTimeout(() => {
            firstHeading.removeAttribute('tabindex');
          }, 200);
        } else {
          const firstParagraph = afterNavbar.querySelector('p');
          if (firstParagraph) {
            firstParagraph.setAttribute('tabindex', '-1');
            firstParagraph.focus();
            setTimeout(() => {
              firstParagraph.removeAttribute('tabindex');
            }, 200);
          } else {
            afterNavbar.focus();
          }
        }
      }, 200);
    }
  };

  return (
    <a 
      href="#after-navbar"
      className="skip-link" 
      tabIndex={0}
      ref={skipLinkRef}
      onClick={handleClick}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
