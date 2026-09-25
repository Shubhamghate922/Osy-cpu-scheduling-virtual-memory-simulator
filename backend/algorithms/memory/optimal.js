// Optimal Page Replacement Algorithm
//
// Optimal Page Replacement can be simulated here because the complete
// future reference string is already known.
//
// Idea: When memory is full, replace the page whose next use is
// farthest away in the future. If a page will never be used again,
// replace that page first.

function runOptimal(pageReferences, frameCount) {
  const frames = [];
  const steps = [];

  let pageHits = 0;
  let pageFaults = 0;

  for (let i = 0; i < pageReferences.length; i++) {
    const page = pageReferences[i];

    // Check whether the page is already present in memory
    const pageFound = frames.includes(page);

    if (pageFound) {
      // Page Hit
      pageHits++;

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
        // Look ahead in the reference string for Optimal Page Replacement
        const indexToReplace = findFarthestPage(frames, pageReferences, i);
        frames[indexToReplace] = page;
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

// Finds the index (in "frames") of the page whose next use is
// farthest in the future. If a page is never used again, it is
// chosen immediately.
function findFarthestPage(frames, pageReferences, currentIndex) {
  let farthestDistance = -1;
  let indexToReplace = 0;

  for (let f = 0; f < frames.length; f++) {
    const framePage = frames[f];
    let nextUseDistance = Number.MAX_SAFE_INTEGER;

    // Search for the next occurrence of framePage after currentIndex
    for (let j = currentIndex + 1; j < pageReferences.length; j++) {
      if (pageReferences[j] === framePage) {
        nextUseDistance = j;
        break;
      }
    }

    // A page with no future use is the best candidate to replace
    if (nextUseDistance === Number.MAX_SAFE_INTEGER) {
      return f;
    }

    if (nextUseDistance > farthestDistance) {
      farthestDistance = nextUseDistance;
      indexToReplace = f;
    }
  }

  return indexToReplace;
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

module.exports = runOptimal;
