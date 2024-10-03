import ProdutoItem from "../../components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div>
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
