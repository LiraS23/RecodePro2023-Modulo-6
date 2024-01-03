import { useEffect, useState } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'

const Destino = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API
        axios
            .get("https://localhost:7286/api/Pedidos")
            .then((response) => {
                setPedidos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de pedidos:", error);
            });
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className="h1">Lista de Pacotes</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pedido ID</th>
                            <th>Data do Pedido</th>
                            <th>Diarias do Pedido</th>
                            <th>Valor do Pedido</th>
                            <th>CPF Cliente</th>
                            <th>Pacote ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((element) => (
                            <tr key={element.pedidoId}>
                                <td>{element.pedidoId}</td>
                                <td>{element.dataPedido}</td>
                                <td>{element.diariasPedido}</td>
                                <td>R$: {element.valorPedido}</td>
                                <td>{element.clienteCPF}</td>
                                <td>{element.pacoteId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Destino;