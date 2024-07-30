import { Produtos } from "./produtos";

export interface Notas {
    id?: string;
    cliente: string;
    produtos: Produtos[]
    image: string;
    data: Date
}