import { Pagador } from './pagador';
import { Cliente } from './cliente';
import { TipoRecebivel } from './tipoRecebivel';
import { SituacaoRecebivel } from './situacaoRecebivel';

export interface Boleto{
    id?:number;
    tipoRecebivel?:TipoRecebivel;
    pagador:Pagador;
    cliente:Cliente,
    dataCriacao?:Date;
    dataVencimento:Date;
    situacaoRecebivel?:SituacaoRecebivel;
    valor:number;
}