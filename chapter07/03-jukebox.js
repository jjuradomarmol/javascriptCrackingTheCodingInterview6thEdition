class Player {
  constructor() {
    this.songQueue = [];
    this.currentSong = null;
  }

  shuffle() {
    this.songQueue.sort(() => {
      return Math.random() > 0.5 ? 1 : 0;
    });
  }

  play() {
    if (this.currentSong === null) {
      this.currentSong = this.songQueue.unshift();
      this.currentSong.play();
    } else {
      console.log("song currently playing");
    }
  }

  pause() {
    if (this.currentSong !== null) {
      this.currentSong.pause();
    } else {
      console.log("no song in queue");
    }
  }

  nextSong() {
    this.currentSong = this.songQueue.unshift();
    this.currentSong.play();
  }

  addSong(song) {
    this.songQueue.push(song);
  }

  currentSongName() {
    return this.currentSong.name;
  }
}
