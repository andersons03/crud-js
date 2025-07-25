const api = {
  async buscarPensamentos() {
    try{
      const posts = await fetch('http://localhost:3000/pensamentos')
      const postsJson = posts.json();
      return postsJson;
    }catch(e){
      console.error("Erro: ", e)
    }

  }
}

export default api;