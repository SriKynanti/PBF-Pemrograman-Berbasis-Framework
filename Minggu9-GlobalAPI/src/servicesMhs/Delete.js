import { domainPath } from "./Config";

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, rejected) => {
        fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE'})
            .then((result) => {
                resolve(result);
            }, (err) => {
                rejected(err);
            })
    })
    return promise;
}

export default DeleteAPI;