import { atom } from "nanostores";

export const showVideo = atom(false);

export function setShowVideo(b) {
    showVideo.set(b);
}
