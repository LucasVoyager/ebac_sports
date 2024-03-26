import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    setFav: (state, action: PayloadAction<Produto>) => {
      const productFav = action.payload

      if (state.itens.find((p) => p.id === productFav.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== productFav.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens = [...state.itens, productFav]
      }
    }
  }
})

export const { setFav } = favoritosSlice.actions
export default favoritosSlice.reducer
