(async () => {
  let didClick = false;
  let quality = await new Promise((resolve) => {
    chrome.storage.sync.get('quality', ({ quality }) => resolve(quality));
  });

  if (!quality) {
    quality = '1080';
    chrome.storage.sync.set({ quality });
  }

  // Naver PrismPlayer (Naver TV, Naver Sports, ...)
  const prismPlayerObserver = new MutationObserver(() => {
    const webPlayerInternalVideo = document.querySelector('video.webplayer-internal-video');
    if (!webPlayerInternalVideo) return;
    if (didClick) return;
    didClick = true;

    // If 1080p is preferred, but 1080p does not exist, then select 720p.
    switch (quality) {
      case '1080':
        const quality1080 = document.querySelector('.rmc_option[aria-label="1080p"]');
        if (quality1080) {
          quality1080.click();
          break;
        }
      case '720': {
        const quality720 = document.querySelector('.rmc_option[aria-label="720p"]');
        if (quality720) {
          quality720.click();
          break;
        }
      }
      case '480': {
        const quality480 = document.querySelector('.rmc_option[aria-label="480p"]');
        if (quality480) {
          quality480.click();
          break;
        }
      }
      case '360': {
        const quality360 = document.querySelector('.rmc_option[aria-label="360p"]');
        if (quality360) {
          quality360.click();
          break;
        }
      }
      case '270': {
        const quality270 = document.querySelector('.rmc_option[aria-label="270p"]');
        if (quality270) {
          quality270.click();
          break;
        }
      }
      case '144': {
        const quality144 = document.querySelector('.rmc_option[aria-label="144p"]');
        if (quality144) {
          quality144.click();
          break;
        }
      }
      case 'ABR': {
        const qualityABR = document.querySelector('.rmc_option[aria-label="ABR"]');
        if (qualityABR) {
          qualityABR.click();
          break;
        }
      }
      default: {
        didClick = false;
      }
    }
  });
  prismPlayerObserver.observe(document.body, { childList: true, subtree: true });

  // Naver News

  // Naver News Live

  // Naver Sports Live

  // Naver Blog
})();
