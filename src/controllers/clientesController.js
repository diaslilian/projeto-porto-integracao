const clientes = require("../models/clientes");

const getAll = (req, res) => {
  clientes.find((err, clientes) => {
    if (err) res.status(500).send(err);

    res.status(200).send(clientes);
  });
};

const getCompradores = (req, res) => {
  clientes.find(
    { comprou: true },
    { nome: 1, email: 1, _id: 0 },
    (err, clientes) => {
      if (err) res.status(500).send(err);

      res.status(200).send(clientes);
    }
  );
};

const getByCpf = (req, res) => {
  const cpf = req.params.cpf;

  clientes.find({ cpf }, (err, clientes) => {
    if (err) res.status(500).send(err);

    res.status(200).send(clientes);
  });
};

const postCliente = (req, res) => {
  console.log(req.body);
  const cliente = new clientes(req.body);

  cliente.save((err) => {
    if (err) res.status(500).send(err);

    res.status(201).send({
      status: true,
      mensagem: "Cliente incluido com sucesso",
    });
  });
};

module.exports = {
  getAll,
  getCompradores,
  getByCpf,
  postCliente,
};
