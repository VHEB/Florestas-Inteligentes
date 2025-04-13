// Função para exibir a solução da Amazônia e esconder a da Mata Atlântica
document.getElementById('btnAmazonia').addEventListener('click', function() {
    document.getElementById('solutionAmazonia').style.display = 'block';
    document.getElementById('solutionMataAtlantica').style.display = 'none';
  });
  
  // Função para exibir a solução da Mata Atlântica e esconder a da Amazônia
  document.getElementById('btnMataAtlantica').addEventListener('click', function() {
    document.getElementById('solutionAmazonia').style.display = 'none';
    document.getElementById('solutionMataAtlantica').style.display = 'block';
  });
  