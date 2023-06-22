  // Função de tratamento de envio do formulário
  function enviarEmail() {
    // Coletar os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Configurar os parâmetros do e-mail
    const serviceID = 'service_43pl97j'; // Substitua pelo seu Service ID do EmailJS
    const templateID = 'joaosocial1704@gmail.com'; // Substitua pelo seu Template ID do EmailJS
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem
    };

    // Enviar o e-mail via EmailJS
    emailjs.send(serviceID, templateID, templateParams)
      .then(function (response) {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        // Aqui você pode adicionar algum código para atualizar a interface ou mostrar uma mensagem de sucesso
      }, function (error) {
        console.error('Erro ao enviar o e-mail:', error);
        // Aqui você pode adicionar algum código para lidar com o erro ou mostrar uma mensagem de falha
      });
  }