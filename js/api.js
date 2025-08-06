const api = {
  async buscarPensamentos() {
    try{
      const posts = await fetch('http://localhost:3000/pensamentos')
      const postsJson = posts.json();
      return postsJson;
    }catch(e){
      console.error("Erro: ", e)
    }
  }, 
  async buscarPensamentoPorId(pensamento) {
    try{
      const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`);
      const postJson = response.json();
      return postJson;
    }catch(e){
      console.error("Erro: ", e)
    }
  }, 
  async salvarPensamento(pensamento){
    try{
      const response = await fetch('http://localhost:3000/pensamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pensamento)
      })

      return response.json()
    }catch(e){
      console.error("Erro:", e);
      throw new Error(e);      
    }
  },
  async editarPensamento(pensamento){
    try{
      const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pensamento)
      })

      return response.json()
    }catch(e){
      console.error("Erro:", e);
      throw new Error(e);      
    }
  }
}

export default api;