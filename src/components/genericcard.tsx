import styles from "@/styles/Home.module.css"
// import { type } from "os";

type GenericCardprops = {
    nome: string;
    descricao: string;
    imagem: string;
  }

export default function GenericCard({ nome, descricao, imagem} : GenericCardprops ) {
    return(
        <div className={styles.card}>
            <header className={styles.cardTitle}>{nome}</header>
            <div className={styles.cardContent}>{descricao}</div>
            <div className={styles.cardImage}>
                <img src={imagem} alt={''} />
            </div>
        </div>
    );
}