const api = {
  async buscarPensamentos() {
    try{
      const posts = await axios.get('http://localhost:3000/pensamentos')
      // const postsJson = posts.json();
      return await posts.data;
    }catch(e){
      console.error("Erro: ", e)
    }
  }, 
  async buscarPensamentoPorId(pensamentoId) {
    try{
      const response = await axios.get(`http://localhost:3000/pensamentos/${pensamentoId}`);
      return await response.data;
    }catch(e){
      console.error("Erro: ", e)
    }
  }, 
  async salvarPensamento(pensamento){
    try{
      const response = await axios.post('http://localhost:3000/pensamentos', pensamento)

      return await response.data
    }catch(e){
      console.error("Erro:", e);
      throw new Error(e);      
    }
  },
  async editarPensamento(pensamento){
    try{
      const response = await axios.put(`http://localhost:3000/pensamentos/${pensamento.id}`, pensamento)
      return await response.data
    }catch(e){
      console.error("Erro:", e);
      throw new Error(e);      
    }
  },
  async excluirPensamento(pensamentoId){
    try{
      const response = await axios.delete(`http://localhost:3000/pensamentos/${pensamentoId}`);
    }catch(e){
      console.error("Erro ao excluir:", e);
      throw new Error(e);      
    }
  }
}


export default api;