CREATE TABLE cadastro (
  primeironome text,
  sobrenome text,
  email text,
  celular bigint,
  senha int
);
INSERT INTO cadastro (primeironome, sobrenome, email, celular, senha) VALUES
('João', 'Silva', 'joao.silva@example.com', 21987654321, 123456),
('Maria', 'Santos', 'maria.santos@example.com', 21976543210, 654321),
('Pedro', 'Oliveira', 'pedro.oliveira@example.com', 21965432109, 789012);