
(() => {
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  };
  addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    nodes.forEach(n => n.classList.add('visible'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -8%'});
    nodes.forEach(n => io.observe(n));
  }

  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const p = img.parentElement;
      if (p) {
        p.style.background = img.dataset.fallback || '#e8e8ed';
        p.style.minHeight = p.style.minHeight || '320px';
      }
    }, {once:true});
  });
})();
