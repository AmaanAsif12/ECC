import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: 'lightblue',
  },
  reducers: {
    setTheme: (state,data) => {
      state.color = data.payload
    },
  },
}
)

export const { setTheme} = themeSlice.actions

export default themeSlice.reducer
