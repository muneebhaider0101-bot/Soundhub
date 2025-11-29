/**
 * SoundHub - High End Music Experience
 * Main Application Logic
 */

const app = {
    audio: null,
    isPlaying: false,
    currentTrackIndex: 0,
    tracks: [],
    currentGenre: null,

    // DOM Elements
    elements: {
        playerWrapper: document.querySelector('.player-wrapper'),
        islandCollapsed: document.querySelector('.island-collapsed'),
        islandExpanded: document.querySelector('.island-expanded'),
        btnClose: document.querySelector('.btn-close-island'),

        // Collapsed
        imgSmall: document.getElementById('island-img'),
        titleSmall: document.getElementById('island-title'),
        artistSmall: document.getElementById('island-artist'),
        btnPlaySmall: document.getElementById('btn-play'),
        btnNextSmall: document.getElementById('btn-next'),

        // Expanded
        imgLarge: document.getElementById('expanded-img'),
        titleLarge: document.getElementById('expanded-title'),
        artistLarge: document.getElementById('expanded-artist'),
        btnPrevExp: document.getElementById('exp-prev'),
        btnPlayExp: document.getElementById('exp-play'),
        btnNextExp: document.getElementById('exp-next'),
        progressFill: document.getElementById('progress-fill'),
        progressBar: document.querySelector('.progress-bar'),

        // Modal
        modalOverlay: document.getElementById('genre-modal'),
        btnCloseModal: document.querySelector('.btn-close-modal'),
        modalTitle: document.getElementById('modal-genre-title'),
        modalList: document.getElementById('modal-artist-list')
    },

    init() {
        console.log("SoundHub Init");
        this.audio = document.getElementById('audio-engine');

        // Load tracks from global data object
        if (window.SoundHubData && window.SoundHubData.allSongs) {
            console.log("Data found:", window.SoundHubData);
            this.tracks = window.SoundHubData.allSongs;
        } else {
            console.error('Music data not found. window.SoundHubData is:', window.SoundHubData);
            this.tracks = [];
        }

        this.setupEventListeners();
        if (this.tracks.length > 0) {
            this.loadTrack(0);
        } else {
            console.warn("No tracks to load.");
        }
        this.setupScrollObserver();
        this.setupGenreInteractions();
    },

    setupEventListeners() {
        // Play/Pause
        this.elements.btnPlaySmall.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePlay();
        });
        this.elements.btnPlayExp.addEventListener('click', () => this.togglePlay());

        // Navigation
        this.elements.btnNextSmall.addEventListener('click', (e) => {
            e.stopPropagation();
            this.nextTrack();
        });
        this.elements.btnNextExp.addEventListener('click', () => this.nextTrack());
        this.elements.btnPrevExp.addEventListener('click', () => this.prevTrack());

        // Expand/Collapse
        this.elements.islandCollapsed.addEventListener('click', () => this.expandPlayer());
        this.elements.btnClose.addEventListener('click', (e) => {
            e.stopPropagation();
            this.collapsePlayer();
        });

        // Modal Close
        this.elements.btnCloseModal.addEventListener('click', () => this.closeModal());
        this.elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.modalOverlay) this.closeModal();
        });

        // Audio Events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextTrack());
        this.audio.addEventListener('error', (e) => {
            console.error("Audio Error:", e);
            setTimeout(() => this.nextTrack(), 1000);
        });

        // Progress Bar Click
        this.elements.progressBar.addEventListener('click', (e) => {
            const width = this.elements.progressBar.clientWidth;
            const clickX = e.offsetX;
            const duration = this.audio.duration;
            if (duration) {
                this.audio.currentTime = (clickX / width) * duration;
            }
        });

        // Connect Button
        const btnConnect = document.querySelector('.btn-connect');
        if (btnConnect) {
            btnConnect.addEventListener('click', () => {
                alert('Connect feature coming soon!');
            });
        }

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.togglePlay();
            } else if (e.code === 'ArrowRight') {
                this.nextTrack();
            } else if (e.code === 'ArrowLeft') {
                this.prevTrack();
            } else if (e.code === 'Escape') {
                this.collapsePlayer();
                this.closeModal();
            }
        });
    },

    setupGenreInteractions() {
        console.log("Setting up genre interactions...");
        const genreMap = {
            'pop-card': 'pop',
            'electronic-card': 'electronic',
            'rock-card': 'rock',
            'jazz-card': 'jazz',
            'classical-card': 'classical'
        };

        Object.keys(genreMap).forEach(className => {
            const card = document.querySelector(`.${className}`);
            if (card) {
                console.log(`Found card: .${className}, binding to ${genreMap[className]}`);
                card.addEventListener('click', () => {
                    console.log(`Clicked .${className}`);
                    this.openGenreModal(genreMap[className]);
                });
            } else {
                console.warn(`Card not found: .${className}`);
            }
        });
    },

    openGenreModal(genre) {
        const modal = this.elements.modalOverlay;
        const title = this.elements.modalTitle;
        const list = this.elements.modalList;

        if (!modal || !title || !list) return;

        this.currentGenre = genre;
        title.textContent = genre.charAt(0).toUpperCase() + genre.slice(1) + " Artists";
        list.innerHTML = '';

        const artists = window.SoundHubData.genreArtists[genre];

        if (!artists || artists.length === 0) {
            list.innerHTML = '<div class="track-item">No artists found.</div>';
            modal.classList.add('active');
            return;
        }

        artists.forEach((artist) => {
            const item = document.createElement('div');
            item.className = 'track-item';
            item.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                <div class="track-info">
                    <div class="track-name">${artist.name}</div>
                    <div class="track-artist">${artist.songs.length} Songs</div>
                </div>
                <button class="play-btn"><i class="fa-solid fa-chevron-right"></i></button>
            `;

            item.onclick = () => this.openArtistModal(artist);
            list.appendChild(item);
        });

        modal.classList.add('active');
    },

    openArtistModal(artist) {
        const title = this.elements.modalTitle;
        const list = this.elements.modalList;

        // Back Button
        title.innerHTML = `<span style="cursor:pointer; margin-right:10px;" id="back-btn">←</span> ${artist.name}`;

        // Use event delegation or direct assignment after innerHTML update
        setTimeout(() => {
            const backBtn = document.getElementById('back-btn');
            if (backBtn) {
                backBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.openGenreModal(this.currentGenre);
                };
            }
        }, 0);

        list.innerHTML = '';

        // Official Link
        if (artist.link) {
            const linkItem = document.createElement('div');
            linkItem.style.padding = '10px';
            linkItem.style.textAlign = 'center';
            linkItem.innerHTML = `<a href="${artist.link}" target="_blank" style="color: var(--neon-cyan); text-decoration: none; font-weight: bold;">Listen on Apple Music ↗</a>`;
            list.appendChild(linkItem);
        }

        artist.songs.forEach((song, index) => {
            const item = document.createElement('div');
            item.className = 'track-item';
            item.innerHTML = `
                <img src="${song.art}" alt="${song.title}" style="width: 40px; height: 40px; border-radius: 4px;">
                <div class="track-info">
                    <div class="track-name">${song.title}</div>
                    <div class="track-artist">Preview</div>
                </div>
                <button class="play-btn">▶</button>
            `;

            item.onclick = () => this.playArtistTrack(artist, index);
            list.appendChild(item);
        });
    },

    playArtistTrack(artist, index) {
        const trackData = artist.songs[index];

        this.tracks = artist.songs.map(s => ({
            title: s.title,
            artist: artist.name,
            src: s.src,
            art: s.art
        }));

        this.currentTrackIndex = index;
        this.loadTrack(index);
        this.togglePlay();
    },

    closeModal() {
        this.elements.modalOverlay.classList.remove('active');
    },

    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.style.animation = 'none';
            section.offsetHeight; /* trigger reflow */
            section.style.animation = 'fadeUp 1s forwards';
            section.style.animationPlayState = 'paused';
            observer.observe(section);
        });

        // Nav Active State
        window.addEventListener('scroll', () => {
            let current = '';
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('href').includes(current)) {
                    li.classList.add('active');
                }
            });
        });
    },

    loadTrack(index) {
        if (index < 0 || index >= this.tracks.length) return;

        this.currentTrackIndex = index;
        const track = this.tracks[index];

        this.audio.src = track.src;

        // Update UI
        this.elements.titleSmall.textContent = track.title;
        this.elements.artistSmall.textContent = track.artist;
        this.elements.imgSmall.src = track.art;

        this.elements.titleLarge.textContent = track.title;
        this.elements.artistLarge.textContent = track.artist;
        this.elements.imgLarge.src = track.art;

        if (this.isPlaying) {
            this.audio.play().catch(e => console.log("Autoplay prevented:", e));
        }
    },

    togglePlay() {
        if (!this.audio.src) return;

        if (this.audio.paused) {
            const playPromise = this.audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isPlaying = true;
                    this.elements.playerWrapper.classList.add('playing');
                    document.body.classList.add('music-playing');
                    this.updatePlayIcons(true);
                }).catch(e => {
                    console.error("Play failed:", e);
                    this.isPlaying = false;
                    this.updatePlayIcons(false);
                });
            }
        } else {
            this.audio.pause();
            this.isPlaying = false;
            this.isPlaying = false;
            this.elements.playerWrapper.classList.remove('playing');
            document.body.classList.remove('music-playing');
            this.updatePlayIcons(false);
        }
    },

    updatePlayIcons(isPlaying) {
        const icon = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
        this.elements.btnPlaySmall.innerHTML = icon;
        this.elements.btnPlayExp.innerHTML = icon;
    },

    nextTrack() {
        let nextIndex = this.currentTrackIndex + 1;
        if (nextIndex >= this.tracks.length) nextIndex = 0;
        this.loadTrack(nextIndex);
    },

    prevTrack() {
        let prevIndex = this.currentTrackIndex - 1;
        if (prevIndex < 0) prevIndex = this.tracks.length - 1;
        this.loadTrack(prevIndex);
    },

    updateProgress() {
        if (this.audio.duration) {
            const percent = (this.audio.currentTime / this.audio.duration) * 100;
            this.elements.progressFill.style.width = `${percent}%`;
        }
    },

    expandPlayer() {
        this.elements.playerWrapper.classList.add('expanded');
        this.elements.playerWrapper.classList.add('dynamic-island');
    },

    collapsePlayer() {
        this.elements.playerWrapper.classList.remove('expanded');
    },

    handleImageError(img) {
        img.src = 'https://via.placeholder.com/300/000000/ffffff?text=Music';
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
