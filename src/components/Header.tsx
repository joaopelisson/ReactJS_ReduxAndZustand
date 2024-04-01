import { useCurrentLesson, useStore } from '../zustand-store'

export function Header() {
  const { currentModule, currentlesson } = useCurrentLesson()
  const isLoading  = useStore(store => store.isLoading)

  if (isLoading) {
    return (
      <h1 className="animate-pulse text-2xl font-bold">Carregando aula...</h1>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentlesson?.title}</h1>
      <span className="text-sm text-zinc-400">{currentModule?.title}</span>
    </div>
  )
}
