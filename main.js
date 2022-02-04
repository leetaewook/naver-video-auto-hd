(async () => {
  let didClick = false;
  let quality = await new Promise((resolve) => {
    chrome.storage.sync.get('quality', ({ quality }) => resolve(quality));
  });

  if (!quality) {
    quality = '1080';
    chrome.storage.sync.set({ quality });
  }

  // If 1080p is preferred, but 1080p does not exist, then select 720p.
  const setQualityOfPrismPlayer = () => {
    didClick = true;

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
  };

  const setQualityOfPrismLivePlayer = () => {
    didClick = true;

    const qualityItems = [...document.querySelectorAll('li.pzp-pc-ui-setting-quality-item')];

    switch (quality) {
      case '1080':
        const quality1080 = qualityItems.filter(
          (ele) => ele.textContent.includes('1080p') && !ele.textContent.includes('자동'),
        )[0];
        if (quality1080) {
          quality1080.click();
          break;
        }
      case '720': {
        const quality720 = qualityItems.filter(
          (ele) => ele.textContent.includes('720p') && !ele.textContent.includes('자동'),
        )[0];
        if (quality720) {
          quality720.click();
          break;
        }
      }
      case '480': {
        const quality480 = qualityItems.filter(
          (ele) => ele.textContent.includes('480p') && !ele.textContent.includes('자동'),
        )[0];
        if (quality480) {
          quality480.click();
          break;
        }
      }
      case '360': {
        const quality360 = qualityItems.filter(
          (ele) => ele.textContent.includes('360p') && !ele.textContent.includes('자동'),
        )[0];
        if (quality360) {
          quality360.click();
          break;
        }
      }
      case '270':
      case '144': {
        const quality270 = qualityItems.filter(
          (ele) => ele.textContent.includes('270p') && !ele.textContent.includes('자동'),
        )[0];
        if (quality270) {
          quality270.click();
          break;
        }
      }
      case 'ABR': {
        const qualityABR = qualityItems.filter((ele) => ele.textContent.includes('자동'))[0];
        if (qualityABR) {
          qualityABR.click();
          break;
        }
      }
      default: {
        didClick = false;
      }
    }
  };

  const setQualityOfLivePlayer = async () => {
    const settingButton = document.querySelector('button[class^="ControlBox_button_control"][data-type="setting"]');
    let qualityItems = [...document.querySelectorAll('button[class^="SettingPopup_button_menu"]')];

    if (!settingButton) return;
    if (!qualityItems.length) {
      settingButton.click();
      await new Promise((res) => setTimeout(() => res(), 10)); // It's faster than < await click(); >.
      qualityItems = [...document.querySelectorAll('button[class^="SettingPopup_button_menu"]')];
    }

    didClick = true;

    switch (quality) {
      case '1080':
        const quality1080 = qualityItems.filter((ele) => ele.textContent.includes('1080p'))[0];
        if (quality1080) {
          quality1080.click();
          break;
        }
      case '720': {
        const quality720 = qualityItems.filter((ele) => ele.textContent.includes('720p'))[0];
        if (quality720) {
          quality720.click();
          break;
        }
      }
      case '480': {
        const quality480 = qualityItems.filter((ele) => ele.textContent.includes('480p'))[0];
        if (quality480) {
          quality480.click();
          break;
        }
      }
      case '360': {
        const quality360 = qualityItems.filter((ele) => ele.textContent.includes('360p'))[0];
        if (quality360) {
          quality360.click();
          break;
        }
      }
      case '270':
      case '144': {
        const quality272 = qualityItems.filter((ele) => ele.textContent.includes('272p'))[0];
        if (quality272) {
          quality272.click();
          break;
        }
      }
      case 'ABR': {
        settingButton.click();
        break;
      }
      default: {
        settingButton.click();
        didClick = false;
      }
    }
  };

  const setQualityOfURmcPlayer = (uRmcPlayer, uRmcPlayerObserver) => {
    didClick = true;

    switch (quality) {
      case '1080':
      case '720': {
        const quality720 = uRmcPlayer.querySelector('li[data-enc-option="720P"] button');
        if (quality720) {
          quality720.click();
          break;
        }
      }
      case '480': {
        const quality480 = uRmcPlayer.querySelector('li[data-enc-option="480P"] button');
        if (quality480) {
          quality480.click();
          break;
        }
      }
      case '360': {
        const quality360 = uRmcPlayer.querySelector('li[data-enc-option="360P"] button');
        if (quality360) {
          quality360.click();
          break;
        }
      }
      case '270': {
        const quality270 = uRmcPlayer.querySelector('li[data-enc-option="270P"] button');
        if (quality270) {
          quality270.click();
          break;
        }
      }
      case '144': {
        const quality144 = uRmcPlayer.querySelector('li[data-enc-option="144P"] button');
        if (quality144) {
          quality144.click();
          break;
        }
      }
      case 'ABR': {
        const qualityABR = uRmcPlayer.querySelector('li[data-enc-option="자동"] button');
        if (qualityABR) {
          qualityABR.click();
          break;
        }
      }
      default: {
        didClick = false;
      }
    }

    if (didClick) uRmcPlayerObserver.disconnect();
  };

  const setQualityOfPressLivePlayer = () => {
    didClick = true;

    const qualityItems = [...document.querySelectorAll('.resolutionBarBox > ul > li > button')];
    if (qualityItems.length <= 1) {
      didClick = false;
      return;
    }

    switch (quality) {
      case '1080':
        const quality1080 = qualityItems.filter((ele) => ele.textContent.includes('1080p'))[0];
        if (quality1080) {
          quality1080.click();
          break;
        }
      case '720': {
        const quality720 = qualityItems.filter((ele) => ele.textContent.includes('720p'))[0];
        if (quality720) {
          quality720.click();
          break;
        }
      }
      case '480': {
        const quality480 = qualityItems.filter((ele) => ele.textContent.includes('480p'))[0];
        if (quality480) {
          quality480.click();
          break;
        }
      }
      case '360': {
        const quality360 = qualityItems.filter((ele) => ele.textContent.includes('360p'))[0];
        if (quality360) {
          quality360.click();
          break;
        }
      }
      case '270':
      case '144': {
        const quality270 = qualityItems.filter((ele) => ele.textContent.includes('270p'))[0];
        if (quality270) {
          quality270.click();
          break;
        }
      }
      case 'ABR': {
        break;
      }
      default: {
        didClick = false;
      }
    }
  };

  let throttleTimer;
  const domObserver = new MutationObserver(() => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(async () => {
      throttleTimer = null;

      // Naver TV, Naver Sports News
      const prismPlayer = document.querySelector('.rmcplayer');
      if (prismPlayer) setQualityOfPrismPlayer();

      // Naver TV Live
      const prismLivePlayer = document.querySelector('.player .live_video');
      if (prismLivePlayer) setQualityOfPrismLivePlayer();

      // Naver Sports Live
      const livePlayer = document.querySelector('[class^="LivePlayer"]');
      if (livePlayer) await setQualityOfLivePlayer();

      // Naver News
      const uRmcPlayer = document.querySelector('.vod_area > iframe')?.contentWindow?.document?.body;
      if (uRmcPlayer) {
        const uRmcPlayerObserver = new MutationObserver(() => setQualityOfURmcPlayer(uRmcPlayer, uRmcPlayerObserver));
        uRmcPlayerObserver.observe(uRmcPlayer, { childList: true, subtree: true });
      }

      // Naver News Live
      const pressLivePlayer = document.querySelector('.prli_player');
      if (pressLivePlayer) setQualityOfPressLivePlayer();

      if (didClick) domObserver.disconnect();
    }, 1000);
  });

  domObserver.observe(document.body, { childList: true, subtree: true, attributes: false });
})();
