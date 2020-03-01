import { Provider, useDispatch, useStore, useSelector } from './reducer.js'

function TypingsTest() {
  const dispatch = useDispatch()
  dispatch({
    type: 'start-game',
  })

  const store = useStore()
  store.getState().viewMode === 'opening-view'

  const state = useSelector(state => state.viewMode)
  state === 'opening-view'

  return React.createElement(Provider, { value: store, children: null })
}
