// Função para registrar as proteínas e carboidratos consumidos diariamente
function registerDailyMacros(protein, carbs) {
    // Obter a tabela de registros diários
    const dailyRecordTable = document.getElementById("daily-record-table");
  
    // Criar uma nova linha na tabela
    const newRow = document.createElement("tr");
  
    // Criar as colunas da linha
    const proteinCell = document.createElement("td");
    proteinCell.textContent = protein + " g";
  
    const carbsCell = document.createElement("td");
    carbsCell.textContent = carbs + " g";
  
    // Adicionar as colunas à linha
    newRow.appendChild(proteinCell);
    newRow.appendChild(carbsCell);
  
    // Adicionar a nova linha à tabela de registros diários
    dailyRecordTable.appendChild(newRow);
  }
  
  // Função para adicionar as últimas refeições
  function addLastMeal(meal, calories) {
    // Obter a tabela de últimas refeições
    const lastMealsTable = document.getElementById("last-meals-table");
  
    // Criar uma nova linha na tabela
    const newRow = document.createElement("tr");
  
    // Criar as colunas da linha
    const mealCell = document.createElement("td");
    mealCell.textContent = meal;
  
    const caloriesCell = document.createElement("td");
    caloriesCell.textContent = calories;
  
    // Adicionar as colunas à linha
    newRow.appendChild(mealCell);
    newRow.appendChild(caloriesCell);
  
    // Adicionar a nova linha à tabela de últimas refeições
    lastMealsTable.appendChild(newRow);
  }
  
  // Exemplo de uso das funções para registrar macros diárias e adicionar uma última refeição
  registerDailyMacros(30, 50);
  addLastMeal("Chicken Salad", 350);
  