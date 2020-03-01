import css from '/app/web_modules/csz.js'
import { useDispatch } from '../reducer.js'

export default function OpeningView() {
  const dispatch = useDispatch()

  const startGame = () => dispatch({ type: 'start-game' })

  return (
    <div className={style} onClick={startGame}>
      <h1>OPENING</h1>
    </div>
  )
}

const style = css`
  height: 100%;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;

  > h1 {
    font-weight: inherit;
    font-size: 18vmin;
  }
`
