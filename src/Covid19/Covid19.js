import React from 'react'
import Header from './components/Header'
import './assets/css/Covid.css'
import { PersistGate } from 'redux-persist/integration/react';
import {Spinner} from 'react-bootstrap';
import {Provider} from 'react-redux';
import configStore from './store';
import Content from './pages/contents'

const { persistor, store } = configStore();
function Covid() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Spinner animation="border" />}
                persistor={persistor}
            >
                <div className="Covid">
                    <Header />
                    <Content />
                </div>
            </PersistGate>
        </Provider>
       
    )
}
export default Covid