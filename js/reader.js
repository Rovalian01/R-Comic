const params = new URLSearchParams(window.location.search);
const mangaId = parseInt(params.get('id')); // Perbaikan penting

fetch('data/manga.json')
  .then(res => res.json())
  .then(data => {
    const manga = data.find(m => m.id === mangaId);
    const container = document.getElementById('mangaReader');

    if (!manga) {
      container.innerHTML = `<p>Manga tidak ditemukan.</p>`;
      return;
    }

    container.innerHTML = `
      <h1>${manga.title}</h1>
      <p>${manga.description}</p>
      ${manga.chapter.map(chap => `
        <h2>Chapter ${chap.id}</h2>
        ${chap.pages.map(img =>
        `<img src="${img}" width="300"><br>`).join('')}
      `).join('')}
    `;
  })
  .catch(err => {
    console.error(err);
    document.getElementById('mangaReader').innerHTML = `<p>Gagal memuat data.</p>`;
  });
