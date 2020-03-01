import produce from '/app/web_modules/immer.js'
import { Store } from '/app/web_modules/redux.js'
import { createReduxHooks } from './redux-utils.js'

export type State = {
  viewMode: ViewMode
  prevViewMode?: ViewMode
}

export type ViewMode = 'opening-view' | 'game-view' | 'result-view'

export type Action =
  | {
      type: 'back-view'
    }
  | {
      type: 'start-game'
    }
  | {
      type: 'show-result'
    }

// ==========
// ==========
// ==========
const { Provider, useDispatch, useSelector, useStore } = createReduxHooks<
  Store<State, Action>
>()

export { Provider, useDispatch, useSelector, useStore }

const initialState: State = {
  viewMode: 'opening-view',
}

export const reducer: (state: State, action: Action) => State = produce(
  (state: State | undefined, action: Action): void | State => {
    if (!state) {
      return initialState
    }

    switch (action.type) {
      case 'back-view': {
        popViewMode(state)
        break
      }

      case 'start-game': {
        pushViewMode(state, 'game-view')
        break
      }

      case 'show-result': {
        pushViewMode(state, 'result-view')
        break
      }

      default: {
        const _: never = action
      }
    }
  },
)

function pushViewMode(state: State, newViewMode: ViewMode) {
  state.prevViewMode = state.viewMode
  state.viewMode = newViewMode
}

function popViewMode(state: State) {
  if (!state.prevViewMode) return

  state.viewMode = state.prevViewMode
  state.prevViewMode = undefined
}
