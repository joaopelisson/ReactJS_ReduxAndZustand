import { Loader2 } from 'lucide-react'
import { useCallback } from 'react'
import ReactPlayer from 'react-player'

import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
  const { currentlesson } = useCurrentLesson()
  const { next, isLoading } = useStore(store => {
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  })

  const handlePlayNext = useCallback(() => {
    next()
  }, [])

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://youtube.com/watch?v=${currentlesson?.id}`}
          onEnded={handlePlayNext}
        />
      )}
    </div>
  )
}
