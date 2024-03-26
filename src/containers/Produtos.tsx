import Produto from '../components/Produto'
import { useGetSportsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos } = useGetSportsQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
