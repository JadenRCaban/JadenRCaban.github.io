const musicList = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    // Add more songs as needed
];

const musicListContainer = document.getElementById("music-list");

musicList.forEach(song => {
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.innerHTML = `<h3>${song.title}</h3><p>${song.artist}</p>`;
    musicListContainer.appendChild(songElement);
});
