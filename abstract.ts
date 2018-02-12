abstract class VideoPlayer {
  abstract play();
  abstract pause();
  stop() {}
}

class SonyVideoPlayer extends VideoPlayer {
  play() {
    throw new Error("Method not implemented.");
  }
  pause() {
    throw new Error("Method not implemented.");
  }
}
