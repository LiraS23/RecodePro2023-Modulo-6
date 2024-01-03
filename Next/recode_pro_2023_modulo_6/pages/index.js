import { useEffect, useState } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'

const Home = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API
        axios
            .get("https://localhost:7286/api/Clientes")
            .then((response) => {
                setClientes(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className="h1">Lista de Clientes</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((element) => (
                            <tr key={element.cpf}>
                                <td>{element.cpf}</td>
                                <td>{element.nome}</td>
                                <td>{element.dataNasc}</td>
                                <td>{element.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;