// hooks/useOrientation.js
import { useState, useEffect } from "react";

function getOrientation() {
  return window.screen.orientation.type.includes("landscape")
    ? "landscape"
    : "portrait";
}

export function useOrientation() {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    const orientationWatcher = window.screen.orientation;
    if (orientationWatcher) {
      orientationWatcher.addEventListener("change", handleOrientationChange);
    }

    return () => {
      if (orientationWatcher) {
        orientationWatcher.removeEventListener(
          "change",
          handleOrientationChange,
        );
      }
    };
  }, []);

  return orientation;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
    }
    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}
