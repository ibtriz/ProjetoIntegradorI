async function addProduct() {
    const numero = document.getElementById('numero').value;
    const produto = document.getElementById('produto').value;
    const tipo = document.getElementById('tipo').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value).toFixed(2);
    const total = (quantidade * preco).toFixed(2);

    const produtoData = { numero, produto, tipo, quantidade, preco, total };

    const response = await fetch('http://localhost:3000/api/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoData)
    });

    if (response.ok) {
        loadFromDatabase();
        document.getElementById('productForm').reset();
    } else {
        alert('Erro ao adicionar produto!');
    }
}

async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3000/api/produtos/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        loadFromDatabase();
    } else {
        alert('Erro ao excluir produto!');
    }
}

async function loadFromDatabase() {
    const response = await fetch('http://localhost:3000/api/produtos');
    const data = await response.json();
    const produtos = data.produtos;

    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Limpar tabela antes de carregar novos dados

    produtos.forEach(function(produto) {
        const row = table.insertRow();
        row.insertCell(0).textContent = produto.numero;
        row.insertCell(1).textContent = produto.produto;
        row.insertCell(2).textContent = produto.tipo;
        row.insertCell(3).textContent = produto.quantidade;
        row.insertCell(4).textContent = produto.preco;
        row.insertCell(5).textContent = produto.total;
        const deleteCell = row.insertCell(6);
        deleteCell.innerHTML = `<button onclick="deleteProduct(${produto.id})">Excluir</button>`;
    });

    // Atualiza o total geral ao carregar os dados
    calculateTotal();
}

function calculateTotal() {
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const rows = table.rows;
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
        const total = parseFloat(rows[i].cells[5].textContent);
        sum += total;
    }

    document.getElementById('totalSum').textContent = sum.toFixed(2);
}

document.addEventListener('DOMContentLoaded', loadFromDatabase);
