const hookLab = document.querySelector('[data-hook-lab]');
const hookTabs = [...document.querySelectorAll('[data-hook-view]')];
const hookViews = {
  generic: { verdict: 'REJECTED', copy: '5 tips to make better carousels.', reason: 'Clear enough, but interchangeable, low-tension and easy to satisfy with generic advice.', total: '2.1', scores: { clarity: 3.5, specificity: 1.5, tension: 1.5, payoff: 2.0, credibility: 2.0 } },
  challenger: { verdict: 'SHORTLISTED', copy: "Your carousel doesn't need better design. It needs an argument.", reason: 'Strong contrast and useful tension, but the promise needs more evidence to avoid becoming an absolute.', total: '4.2', scores: { clarity: 4.4, specificity: 4.0, tension: 4.6, payoff: 4.1, credibility: 3.9 } },
  winner: { verdict: 'SELECTED ANGLE', copy: 'Most AI carousels fail after the cover.', reason: 'Specific failure point, credible promise and a deck that can repay the tension.', total: '4.7', scores: { clarity: 4.8, specificity: 4.7, tension: 4.6, payoff: 4.7, credibility: 4.7 } },
};

const setHookView = (name, focus = false) => {
  const view = hookViews[name];
  if (!hookLab || !view) return;
  hookLab.querySelector('[data-hook-verdict]').textContent = view.verdict;
  hookLab.querySelector('[data-hook-copy]').textContent = view.copy;
  hookLab.querySelector('[data-hook-reason]').textContent = view.reason;
  hookLab.querySelector('[data-hook-total]').firstChild.textContent = view.total;
  Object.entries(view.scores).forEach(([key, score]) => {
    hookLab.querySelector(`[data-hook-score="${key}"]`).textContent = score.toFixed(1);
    hookLab.querySelector(`[data-hook-bar="${key}"]`).style.width = `${score * 20}%`;
  });
  hookTabs.forEach((tab) => {
    const active = tab.dataset.hookView === name;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active) {
      hookLab.querySelector('#hook-panel')?.setAttribute('aria-labelledby', tab.id);
      if (focus) tab.focus();
    }
  });
};

hookTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setHookView(tab.dataset.hookView));
  tab.addEventListener('keydown', (event) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % hookTabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + hookTabs.length) % hookTabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = hookTabs.length - 1;
    else return;
    event.preventDefault();
    setHookView(hookTabs[next].dataset.hookView, true);
  });
});

setHookView('winner');
