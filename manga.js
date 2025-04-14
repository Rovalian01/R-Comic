fetch('data/manga.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('mangaList');
    data.forEach(manga => {
      let div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img src="${manga.cover}" width="100">
        <h2>${manga.title}</h2>
        <p>${manga.description}</p>
        <a href="reader.html?id=${manga.id}">Baca</a>
      `;
      container.appendChild(div);
    });
  });