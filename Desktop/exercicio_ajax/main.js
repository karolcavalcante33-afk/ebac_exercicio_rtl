async function buscarPerfil() {
    try {
        const resposta = await fetch('https://api.github.com/users/karolcavalcante33-afk');

        console.log('Status:', resposta.status);

        if (!resposta.ok) {
            throw new Error('Erro HTTP: ' + resposta.status);
        }

        const dados = await resposta.json();
        console.log('Dados:', dados);

        document.querySelector('.profile-avatar').src = dados.avatar_url;
        document.querySelector('.profile-name').textContent = dados.name || dados.login;
        document.querySelector('.profile-username').textContent = `@${dados.login}`;

        document.getElementById('repos').textContent = dados.public_repos;
        document.getElementById('followers').textContent = dados.followers;
        document.getElementById('following').textContent = dados.following;

        document.querySelector('.profile-link').href = dados.html_url;

    } catch (erro) {
        alert('Erro: ' + erro.message);
        console.error(erro);
    }
}

buscarPerfil();
