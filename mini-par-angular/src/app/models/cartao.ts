import { Cliente } from './cliente';
import { TipoRecebivel } from './tipoRecebivel';
import { SituacaoRecebivel } from './situacaoRecebivel';
import { Bandeira } from './bandeira';

export interface Cartao{
    id?:number;
    tipoRecebivel?:TipoRecebivel;
    bandeira:Bandeira;
    cliente:Cliente,
    dataCriacao?:Date;
    dataVencimento:Date;
    situacaoRecebivel?:SituacaoRecebivel;
    valor:number;
}