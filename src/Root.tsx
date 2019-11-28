import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import { FormContainer } from './containers/FormContainer'
import './Root.scss'

interface RootProps {
  store: ReturnType<typeof configureStore>
  history: History
}

const Root: React.FC<RootProps> = ({ store, history }: RootProps) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="main-container">
          <FormContainer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
