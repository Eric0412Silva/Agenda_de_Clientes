document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cliente-form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const nome = formData.get('nome');
      const cpf = formData.get('cpf');
      const numero = formData.get('numero');
  
      const response = await fetch('../routes/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, numero }),
      });
  
      if (response.ok) {
        form.reset();
        alert('Cliente adicionado com sucesso!');
      } else {
        alert('Ocorreu um erro ao adicionar o cliente.');
      }
    });
  
    async function carregarClientes() {
      const response = await fetch('../routes/clientes');
      const clientes = await response.json();
  
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
  
      clientes.forEach((cliente) => {
        const row = `
          <tr>
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.numero}</td>
          </tr>
        `;
  
        tbody.insertAdjacentHTML('beforeend', row);
      });
    }
  
    carregarClientes();
  });
  