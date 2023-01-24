const elementFromHtml = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  };
  
  const headerEl = `
  <header>
  <nav>
      <ul>
          <li><a href="/">H</a></li>
          <li><a href="/">A</a></li>
          <li><a href="/">C</a></li>
      </ul>
  </nav>
  </header>
  
  `;
  
  const header = elementFromHtml(headerEl);
  
  document.body.appendChild(header);
  