// FIFO (First-In, First-Out) Page Replacement Algorithm
//
// Idea: The page that entered memory first is the first one
// to be replaced when a new page needs to come in.

function runFIFO(pageReferences, frameCount) {
  const frames = []; // Currently holds the pages present in memory
  const steps = [];  // Stores step-by-step simulation data

  let pointer = 0;   // FIFO pointer - points to the oldest page's position
  let pageHits = 0;
  let pageFaults = 0;

  for (let i = 0; i < pageReferences.length; i++) {
    const page = pageReferences[i];

    // Check whether the page is already present in memory
    const pageFound = frames.includes(page);

    if (pageFound) {
      // Page Hit - page is already in a frame
      pageHits++;

      steps.push({
        step: i + 1,
        page: page,
        frames: buildFrameSnapshot(frames, frameCount),
        result: "Hit"
      });
    } else {
      // Page Fault - page is not in memory
      pageFaults++;

      if (frames.length < frameCount) {
        // There is still an empty frame available
        frames.push(page);
      } else {
        // Replace the page that entered memory first
        frames[pointer] = page;
        pointer = (pointer + 1) % frameCount; // Move FIFO pointer
      }

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

// Builds a fixed-length array representing frame contents.
// Empty frames are represented as null.
function buildFrameSnapshot(frames, frameCount) {
  const snapshot = [];
  for (let i = 0; i < frameCount; i++) {
    snapshot.push(frames[i] !== undefined ? frames[i] : null);
  }
  return snapshot;
}

module.exports = runFIFO;
