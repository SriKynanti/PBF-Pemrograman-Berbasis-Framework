import { domainPath } from "./Config";

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, rejected) => {
        fetch(`${domainPath}/${path}`,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                rejected(err);
            })
    })
    return promise;
}

export default PostAPI;