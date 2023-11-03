const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch'); // Importe a biblioteca node-fetch.

const db = new sqlite3.Database('database/currencies.db');

app.use(express.json());

app.get('/cotacao', (req, res) => {
    const date = req.query.date;

    if (!date) {
        res.status(400).json({ error: "A data é obrigatória na consulta." });
    } else {
        // Consulta o banco de dados SQLite3 para obter a cotação com base na data.
        db.get("SELECT * FROM cotacoes WHERE data = ?", date, (err, row) => {
            if (err) {
                res.status(500).json({ error: "Erro ao consultar o banco de dados." });
            } else if (row) {
                res.json(row);
            } else {
                // Se a cotação não foi encontrada no banco de dados, busque na API do Banco Central.
                fetchCotacaoFromBancoCentral(date)
                    .then(cotacao => {
                        if (cotacao) {
                            // Salve a cotação no banco de dados.
                            db.run("INSERT INTO cotacoes (data, moeda, valor) VALUES (?, ?, ?)", [date, 'USD', cotacao.valor], (err) => {
                                if (err) {
                                    res.status(500).json({ error: "Erro ao salvar a cotação no banco de dados." });
                                } else {
                                    res.json({ data: date, moeda: 'USD', valor: cotacao.valor });
                                }
                            });
                        } else {
                            res.status(404).json({ error: "Cotação não encontrada para a data especificada." });
                        }
                    })
                    .catch(error => {
                        res.status(500).json({ error: "Erro ao buscar cotação na API do Banco Central." });
                    });
            }
        });
    }
});

// Função para buscar a cotação na API do Banco Central.
async function fetchCotacaoFromBancoCentral(date) {
    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&data=${date}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
                // Extrai a cotação da resposta da API do Banco Central.
                const cotacao = data[0];
                return {
                    valor: cotacao.valor,
                    data: date
                };
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
