document.getElementById('add-cat-form').addEventListener('submit', function(event) {
    // Evita o comportamento padrão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let clinic = document.getElementById('clinic').value;
    let healthStatus = document.getElementById('healthStatus').value;

    // Verifica se estamos editando um gato existente ou adicionando um novo
    if (this.editRow) {
        // Atualiza os detalhes do gato que está sendo editado
        this.editRow.children[0].textContent = name;
        this.editRow.children[1].textContent = age;
        this.editRow.children[2].textContent = clinic;
        this.editRow.children[3].textContent = healthStatus;

        // Limpa a referência para a linha que está sendo editada
        this.editRow = null;
    } else {
        // Adiciona o novo gato à tabela
        addCatToTable(name, age, clinic, healthStatus);
    }

    // Limpa os campos do formulário
    this.reset();
});

function addCatToTable(name, age, clinic, healthStatus) {
    // Cria uma nova linha e células para a tabela
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    let ageCell = document.createElement('td');
    let clinicCell = document.createElement('td');
    let healthStatusCell = document.createElement('td');
    let editCell = document.createElement('td');
    let removeCell = document.createElement('td');

    // Cria o botão de Editar
    let editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', function() {
        // Preenche o formulário com os detalhes atuais do gato
        document.getElementById('name').value = nameCell.textContent;
        document.getElementById('age').value = ageCell.textContent;
        document.getElementById('clinic').value = clinicCell.textContent;
        document.getElementById('healthStatus').value = healthStatusCell.textContent;

        // Salva uma referência para a linha que está sendo editada
        document.getElementById('add-cat-form').editRow = row;
    });

    // Cria o botão de Remover
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', function() {
        // Remove a linha da tabela
        row.remove();
    });

    // Adiciona os botões às células
    editCell.appendChild(editButton);
    removeCell.appendChild(removeButton);

    // Define o texto das células
    nameCell.textContent = name;
    ageCell.textContent = age;
    clinicCell.textContent = clinic;
    healthStatusCell.textContent = healthStatus;

    // Adiciona as células à linha
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(clinicCell);
    row.appendChild(healthStatusCell);
    row.appendChild(editCell);
    row.appendChild(removeCell);

    // Adiciona a linha à tabela
    document.getElementById('cats-table').appendChild(row);
}
