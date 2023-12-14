import { MessageCircle } from "lucide-react";

export function Player(){
  return(
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-[1100px] flex-col gap-6">

        <div className="flex items-center justify-between ">

          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos Redux</h1>
              <span className="text-sm text-zinc-400">Modulo Redux</span>
          </div>

          <button className="flex gap-2 items-center bg-violet-500 rounded px-3 py-3 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4"/>
            Deixar feedback
          </button>
        </div>

        <main className="flex relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            video
          </div>

          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]">

          </aside>

        </main>
      </div>
    </div>
  )
}
