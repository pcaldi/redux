import Player from "react-player/youtube";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayerNext() {
    dispatch(next());
  }

  if (!currentLesson) {
    return null;
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        width="100%"
        height="100%"
        controls
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handlePlayerNext}
      />
    </div>
  );
}
