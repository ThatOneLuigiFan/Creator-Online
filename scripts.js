document.addEventListener("DOMContentLoaded", function() {
    const musicContainer = document.getElementById("music-container");

    const musicFiles = [
        "track1.mp3",
        "track2.wav",
        // Add other tracks here as needed
    ];

    musicFiles.forEach(file => {
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = `./music/${file}`;

        const label = document.createElement("p");
        label.textContent = file;

        const musicBlock = document.createElement("div");
        musicBlock.appendChild(label);
        musicBlock.appendChild(audio);
        musicContainer.appendChild(musicBlock);
    });
});
