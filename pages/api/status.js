function status(request, response) {
    response.status(200).json( { chave : "Página de status do victor" });
}

export default status;