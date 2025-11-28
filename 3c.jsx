function MenuRestaurante() {
  const pratos = [
    {
      nome: "Feijoada Completa",
      preco: 45.90,
      descricao: "A tradicional feijoada, servida com arroz, couve, farofa e laranja."
    },
    {
      nome: "Moqueca de Peixe",
      preco: 55.00,
      descricao: "Deliciosa moqueca com azeite de dendê, leite de coco e pimentões."
    },
    {
      nome: "Picanha na Chapa",
      preco: 62.50,
      descricao: "Fatias de picanha grelhadas, acompanhadas de vinagrete e batata frita."
    },
  ];

  return (
    <div>
      <h2>Cardápio do Sabor Brasileiro</h2>
      <div className="menu-grid">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p className="preco">R$ {prato.preco.toFixed(2)}</p>
            <p className="descricao">{prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRestaurante;