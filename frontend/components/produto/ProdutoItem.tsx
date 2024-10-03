import { Produto } from '@/core'

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps){
    return (
        <div>
            <h1>Produto Item</h1>
        </div>
    )
}