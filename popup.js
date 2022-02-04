(async () => {
  const qualitySelect = document.querySelector('.quality-select');

  let quality = await new Promise((resolve) => {
    chrome.storage.sync.get('quality', ({ quality }) => resolve(quality));
  });

  if (!quality) {
    quality = '1080';
    chrome.storage.sync.set({ quality });
  }

  qualitySelect.value = quality;

  const qualitySelectChangeHandler = (event) => {
    const quality = event.target.value;
    chrome.storage.sync.set({ quality });
  };

  qualitySelect.addEventListener('change', qualitySelectChangeHandler);
})();
