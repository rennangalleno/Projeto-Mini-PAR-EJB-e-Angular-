
export interface Cliente {

    id?: number;
    cpf: string;
    nome: string;
    email: string;
    dataNascimento: Date;
    conta?: {
        id: number;
        agencia: number;
        numero: number;
        saldo: number;
    }
}