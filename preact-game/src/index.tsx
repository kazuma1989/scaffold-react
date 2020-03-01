import * as preact from '/app/web_modules/preact.js'
import { createStore } from '/app/web_modules/redux.js'
import { reducer, Provider as StoreProvider } from './reducer.js'

self.React = preact
const { render } = preact

import('./App.js').then(({ default: App }) => {
  const { store } = bootstrap()

  render(
    <StoreProvider value={store}>
      <App />
    </StoreProvider>,
    document.getElementById('root')!,
  )
})

function bootstrap() {
  const store = createStore(
    reducer,
    undefined,
    self.__REDUX_DEVTOOLS_EXTENSION__?.(),
  )

  return { store }
}
