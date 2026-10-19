// Medição de cliques nos botões, sem cookies e sem dados pessoais.
// Só envia algo se a página tiver uma ferramenta de métricas instalada
// (Google Tag Manager via dataLayer ou Plausible). Sem ela, não faz nada.
document.addEventListener('click', (evento) => {
  const link = evento.target.closest('[data-cta]');
  if (!link) return;
  const destino = link.dataset.cta;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'clique_cta', cta: destino });
  }
  if (typeof window.plausible === 'function') {
    window.plausible('Clique CTA', { props: { cta: destino } });
  }
});
