$(document).ready(function() {
    
    // Evento de submeter o formulário
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        
        // Cria o novo elemento <li>
        const novoItem = $('<li></li>').text(nomeTarefa);

        // Adiciona na lista
        $('#lista-tarefas').append(novoItem);

        // Limpa o input e volta o foco para ele
        $('#nome-tarefa').val('').focus();
    });

    // Evento de clique nos itens da lista (Efeito de riscar)
    // Usamos a delegação de eventos para funcionar em itens novos
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});