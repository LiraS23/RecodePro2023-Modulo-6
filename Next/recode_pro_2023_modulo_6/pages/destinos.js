import { useEffect, useState } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'

const Destino = () => {
    const [pacotes, setPacotes] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API
        axios
            .get("https://localhost:7286/api/Pacotes")
            .then((response) => {
                setPacotes(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de pacotes:", error);
            });
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className="h1">Lista de Pacotes</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pacote ID</th>
                            <th>Destino</th>
                            <th>Valor da Diaria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacotes.map((element) => (
                            <tr key={element.pacoteId}>
                                <td>{element.pacoteId}</td>
                                <td>{element.destino}</td>
                                <td>R$: {element.valorDiaria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Destino;