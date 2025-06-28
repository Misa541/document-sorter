
document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.capture = 'environment';

  const result = document.createElement('div');
  result.style.marginTop = '20px';
  result.style.fontSize = '20px';
  result.style.fontWeight = 'bold';

  input.onchange = () => {
    // Simulate OCR and classification
    const simulatedText = 'Factura Nr. 12345, Data scadenta: 01.07.2025';
    let category = 'Diverse';

    if (simulatedText.toLowerCase().includes('factura')) {
      category = 'Facturi și Chitanțe';
    } else if (simulatedText.toLowerCase().includes('contract')) {
      category = 'Contracte și Acorduri';
    } else if (simulatedText.toLowerCase().includes('asigurare')) {
      category = 'Asigurări';
    } else if (simulatedText.toLowerCase().includes('cont') || simulatedText.toLowerCase().includes('plata')) {
      category = 'Bănci și Finanțe';
    } else if (simulatedText.toLowerCase().includes('buletin') || simulatedText.toLowerCase().includes('pașaport')) {
      category = 'Documente Personale';
    } else if (simulatedText.toLowerCase().includes('talon') || simulatedText.toLowerCase().includes('auto')) {
      category = 'Documente Auto';
    } else if (simulatedText.toLowerCase().includes('medic')) {
      category = 'Documente Medicale';
    } else if (simulatedText.toLowerCase().includes('anaf') || simulatedText.toLowerCase().includes('taxa')) {
      category = 'Fiscale și Administrație';
    } else if (simulatedText.toLowerCase().includes('diploma') || simulatedText.toLowerCase().includes('curs')) {
      category = 'Documente Profesionale';
    } else if (simulatedText.toLowerCase().includes('crețu innenausbau')) {
      category = 'Crețu Innenausbau';
    }

    result.textContent = 'Categorie: ' + category;
  };

  root.appendChild(input);
  root.appendChild(result);
});
