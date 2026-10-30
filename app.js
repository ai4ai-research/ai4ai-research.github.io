/* AI4AI survey — dependency-free browser interactions.
   The catalogue is local, so the site also works when opened directly as a file. */
(() => {
  'use strict';
  function init() {
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const icon = (name, extra = '') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollToElement = el => el?.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth', block: 'start'});
    const paperURL = page => `${window.AI4AI_PDF_URL || 'assets/AI4AI_survey_latest.pdf'}${page ? `#page=${Number(page)}` : ''}`;
    const externalURL = value => /^https?:\/\//i.test(value || '') ? value : null;
    if (window.AI4AI_PDF_URL) {
      $$('.paper-link').forEach(link => {
        const page = link.getAttribute('href')?.match(/#page=(\d+)/)?.[1];
        link.href = paperURL(page);
      });
    }
    let toastTimer;
    function toast(message) {
      const target = $('#toast');
      target.textContent = message;
      target.classList.add('visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => target.classList.remove('visible'), 3300);
    }
    async function copyText(text, successMessage) {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(text);
        toast(successMessage);
      } catch (_) {
        const input = document.createElement('textarea');
        input.value = text;
        input.style.cssText = 'position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;';
        const previousFocus = document.activeElement;
        const host = document.querySelector('dialog[open]') || document.body;
        host.append(input);
        input.focus(); input.select();
        let copied = false;
        try { copied = document.execCommand('copy'); } catch (_) { /* User can copy the visible text. */ }
        input.remove();
        previousFocus?.focus({preventScroll: true});
        toast(copied ? successMessage : 'Clipboard access is blocked. Please select and copy the visible citation.');
      }
    }
    function downloadFile(filename, text, type) {
      const blob = new Blob([text], {type});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    }

    // Affiliations are listed by default; on phones they stay behind the toggle so the actions remain near the top.
    if (window.matchMedia('(max-width: 680px)').matches) $('.affiliations').open = false;

    // Navigation and scroll progress.
    const menu = $('.menu-toggle');
    const nav = $('#main-nav');
    menu.addEventListener('click', event => {
      event.stopPropagation();
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.innerHTML = icon(open ? 'close' : 'menu');
    });
    function closeMenu() {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
      menu.innerHTML = icon('menu');
    }
    $$('#main-nav a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', e => {
      if (nav.classList.contains('open') && !e.target.closest('.site-header')) closeMenu();
    });
    const navLinks = $$('#main-nav a');
    let scrolling = false;
    function updateScroll() {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      $('.reading-progress').style.width = `${max > 0 ? Math.min(100, 100 * scrollTop / max) : 0}%`;
      $('#back-to-top').hidden = scrollTop < 850;
      let active = null;
      navLinks.forEach(link => {
        const target = $(link.getAttribute('href'));
        if (target && target.getBoundingClientRect().top <= 190) active = link;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link === active);
        if (link === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      scrolling = false;
    }
    window.addEventListener('scroll', () => {
      if (!scrolling) { scrolling = true; requestAnimationFrame(updateScroll); }
    }, {passive: true});
    $('#back-to-top').addEventListener('click', () => window.scrollTo({top: 0, behavior: reducedMotion ? 'auto' : 'smooth'}));
    updateScroll();

    // Fade blocks in as they enter the viewport. The classes are removed afterwards so hover transitions still apply.
    if (!reducedMotion && 'IntersectionObserver' in window) {
      const revealTargets = $$('.hero-inner, .institution-bar, .section-heading, .section-lead, .overview-figure, .overview-story, .abstract-block, .level-tabs, .level-panels, .classifier, .family-card, .library-stats>div, .library-panel, .questions-heading, .question-list, .citation-layout>div');
      document.documentElement.classList.add('js-reveal');
      const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-visible');
        revealObserver.unobserve(el);
        setTimeout(() => { el.classList.remove('reveal', 'is-visible'); el.style.transitionDelay = ''; }, 1200);
      }), {rootMargin: '0px 0px -6% 0px'});
      revealTargets.forEach(el => {
        const siblings = el.parentElement.children;
        if (siblings.length > 1 && /family-card|library-stats/.test(el.className + el.parentElement.className)) el.style.transitionDelay = `${[...siblings].indexOf(el) * 70}ms`;
        el.classList.add('reveal');
        revealObserver.observe(el);
      });
    }

    // Accessible level tabs: click, arrow keys, Home and End.
    const levelTabs = $$('[data-level-tab]');
    function showLevel(level, focus = false) {
      levelTabs.forEach(tab => {
        const active = tab.dataset.levelTab === level;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        $(`#panel-${tab.dataset.levelTab}`).hidden = !active;
        if (active && focus) tab.focus();
      });
    }
    levelTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => showLevel(tab.dataset.levelTab));
      tab.addEventListener('keydown', e => {
        let next = index;
        if (e.key === 'ArrowRight') next = (index + 1) % levelTabs.length;
        else if (e.key === 'ArrowLeft') next = (index - 1 + levelTabs.length) % levelTabs.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = levelTabs.length - 1;
        else return;
        e.preventDefault();
        showLevel(levelTabs[next].dataset.levelTab, true);
      });
    });

    // The classification rule follows Section 3.6 exactly; it is not cumulative autonomy.
    const decisions = {D: 'A', S: 'H', E: 'H'};
    const levelTitles = {
      L0: 'Human-controlled reference', L1: 'AI-provided search direction',
      L2: 'AI-provided search space', L3: 'AI-provided evaluation signal'
    };
    function updateClassifier() {
      const level = decisions.E === 'A' ? 'L3' : decisions.S === 'A' ? 'L2' : decisions.D === 'A' ? 'L1' : 'L0';
      const profile = `⟨${decisions.D}, ${decisions.S}, ${decisions.E}⟩`;
      $('#result-level').textContent = level;
      $('#result-profile').textContent = profile;
      $('#result-title').textContent = levelTitles[level];
      let explanation;
      if (level === 'L0') explanation = 'All three operative decisions are human-authored or externally fixed.';
      else if (level === 'L1') explanation = 'AI controls direction; search space and evaluation remain human-provided or externally fixed.';
      else if (level === 'L2') explanation = `AI controls the space. Direction is ${decisions.D === 'A' ? 'also AI-provided' : 'human-provided'}; evaluation remains external.`;
      else if (decisions.D === 'A' && decisions.S === 'A') explanation = 'AI provides all three decisions. This alone does not establish effectiveness, reliability, or recursive improvement.';
      else explanation = `AI provides the operative evaluation signal. ${[decisions.D === 'H' ? 'Direction' : '', decisions.S === 'H' ? 'Search space' : ''].filter(Boolean).join(' and ')} ${decisions.D === 'H' && decisions.S === 'H' ? 'remain' : 'remains'} human-provided.`;
      $('#result-text').textContent = explanation;
      $$('[data-decision]').forEach(button => {
        const selected = decisions[button.dataset.decision] === button.dataset.source;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
    }
    $$('[data-decision]').forEach(button => button.addEventListener('click', () => {
      decisions[button.dataset.decision] = button.dataset.source;
      updateClassifier();
    }));

    // Native dialogs provide keyboard focus trapping and Escape handling.
    let dialogTrigger = null;
    function showDialog(dialog, trigger) {
      dialogTrigger = trigger || document.activeElement;
      dialog.showModal();
      document.body.classList.add('modal-open');
      dialog.scrollTop = 0;
    }
    $$('dialog').forEach(dialog => {
      $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', e => {
        const box = dialog.getBoundingClientRect();
        if (e.target === dialog && (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom)) dialog.close();
      });
      dialog.addEventListener('close', () => {
        document.body.classList.remove('modal-open');
        if (dialogTrigger?.isConnected) dialogTrigger.focus({preventScroll: true});
      });
    });
    let figureScale = 1;
    const figureImage = $('#dialog-image');
    const figureViewport = $('.figure-dialog-image');
    function setFigureScale(scale) {
      figureScale = Math.max(.75, Math.min(5, scale));
      const style = getComputedStyle(figureViewport);
      const horizontalPadding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const verticalPadding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      const availableWidth = figureViewport.clientWidth - horizontalPadding;
      const availableHeight = parseFloat(style.maxHeight) - verticalPadding;
      const ratio = figureImage.naturalWidth / figureImage.naturalHeight;
      const fitWidth = Number.isFinite(ratio) ? Math.min(availableWidth, availableHeight * ratio) : availableWidth;
      figureImage.style.width = `${Math.round(fitWidth * figureScale)}px`;
      $('#figure-zoom-level').textContent = `${Math.round(figureScale * 100)}%`;
      $('#figure-zoom-out').disabled = figureScale <= .75;
      $('#figure-zoom-in').disabled = figureScale >= 5;
    }
    figureImage.addEventListener('load', () => setFigureScale(figureScale));
    $('#figure-zoom-out').addEventListener('click', () => setFigureScale(figureScale - .25));
    $('#figure-zoom-in').addEventListener('click', () => setFigureScale(figureScale + .25));
    $('#figure-zoom-fit').addEventListener('click', () => {
      setFigureScale(1);
      figureViewport.scrollTo({left: 0, top: 0});
    });
    $$('[data-figure]').forEach(button => button.addEventListener('click', () => {
      const caption = button.dataset.caption || 'Survey figure';
      $('#dialog-image').src = button.dataset.figure;
      $('#dialog-image').alt = caption;
      $('#figure-dialog-caption').textContent = caption;
      $('#figure-dialog-title').textContent = /^Figure \d+/.test(caption) ? caption.match(/^Figure \d+/)[0] : 'Survey taxonomy';
      showDialog($('#figure-dialog'), button);
      setFigureScale(button.dataset.figureKind === 'taxonomy' ? Math.max(1.5, 1200 / figureViewport.clientWidth) : 1);
      figureViewport.scrollTo({left: 0, top: 0});
    }));

    // Citations.
    const bibtex = $('#bibtex').textContent;
    $('#copy-citation').addEventListener('click', () => copyText(bibtex, 'Preprint citation copied.'));
    $('#download-citation').addEventListener('click', () => downloadFile('ai4ai-survey.bib', bibtex + '\n', 'application/x-bibtex;charset=utf-8'));

    // Catalogue: every work the survey places in a level chapter, an application family, or a benchmark list.
    const catalogue = window.AI4AI_DATA;
    if (!catalogue || !Array.isArray(catalogue.papers)) {
      $('#results-count').textContent = 'Catalogue not loaded. Keep data.js alongside index.html, or use the self-contained HTML edition.';
      return;
    }
    const papers = catalogue.papers;
    const stats = {references: papers.length, surveyed: papers.filter(p => p.annotated).length, methods: papers.filter(p => p.kind === 'Method').length, benchmarks: papers.filter(p => p.kind === 'Benchmark').length};
    $$('[data-stat]').forEach(el => { if (stats[el.dataset.stat] !== undefined) el.textContent = stats[el.dataset.stat]; });
    const normalize = value => String(value || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’‘]/g, "'").replace(/[–—−]/g, '-');
    const searchIndex = new Map(papers.map(p => [p.ref, normalize([p.ref,p.name,p.title,p.authors,p.citation,p.category,p.kind,p.artifact,p.human,p.historyRead,p.task,p.protocol,p.evidence,...p.families,...p.placements.map(x => `${x.where} ${x.path} ${x.label || ''}`)].filter(Boolean).join(' '))]));
    const years = [...new Set(papers.map(p => p.year).filter(Boolean))].sort((a,b) => b - a);
    years.forEach(year => $('#year-filter').add(new Option(String(year), String(year))));
    const state = {mode: 'surveyed', query: '', level: 'all', family: 'all', kind: 'all', year: 'all', sort: 'newest', page: 1};
    const pageSize = 10;
    let filtered = [];
    const kindLabels = {Method: 'Method', Benchmark: 'Benchmark', Discussed: 'Discussed in text', Reference: 'Contextual reference'};
    // Verified article link from the manuscript or a title-matched arXiv / DOI record; otherwise a title search.
    const scholarURL = p => `https://scholar.google.com/scholar?q=${encodeURIComponent('"' + p.title + '"')}`;
    const paperLink = p => externalURL(p.url) || scholarURL(p);
    function levelBadge(p, level) {
      const x = p.placements.find(item => item.level === level);
      if (x.type === 'table') return {cls: 'table', text: `<strong>${level}</strong> · ${escapeHTML(x.where)}`, detail: 'Level given in the table'};
      if (x.type === 'figure') {
        const basis = {L1: ['taxonomy', 'Taxonomy leaf'], L2: ['component', 'Component-specific'], L3: ['candidate', 'Candidate artifact']}[level];
        return {cls: basis[0], text: `<strong>${level}</strong> · ${escapeHTML(x.where)}`, detail: basis[1]};
      }
      return {cls: 'chapter', text: `<strong>${level}</strong> · ${escapeHTML(x.where)}`, detail: 'Discussed in the chapter'};
    }
    function evidenceCell(p) {
      if (p.levels.length) {
        // Under a level filter, lead with the badge that explains why the row matched.
        const ordered = state.level !== 'all' && p.levels.includes(state.level) ? [state.level, ...p.levels.filter(l => l !== state.level)] : p.levels;
        const badges = ordered.slice(0, 2).map(level => levelBadge(p, level));
        return badges.map(b => `<span class="level-badge ${b.cls}">${b.text}</span>`).join(' ') + `<span class="row-detail">${badges[0].detail}</span>`;
      }
      const boundary = p.placements.find(x => x.boundary);
      if (boundary) return `<span class="level-badge neutral">Boundary · ${escapeHTML(boundary.where)}</span><span class="row-detail">Boundary case, no level</span>`;
      const anchor = p.placements[0];
      if (anchor) return `<span class="level-badge neutral">${escapeHTML(anchor.where)}</span><span class="row-detail">${p.kind === 'Benchmark' ? 'Benchmark, no level' : 'No level assigned'}</span>`;
      return `<span class="level-badge neutral">Outside §4–7</span><span class="row-detail">Contextual reference</span>`;
    }
    function familyBadges(p) {
      return p.families.map(f => `<span class="family-badge ${escapeHTML(f.toLowerCase())}">${escapeHTML(f)}</span>`).join(' ');
    }
    function syncFilters() {
      $('#paper-search').value = state.query;
      $('#year-filter').value = state.year;
      $('#kind-filter').value = state.kind;
      $('#sort-papers').value = state.sort;
      [['[data-mode]','mode'],['[data-filter-level]','level'],['[data-filter-family]','family']].forEach(([selector,key]) => {
        $$(selector).forEach(button => {
          const value = key === 'mode' ? button.dataset.mode : key === 'level' ? button.dataset.filterLevel : button.dataset.filterFamily;
          const selected = value === state[key];
          button.classList.toggle('selected', selected);
          button.setAttribute('aria-pressed', String(selected));
        });
      });
    }
    function pageList(current, count) {
      if (count <= 6) return Array.from({length: count}, (_,i) => i + 1);
      const numbers = [...new Set([1, current - 1, current, current + 1, count].filter(n => n >= 1 && n <= count))].sort((a,b) => a-b);
      const output = [];
      numbers.forEach((n,i) => { if (i && n - numbers[i-1] > 1) output.push('…'); output.push(n); });
      return output;
    }
    function render() {
      const terms = normalize(state.query.trim()).split(/\s+/).filter(Boolean);
      filtered = papers.filter(p =>
        (state.mode === 'all' || p.annotated) &&
        (state.level === 'all' || p.levels.includes(state.level)) &&
        (state.family === 'all' || p.families.includes(state.family)) &&
        (state.kind === 'all' || p.kind === state.kind) &&
        (state.year === 'all' || p.year === Number(state.year)) &&
        terms.every(term => searchIndex.get(p.ref).includes(term))
      );
      filtered.sort((a,b) => state.sort === 'name' ? a.name.localeCompare(b.name) : state.sort === 'reference' ? a.ref-b.ref : state.sort === 'oldest' ? (a.year||0)-(b.year||0)||a.name.localeCompare(b.name) : (b.year||0)-(a.year||0)||a.name.localeCompare(b.name));
      const count = filtered.length;
      const pageCount = Math.max(1,Math.ceil(count / pageSize));
      state.page = Math.min(pageCount,Math.max(1,state.page));
      const start = (state.page - 1) * pageSize;
      const visible = filtered.slice(start,start + pageSize);
      $('#paper-list').innerHTML = visible.map(p => {
        const linkTitle = p.url ? `Open the paper: ${p.title}` : `No article link in the manuscript; search for this title`;
        const subtitle = normalize(p.name) !== normalize(p.title) ? p.title : (p.authors || p.citation);
        return `<tr><td><a class="paper-name" href="${escapeHTML(paperLink(p))}" target="_blank" rel="noopener" title="${escapeHTML(linkTitle)}">${escapeHTML(p.name)}<span class="ref-number">[${p.ref}]</span>${icon(p.url ? 'external' : 'search', 'link-icon')}</a><span class="paper-title">${escapeHTML(subtitle)}</span></td><td><span class="paper-year">${p.year || '—'}</span></td><td>${evidenceCell(p)}</td><td>${familyBadges(p)}<span class="row-detail">${kindLabels[p.kind]}</span></td><td><button class="row-open" data-paper-id="${p.ref}" aria-label="Where the survey discusses ${escapeHTML(p.name)}" title="Where the survey discusses this work">${icon('info')}</button></td></tr>`;
      }).join('');
      $('#results-count').innerHTML = `<strong>${count}</strong> ${state.mode === 'surveyed' ? 'surveyed works' : 'references'}${state.query ? ` matching “${escapeHTML(state.query)}”` : ''}`;
      $('#page-summary').textContent = count ? `Showing ${start + 1}–${Math.min(start + pageSize,count)} of ${count}` : 'No matching entries';
      $('#empty-state').hidden = count !== 0;
      $('.paper-table-scroll').hidden = count === 0;
      $('.pagination').hidden = count === 0;
      $('#previous-page').disabled = state.page <= 1;
      $('#next-page').disabled = state.page >= pageCount;
      $('#page-numbers').innerHTML = pageList(state.page,pageCount).map(n => n === '…' ? '<span class="page-ellipsis">…</span>' : `<button class="page-button ${n === state.page ? 'selected' : ''}" data-page="${n}" aria-label="Page ${n}" ${n === state.page ? 'aria-current="page"' : ''}>${n}</button>`).join('');
      $$('[data-paper-id]', $('#paper-list')).forEach(button => button.addEventListener('click', () => showPaper(Number(button.dataset.paperId), button)));
      $$('[data-page]', $('#page-numbers')).forEach(button => button.addEventListener('click', () => changePage(Number(button.dataset.page))));
      syncFilters();
    }
    function updateState(update) { Object.assign(state, update, {page: 1}); render(); }
    function reset() { updateState({mode:'surveyed',query:'',level:'all',family:'all',kind:'all',year:'all',sort:'newest'}); }
    function changePage(page) { state.page = page; render(); scrollToElement($('.results-toolbar')); }
    $('#paper-search').addEventListener('input', e => updateState({query: e.target.value}));
    $('#year-filter').addEventListener('change', e => updateState({year:e.target.value}));
    $('#kind-filter').addEventListener('change', e => updateState({kind:e.target.value, ...(e.target.value === 'Reference' ? {mode:'all'} : {})}));
    $('#sort-papers').addEventListener('change', e => updateState({sort:e.target.value}));
    $$('[data-mode]').forEach(button => button.addEventListener('click', () => updateState({mode:button.dataset.mode, ...(button.dataset.mode === 'surveyed' && state.kind === 'Reference' ? {kind:'all'} : {})})));
    $$('[data-filter-level]').forEach(button => button.addEventListener('click', () => updateState({level:button.dataset.filterLevel})));
    $$('[data-filter-family]').forEach(button => button.addEventListener('click', () => updateState({family:button.dataset.filterFamily})));
    $('#reset-filters').addEventListener('click', reset);
    $$('[data-reset]').forEach(button => button.addEventListener('click', reset));
    $('#previous-page').addEventListener('click', () => changePage(state.page - 1));
    $('#next-page').addEventListener('click', () => changePage(state.page + 1));
    $$('[data-browse-family]').forEach(button => button.addEventListener('click', () => {
      updateState({mode:'surveyed',query:'',family:button.dataset.browseFamily,level:'all',kind:'all',year:'all'});
      scrollToElement($('#literature'));
    }));
    $$('[data-paper-search]').forEach(button => button.addEventListener('click', () => {
      updateState({mode:'surveyed',query:button.dataset.paperSearch,family:'all',level:'all',kind:'all',year:'all'});
      scrollToElement($('#literature'));
    }));
    $('#export-papers').addEventListener('click', () => {
      const output = {source:catalogue.meta.source,note:catalogue.meta.note,filters:{...state},entryCount:filtered.length,papers:filtered};
      downloadFile('ai4ai-reference-selection.json',JSON.stringify(output,null,2),'application/json;charset=utf-8');
      toast(`Exported ${filtered.length} reference${filtered.length === 1 ? '' : 's'}.`);
    });
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.target.closest('input,select,textarea,[contenteditable="true"]') && !document.querySelector('dialog[open]')) {
        e.preventDefault(); scrollToElement($('#literature')); $('#paper-search').focus({preventScroll:true});
      }
      if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
    });
    // Column names of the manuscript table that supplies a work's detail fields.
    const FIELD_LABELS = {
      3: [['artifact', 'DIRECTION EMITTED · TABLE 3'], ['historyRead', 'EVIDENCE READ · TABLE 3']],
      4: [['artifact', 'AI-CONSTRUCTED SPACE · TABLE 4'], ['human', 'HUMAN-SPECIFIED UNIVERSE · TABLE 4']],
      5: [['artifact', 'AI-PRODUCED SIGNAL · TABLE 5'], ['human', 'HUMAN ANCHOR · TABLE 5']],
      10: [['task', 'AI4AI TASK · TABLE 10'], ['protocol', 'EVALUATION PROTOCOL · TABLE 10'], ['evidence', 'EVIDENCE PROVIDED · TABLE 10']],
    };
    [6, 7, 8, 9].forEach(n => { FIELD_LABELS[n] = [['artifact', `AI-DESIGNED · TABLE ${n}`], ['human', `HUMAN-FIXED · TABLE ${n}`]]; });
    function notesFor(p) {
      const notes = [];
      const has = test => p.placements.some(test);
      if (has(x => x.type === 'figure' && x.level === 'L3')) notes.push('Figure 8 lists candidate evaluation artifacts, not unconditional L3 assignments: only configurations in which the AI-generated signal causally changes selection, training, or acceptance count as L3.');
      if (has(x => x.type === 'figure' && x.level === 'L2')) notes.push('Figure 6 attributes L2 by component: the label refers to the search-space component AI constructs or revises, not to the whole system.');
      if (has(x => x.boundary)) notes.push('Figure 6 marks this work as a boundary case rather than an unqualified example of primitive or operator construction.');
      if (has(x => /†$/.test(x.label || ''))) notes.push('Marked † in Table 5: typically used for testing or review; L3 only if the AI signal changes downstream evaluation, selection, or operative acceptance.');
      if (has(x => /§$/.test(x.label || ''))) notes.push('Marked § in Table 9: a general-purpose EDA application.');
      if (has(x => x.starred)) notes.push('Marked * in Figure 10: the configuration-dependent condition used in the application tables applies.');
      if (p.basis === 'chapter') notes.push('The level reflects the chapter in which the survey discusses this work; no table or taxonomy figure assigns it a level.');
      if (p.kind === 'Benchmark' && !p.levels.length) notes.push('Benchmarks are listed by the development task they support; a benchmark is not itself assigned a control-source level.');
      if (!p.annotated) notes.push('Cited outside the level chapters and the applications section; listed for completeness without a level or family.');
      return notes;
    }
    function showPaper(ref, trigger) {
      const p = papers.find(item => item.ref === ref);
      if (!p) return;
      const url = externalURL(p.url);
      const fields = (FIELD_LABELS[p.fieldsFrom] || []).filter(([key]) => p[key]);
      const cells = fields.length ? `<div class="detail-grid">${fields.map(([key, label], i) => `<div class="detail-box"${fields.length === 3 && i === 2 ? ' style="grid-column:1/-1"' : ''}><span>${label}</span><p>${escapeHTML(p[key])}</p></div>`).join('')}</div>` : '';
      const where = p.placements.length ? `<div class="detail-placements"><span>WHERE THE SURVEY DISCUSSES IT</span><ul>${p.placements.map(x => `<li><a class="paper-link" href="${escapeHTML(paperURL(x.page))}" target="_blank" rel="noopener">${escapeHTML(x.where)} · p. ${x.page}${icon('external')}</a><span>${escapeHTML(x.path)}${x.type !== 'text' && x.label ? ` — “${escapeHTML(x.label)}”` : ''}${x.level ? ` · ${x.level}` : ''}${x.boundary ? ' · boundary case' : ''}</span></li>`).join('')}</ul></div>` : '';
      const notes = notesFor(p).map(n => `<p class="detail-note">${escapeHTML(n)}</p>`).join('');
      const badges = p.levels.length ? p.levels.map(level => { const b = levelBadge(p, level); return `<span class="level-badge ${b.cls}">${b.text}</span>`; }).join('') : evidenceCell(p).replace(/<span class="row-detail">.*?<\/span>/, '');
      $('#paper-detail-content').innerHTML = `<div class="detail-meta"><span class="paper-year">${p.year || 'Year not supplied'} · [${p.ref}]</span>${badges}${familyBadges(p)}<span class="kind-tag">${kindLabels[p.kind]}</span></div><h2 id="paper-dialog-title">${escapeHTML(p.name)}</h2>${normalize(p.name) !== normalize(p.title) ? `<p class="detail-title">${escapeHTML(p.title)}</p>` : ''}${p.authors ? `<p class="detail-authors">${escapeHTML(p.authors)}</p>` : ''}${cells}${where}${notes}<div class="detail-citation"><span>REFERENCE [${p.ref}] · AS CITED IN THE MANUSCRIPT</span><p>${escapeHTML(p.citation)}</p></div><div class="detail-actions"><a class="button button-primary" href="${escapeHTML(paperLink(p))}" target="_blank" rel="noopener">${icon(url ? 'external' : 'search')}${url ? 'Open paper' : 'Search for this paper'}</a><a class="button button-white" href="${escapeHTML(paperURL(p.sourcePage))}" target="_blank" rel="noopener">${icon('book')}Survey · p. ${p.sourcePage}</a><a class="button button-white" href="${escapeHTML(paperURL(p.refPage))}" target="_blank" rel="noopener">Reference [${p.ref}] · p. ${p.refPage}</a><button class="button button-plain" id="copy-reference">${icon('copy')}Copy reference</button></div>`;
      $('#copy-reference').addEventListener('click', () => copyText(p.citation,'Reference copied.'));
      showDialog($('#paper-dialog'),trigger);
    }
    render();
    // Expose read-only test metadata, not a service or a backend endpoint.
    window.AI4AI_SITE_READY = true;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
