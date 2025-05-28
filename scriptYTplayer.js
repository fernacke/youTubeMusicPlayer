const playlist = [
    {
        title: "Les Jours Tristes - Yann Tiersen",
        videoId: "AA4deEZjnBA"
    },
    {
        title: "Sunrise, Sunset - Bright Eyes",
        videoId: "1aSXYNt8udc"
    },
    {
        title: "Elastic Heart - Sia",
        videoId: "KWZGAExj-es"
    }
];

let player;
let currentTrackIndex = Math.floor(Math.random() * 3);
let currentTrackId = playlist[currentTrackIndex].videoId;

// Carrega a API do YouTube
function loadYouTubePlayerAPI() {
    const youTubeAPI = document.createElement('script'); // Cria o script
    youTubeAPI.src = "https://www.youtube.com/iframe_api"; // Declara a fonte
    const firstScript = document.getElementsByTagName('script')[0]; 
    firstScript.parentNode.insertBefore(youTubeAPI, firstScript); // Faz ele ser executado primeiro
}

loadYouTubePlayerAPI();

function onYouTubeIframeAPIReady () { 
    player = new YT.Player('player', { // Cria novo player com a Id "player"
        height: '0',
        width: '0', // Torna invisível
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'rel': 0,
        },
        videoId: currentTrackId,
        events: {
            'onReady': onPlayerReady,
        }
    });
};

function onPlayerReady(event) { 
            enableControls(); // Habilita controles 
            player.setVolume(50); // Define o volume inicial
};

// Habilita controles
function enableControls() {
    document.getElementById('prev-btn').disabled = false;
    document.getElementById('play-btn').disabled = false; 
    document.getElementById('pause-btn').disabled = false; 
    document.getElementById('next-btn').disabled = false;     
}

// Configura os eventos dos botões
document.getElementById('play-btn').addEventListener('click', () => {
    if(player.getPlayerState() !== YT.PlayerState.PLAYING) {
        player.playVideo();
    }
});
