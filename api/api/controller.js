const { getData } = require("./cache");

const getGroup = async () => {
  let group = await agrupaUsuarios();
  let result = await buscaPostUsuarioGrupo(group);
  return result;
};

const getUsuarioid = async id =>{
  let usuarios = await getUsers();
  let usuario = usuarios.filter(element =>element.id == id)
  return usuario;
}

const getPostid = async id=>{
  let posts = await getPosts();
  let post = posts.filter(element=>element.id == id)
  return post;
}

const agrupaUsuarios = async () => {
  let usuarios = await getUsers();
  let agrupado = await filtraGrupo(usuarios);
  return agrupado;
};

const buscaPostUsuarioGrupo = async usuarios => {
  let result = [];
  let posts = await getPosts();
  let promises = usuarios.map(async element => {
    result.push(await buscaPostUsuarioId(element.id,posts));
  });
  await Promise.all(promises);
  return result;
};

const buscaPostUsuarioId = async (id,posts) => {
  let result = posts.filter(obj => obj.userId === id);
  return result;
};

const getUsers = async () => {
  return await getData(process.env.USERS);
};

const getPosts = async () => {
  return await getData(process.env.POSTS);
};

const filtraGrupo = async json => {
  const re = /\bGroup/;
  let result = json.filter(obj => obj.company.name.match(re));
  return result;
};

exports.getGroup = getGroup;
exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.getUsuarioid = getUsuarioid;
exports.getPostid = getPostid;