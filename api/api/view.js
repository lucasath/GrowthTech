const { getPosts, getUsers, getGroup, getUsuarioid, getPostid } = require("./controller");

const group = async res => {
  let request = await getGroup();
  res.status(200).send(request);
};

const users = async res =>{
  let request = await getUsers();
  res.status(200).send(request);
}

const posts = async res => {
  let request = await getPosts();
  res.status(200).send(request);
}

const usuarioid = async (req,res) =>{
  let request = await getUsuarioid(req.params.id)
  res.status(200).send(request);
}

const postid = async (req,res)=>{
  let request = await getPostid(req.params.id)
  res.status(200).send(request);
}


exports.posts = posts;
exports.postid = postid;
exports.users = users;
exports.group = group;
exports.usuarioid = usuarioid;
