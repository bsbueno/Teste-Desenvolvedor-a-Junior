import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class quadrinho{
    @PrimaryGeneratedColumn()
    id:         number;

    @Column()
    titulo:     string;
    
    @Column()
    descri:     string;
    
    @Column()
    valor:      number;
   
    @Column()
    cat:        string;
    
    @Column()
    editora:       string;
    
    @Column()
    volume:     string;

    

}