// Função para registrar o consumo diário de água
function registerWaterConsumption(amount) {
    // Obter a data atual
    const currentDate = new Date().toLocaleDateString();
  
    // Criar uma nova linha na tabela de registros diários
    const dailyRecordTable = document.getElementById("daily-record-body");
    const newRow = document.createElement("tr");
  
    // Criar as colunas da linha
    const dateCell = document.createElement("td");
    dateCell.textContent = currentDate;
  
    const waterCell = document.createElement("td");
    waterCell.textContent = amount + " ml";
  
    // Adicionar as colunas à linha
    newRow.appendChild(dateCell);
    newRow.appendChild(waterCell);
  
    // Adicionar a nova linha à tabela de registros diários
    dailyRecordTable.appendChild(newRow);
  
    // Atualizar a quantidade de água consumida no círculo
    const waterAmountSpan = document.getElementById("water-amount");
    const currentAmount = parseInt(waterAmountSpan.textContent);
    waterAmountSpan.textContent = currentAmount + amount + " ml";
  }
  
  // Exemplo de uso da função para registrar 250 ml de água consumida
  registerWaterConsumption(250);
  