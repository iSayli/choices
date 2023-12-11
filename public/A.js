
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const gameVideo = document.getElementById('game-video');
    const smallTextElement = document.getElementById('a-small-text');

    const socket = io.connect('https://choices-production.up.railway.app/');

    socket.on('reloadPage', () => {
        location.reload(true); // Reload the entire page
      });

    socket.on('updateState', (gameState) => {
    if (gameState.scene === 2) {
        // Change the video source for scene 2
        gameVideo.src = 'https://www.dropbox.com/scl/fi/pc93zin50bxzc98ev9220/Intro.mov?rlkey=3faj4z517kp8q8kl1uz1767b0&raw=1';
        smallTextElement.textContent = '';
        // Trigger the video to start playing
        gameVideo.play();
    } else if (gameState.scene === 2.5) {
        // Change the video source for scene 3
        gameVideo.src = 'https://www.dropbox.com/scl/fi/zbs9sfdbd3qx16s1zt7a3/Launch-Paused.mp4?rlkey=6g8mfzly98bevcji8q2wu875n&raw=1';
        smallTextElement.textContent = 'You can either take asteroid route or long route. Hunter spence will help you with this decision';
        gameVideo.play();
        gameVideo.loop = "true";
        // Trigger the video to start playing
    } else if (gameState.scene === 3) {
        // Change the video source for scene 3
        gameVideo.src = 'https://www.dropbox.com/scl/fi/0zu1lrlen00gglgxc5hqb/Part1Launch.mov?rlkey=j8a5n2jqpvu4eo65oa6thq02e&raw=1';
        smallTextElement.textContent = '';
        gameVideo.play();
        // Trigger the video to start playing
    } else if (gameState.scene === 3.5) {
        // Change the video source for scene 3
        gameVideo.src = 'https://www.dropbox.com/scl/fi/q8ca8yipg6z5ij251ue8a/AsteroidPaused.mp4?rlkey=r10redevptl9dch8ia10zp0s5&raw=1';
        smallTextElement.textContent = 'You can either hide in clouds or attack enemies. Go to this place and this place in this building to help you with this decision';
        gameVideo.play();

        // Trigger the video to start playing
    } else if (gameState.scene === 4) {
        // Change the video source for scene 4
        gameVideo.src = 'https://www.dropbox.com/scl/fi/hqdk1jk9lbc8dj5qslei4/Part2CloudRunNew.mov?rlkey=gx0yxpk3zz6nqj05t5ct4kivs&dl=0';
        smallTextElement.textContent = ''
        gameVideo.play();
        ;
    } else if (gameState.scene === 4.5) {
        // Change the video source for scene 4
        gameVideo.src = 'https://www.dropbox.com/scl/fi/e8lybh75q3jm0mqtxuf9j/Cloud-Paused.mp4?rlkey=tltiqs6tgp9peql13oo89dtqj&raw=1';
        smallTextElement.textContent = 'You need to launch an attack! Select the code which will be hidden in other team’s project ..... '
        gameVideo.play();
        ;
    } else if (gameState.scene === 5) {
        // Change the video source for scene 5
        gameVideo.src = 'https://www.dropbox.com/scl/fi/chszwid8onxk0egdq6hxa/Part3CargoGrab.mov?rlkey=5lflkh4mgjc7ua82hlqbycgyd&raw=1';
        gameVideo.play();
        ;
    }else if (gameState.scene === 5.4) {
        // Victory Scene
        gameVideo.src = 'https://www.dropbox.com/scl/fi/y38bnasi2ktxc8kascjkq/Part4Victory.mov?rlkey=bqhmoe3d6v1femozwqxo5kj2h&raw=1';
        smallTextElement.textContent = 'Congratulations you have got the cargo. You can go home..... '
        gameVideo.play();
        ;
    } else if (gameState.scene === 5.5) {
        // Change the video source for scene 5
        gameVideo.src = 'https://www.dropbox.com/scl/fi/pc93zin50bxzc98ev9220/Intro.mov?rlkey=3faj4z517kp8q8kl1uz1767b0&raw=1';
        smallTextElement.textContent = 'Do you want to start again?'
        gameVideo.play();
        ;
    } else if (gameState.scene === 6) {
        // Change the video source for scene 6        
        gameVideo.src = 'https://www.dropbox.com/scl/fi/pcsqwgrmueep87sxrc338/Lost.mp4?rlkey=00rn0inzc8pz7sfzj1gazqotm&raw=1';
        smallTextElement.textContent = 'Oh no you have lost...'
        gameVideo.play();
        ;
    }
    });


});

  