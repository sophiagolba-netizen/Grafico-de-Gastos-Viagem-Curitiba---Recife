document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('meuGraficoPizza').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Passagem de avião',
        'Hospedagem',
        'Alimentação',
        'Transporte'
      ],
      datasets: [{
        label: 'Valor Final (R$)',
        data: [1300, 1000, 500, 150], // Valores extraídos da planilha
        backgroundColor: [
          '#3498db', // Azul - Passagem
          '#9b59b6', // Roxo - Hospedagem
          '#e67e22', // Laranja - Alimentação
          '#2ecc71'  // Verde - Transporte
        ],
        hoverOffset: 10,
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 14
            },
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed);
              }
              return label;
            }
          }
        }
      }
    }
  });
});
