import http from 'node:http';

// metodos HTTP: GET, POST, PUT, PATCH, DELETE

// GET => Buscar uma recurso do backend
// POST => Criar uma recurso ou recurso no backend
// PUT => Atualizar um recurso no backend
// PATCH => Atualizar uma informação única ou especifica de um recurso no backend
// DELETE => Deletar um recurso do backend

// Stateful => sempre tem informação sendo guardada em memória
// Stateless => salva os recursos em outros dispositivos

// JSON => Javascript Object Notation

// CABEÇALHOS => Metadados, ou seja, informações adicionais sobre como o dado pode ser interpretado pelo frontend

// HTTP STATUS CODE

const users = [];

const server = http.createServer((request, response) => {

  const { method, url } = request;
  
  if(method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Luiz Carlos',
      email: 'luiz@example.com'
    })
    return response.writeHead(201).end()
  }
  
  
  return response.writeHead(404).end()
})

server.listen(3333)