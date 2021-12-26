import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable(){
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>Titulo</td>
                        <td>Valor</td>
                        <td>Categoria</td>
                        <td>Data</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Café</td>
                        <td className="withdraw">- R$10.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}