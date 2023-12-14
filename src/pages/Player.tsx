import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player/youtube";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between ">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos Redux</h1>
            <span className="text-sm text-zinc-400">Modulo Redux</span>
          </div>

          <button className="flex gap-2 items-center bg-violet-500 rounded px-3 py-3 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="flex relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://youtu.be/iZ_L2sA2TLk?si=KL_tcfyyTz5iwG9E"
              />
            </div>
          </div>

          <aside className="w-80 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 absolute top-0 bottom-0 right-0 ">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div
                  className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs
                "
                >
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 " />
              </button>
            </div>

            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div
                  className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs
                "
                >
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 " />
              </button>
              <nav className="flex flex-col relative gap-4 p-6">
                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>

                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>

                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>
              </nav>
            </div>

            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div
                  className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs
                "
                >
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 " />
              </button>
              <nav className="flex flex-col relative gap-4 p-6">
                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>

                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>

                <button className="flex items-center text-sm gap-3 text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    9:30
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
