// Simple client-side search for static site
(function() {
  function getQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  }
  function highlight(text, term) {
    if (!term) return text;
    return text.replace(new RegExp('('+term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')+')', 'gi'), '<span class="search-highlight">$1</span>');
  }
  function renderResults(results, term) {
    const list = document.getElementById('search-results');
    list.innerHTML = '';
    results.forEach(function(item) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="'+item.url+'">'+highlight(item.title, term)+'</a><br><small>'+highlight(item.summary, term)+'</small>';
      list.appendChild(li);
    });
    document.getElementById('no-results').style.display = results.length ? 'none' : '';
  }
  function search(term) {
    term = term.trim();
    if (!term) {
      renderResults([], term);
      return;
    }
    const results = window.SEARCH_INDEX.filter(function(item) {
      return (item.title+item.summary).toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
    renderResults(results, term);
  }
  // Handle form submission for both nav and main search forms
  var navForm = document.querySelector('form.search');
  var navInput = document.getElementById('site-search');
  var mainForm = document.getElementById('site-search-form');
  var mainInput = document.getElementById('site-search-input');

  if (navForm && navInput) {
    navForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const term = navInput.value;
      if (term) {
        window.location.href = '/search.html?q=' + encodeURIComponent(term);
      }
    });
  }

  if (mainForm && mainInput) {
    mainForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const term = mainInput.value;
      if (term) {
        window.history.replaceState({}, '', '?q=' + encodeURIComponent(term));
        search(term);
      }
    });
  }

  // On page load, run search if query param present
  const initial = getQuery();
  if (mainInput && initial) {
    mainInput.value = initial;
    search(initial);
  } else if (navInput && initial) {
    navInput.value = initial;
    search(initial);
  }
})();
