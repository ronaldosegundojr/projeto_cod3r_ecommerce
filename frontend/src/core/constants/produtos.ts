import { Produto } from "../produto";


const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Notebook Gamer Acer Nitro 5',
        descricao: 'Intel Core i5, 8GB, 512GB SSD, NVIDIA GTX 1650, 15.6" Full HD, Windows 10',
        marca: 'Acer',
        modelo: 'AN515-54-58CL',
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1615454/8/1615454824_1GG.jpg',
        nota: 4.5,
        videoReview: 'https://www.youtube.com/watch?v=8Xf8e7Yqg0Q',
        tags: ['Baixou'],
        precoBase: 4999.99,
        precoPromocional: 3999.99,
        menorPreco: 3499.99,
        maiorPreco: 5999.99,
        precoMedio: 4499.99,
        especificacoes: {
            destaque: 'NVIDIA Geforce RTX 2060',
            processador: 'Intel Core i5-9300H',
            memoria: '8GB DDR4',
            armazenamento: '512GB SSD', 
            placaDeVideo: 'NVIDIA GTX 1650',
            tela: '15.6" Full HD',
            peso: '2.3 kg',
        },
    },
];
