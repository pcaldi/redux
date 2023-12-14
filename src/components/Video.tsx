import Player from "react-player/youtube";

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        width="100%"
        height="100%"
        controls
        url="https://youtu.be/iZ_L2sA2TLk?si=KL_tcfyyTz5iwG9E"
      />
    </div>
  );
}
