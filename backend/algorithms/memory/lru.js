// LRU (Least Recently Used) Page Replacement Algorithm
//
// Idea: When a page fault occurs and memory is full,
// replace the page that has not been used for the longest time.

function runLRU(pageReferences, frameCount) {
  const frames = [];       // Currently holds the pages present in memory
  const pageHistory = [];  // Keeps track of the order in which pages were used
  const steps = [];

  let pageHits = 0;
  let pageFaults = 0;

  for (let i = 0; i < pageReferences.length; i++) {
    const page = pageReferences[i];

    // Check whether the page is already present in memory
    const pageFound = frames.includes(page);

    if (pageFound) {
      // Page Hit - update its position as "recently used"
      pageHits++;
      updateHistory(pageHistory, page);

      steps.push({
        step: i + 1,
        page: page,
        frames: buildFrameSnapshot(frames, frameCount),
        result: "Hit"
      });
    } else {
      // Page Fault
      pageFaults++;

      if (frames.length < frameCount) {
        // There is still an empty frame available
        frames.push(page);
      } else {
        // Find the least recently used page.
        // pageHistory.shift() removes it from the history at the same time,
        // so a page that has been replaced is never checked again by mistake.
        const leastRecentlyUsed = pageHistory.shift();
        const indexToReplace = frames.indexOf(leastRecentlyUsed);
        frames[indexToReplace] = page;
      }

      updateHistory(pageHistory, page);

      steps.push({
        step: i + 1,
        page: page,
        frames: buildFrameSnapshot(frames, frameCount),
        result: "Fault"
      });
    }
  }

  return { steps, pageHits, pageFaults };
}

// Moves the given page to the end of pageHistory (marks it as most recently used).
// The page at the front of pageHistory is always the least recently used one.
function updateHistory(pageHistory, page) {
  const existingIndex = pageHistory.indexOf(page);
  if (existingIndex !== -1) {
    pageHistory.splice(existingIndex, 1);
  }
  pageHistory.push(page);
}

// Builds a fixed-length array representing frame contents.
// Empty frames are represented as null.
function buildFrameSnapshot(frames, frameCount) {
  const snapshot = [];
  for (let i = 0; i < frameCount; i++) {
    snapshot.push(frames[i] !== undefined ? frames[i] : null);
  }
  return snapshot;
}

module.exports = runLRU;
