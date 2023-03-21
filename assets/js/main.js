const CODEPEN_DATA = {
  HTML: [
    {
      title: 'Tags de Formulário Muito Comuns no HTML5',
      href: 'https://codepen.io/guilhermescr/pen/BaOqZYL'
    }
  ],
  CSS: [],
  JavaScript: []
};
const CODEPEN_TECH_OPTIONS = Object.keys(CODEPEN_DATA);

const LINKS_CONTAINER = document.getElementById('links-container');
const BACK_TO_HOME_BUTTON = document.getElementById('home-button');

function backToHome() {
  BACK_TO_HOME_BUTTON.classList.add('hide');
  LINKS_CONTAINER.innerHTML = `
  <a
    class="link-option"
    href="https://www.instagram.com/devguiga/"
    target="_blank"
    rel="external"
    role="button"
  >
    <img src="assets/images/instagram-logo.webp" alt="Instagram Logo" />
    <h2>Dev Guiga Instagram</h2>
  </a>

  <a
    class="link-option"
    href="https://www.youtube.com/@devguiga"
    target="_blank"
    rel="external"
    role="button"
  >
    <img src="assets/images/youtube-logo.webp" alt="YouTube Logo" />
    <h2>Dev Guiga YouTube</h2>
  </a>

  <a id="codepen-link" class="link-option" role="button">
    <img src="assets/images/codepen-logo.webp" alt="Codepen Logo" />
    <h2>Codepen Projects</h2>
  </a>
  `;

  document.getElementById('codepen-link').addEventListener('click', () => {
    BACK_TO_HOME_BUTTON.classList.remove('hide');
    renderCodepenTechs();
  });
}

function renderTechPens(tech) {
  LINKS_CONTAINER.innerHTML = '';

  CODEPEN_DATA[tech].forEach(({ title, href }) => {
    LINKS_CONTAINER.innerHTML += `
    <a
      class="link-option"
      href="${href}"
      target="_blank"
      rel="external"
      role="button"
    >
      <img src="assets/images/codepen-logo.webp" alt="Codepen Logo" />
      <h2>${title}</h2>
    </a>
    `;
  });
}

function renderCodepenTechs() {
  LINKS_CONTAINER.innerHTML = '';

  CODEPEN_TECH_OPTIONS.forEach(codepen_tech_option => {
    if (!CODEPEN_DATA[codepen_tech_option].length) {
      codepen_tech_option = `${codepen_tech_option} [EMPTY]`;
    }

    LINKS_CONTAINER.innerHTML += `
    <a
      class="link-option tech-option"
      role="button"
    >
      <img src="assets/images/codepen-logo.webp" alt="Codepen Logo" />
      <h2>${codepen_tech_option}</h2>
    </a>
    `;
  });

  document.querySelectorAll('.tech-option').forEach(tech_option => {
    tech_option.addEventListener('click', e => {
      let tech_name = e.currentTarget.querySelector('h2').innerHTML;

      if (tech_name.includes('[EMPTY]')) {
        tech_name = tech_name.slice(0, tech_name.search('[EMPTY]') - 1).trim();
      }
      if (CODEPEN_DATA[tech_name].length) {
        renderTechPens(tech_name);
      }
    });
  });
}

BACK_TO_HOME_BUTTON.addEventListener('click', backToHome);

document.getElementById('codepen-link').addEventListener('click', () => {
  BACK_TO_HOME_BUTTON.classList.remove('hide');
  renderCodepenTechs();
});
