document.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
  const scrollSection = document.querySelector('.horizontal-scroll-section');

  if (!scrollWrapper || !scrollSection) return;

  const scrollWidth = scrollWrapper.scrollWidth - window.innerWidth;

  gsap.to(scrollWrapper, {
    x: -scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: scrollSection,
      start: 'top top',
      end: `+=${scrollWidth}`,
      pin: true,
      scrub: true,
    },
  });
});
