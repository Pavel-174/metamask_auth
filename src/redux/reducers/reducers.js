import { combineReducers, configureStore } from '@reduxjs/toolkit'
import account from '../account/account'

const rootReducer = combineReducers({
	account,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	  })
})
