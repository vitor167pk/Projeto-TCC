function saveSettings() {
    // Obtêm os valores selecionados pelo usuário
    const emailNotifications = document.getElementById("notification1").checked;
    const pushNotifications = document.getElementById("notification2").checked;
    const displayMode = document.querySelector('input[name="displayMode"]:checked').value;
    const language = document.getElementById("languageSelect").value;
  
    // Simula o salvamento das configurações (exibindo um alerta com as configurações selecionadas)
    alert(`Settings saved:\nEmail Notifications: ${emailNotifications}\nPush Notifications: ${pushNotifications}\nDisplay Mode: ${displayMode}\nLanguage: ${language}`);
  }
  
