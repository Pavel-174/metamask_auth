import { createSlice } from '@reduxjs/toolkit'

const account = createSlice({
	name: 'account',
	initialState: {
		account: '',
	},
	reducers: {
		setAccount(state, action) {
			state.account = action.payload
		},
	}
})

export default account.reducer

export const { 
	setAccount, 
} = account.actions