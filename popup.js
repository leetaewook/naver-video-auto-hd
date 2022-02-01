(() => {
  const qualityList = document.querySelector('.quality-list');

  const qualityListClickHandler = (event) => {
    const { quality } = event.target.dataset;
    chrome.storage.sync.set({ quality });
  };

  qualityList.addEventListener('click', qualityListClickHandler);
})();
