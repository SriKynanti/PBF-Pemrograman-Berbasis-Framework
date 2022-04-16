import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMhsBlog = () => GetAPI('mahasiswa?_sort=id&_order=asc');
const postMhsBlog = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim);
const deleteMhsBlog = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getMhsBlog,
    postMhsBlog,
    deleteMhsBlog
}

export default API;