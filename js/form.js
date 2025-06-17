        // Máscara para CPF
        const cpfInput = document.getElementById('cpf');
        cpfInput.addEventListener('input', () => {
                let v = cpfInput.value.replace(/\D/g, '');
                if (v.length > 3) v = v.replace(/(\d{3})(\d)/, '$1.$2');
                if (v.length > 6) v = v.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
                if (v.length > 9) v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
                cpfInput.value = v;
        });

    // Máscara telefone
    const telInput = document.getElementById('telefone');
    telInput.addEventListener('input', () => {
      let v = telInput.value.replace(/\D/g, '');
      v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
      v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
      telInput.value = v;
    });

    // Validação de senha
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', (e) => {
      const senha = document.getElementById('senha').value;
      const confirmar = document.getElementById('confirmarSenha').value;
      const erro = document.getElementById('erro');

      if (senha !== confirmar) {
        e.preventDefault();
        erro.textContent = 'As senhas não coincidem.';
      } else {
        erro.textContent = '';
        alert('Cadastro realizado com sucesso!');
      }
    });