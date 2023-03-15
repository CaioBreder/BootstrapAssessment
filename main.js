const form = document.querySelector('form');

const songInput = document.querySelector('#songTitle');

const ulEl = document.querySelector('#list');

const artistInput = document.querySelector('#artist');



let songs = [];

document.querySelector('button').addEventListener('click', function(event){
  event.preventDefault();

  const song = songInput.value;
  const artist = artistInput.value;

  console.log(songs);
  songs.push({song, artist});
  songInput.value = '';
  artistInput.value = '';

  let songList = songs.map(fav => `
    <li> ${fav.song} by ${fav.artist}</li>
  `)

  ulEl.innerHTML = songList.join(" ");
});