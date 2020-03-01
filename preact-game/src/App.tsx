import { useSelector } from './reducer.js'
import OpeningView from './views/OpeningView.js'

export default function App() {
  const viewMode = useSelector(state => state.viewMode)

  return (
    <>
      {(() => {
        switch (viewMode) {
          case 'opening-view':
            return <OpeningView />

          case 'game-view':
            return <div>{viewMode}</div>

          case 'result-view':
            return <div>{viewMode}</div>

          default: {
            const _: never = viewMode
            return <div>ERROR</div>
          }
        }
      })()}
    </>
  )
}
