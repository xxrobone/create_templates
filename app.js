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

const mainEl = `
<main>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam molestiae ipsa eligendi aut ab molestias facere accusantium iusto quisquam harum atque voluptatem dignissimos sint assumenda amet exercitationem ducimus minima porro? Officiis maxime corrupti tenetur ullam modi at, eos rem voluptas magni! Id veritatis veniam voluptatem molestias ullam repellat, et modi, assumenda tempore animi eos eaque libero esse eius? Explicabo amet numquam nihil odio sint corporis sequi adipisci, blanditiis soluta voluptatibus, laudantium non temporibus architecto voluptate ratione facilis pariatur. Veniam.
        </p>
</main>
`;

const main = elementFromHtml(mainEl);

document.body.append(header, main);
