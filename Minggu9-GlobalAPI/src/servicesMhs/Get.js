import { domainPath } from "./Config";

const GetAPI = (path) => {
    const promise = new Promise((resolve, rejected) => {
        fetch(`${domainPath}/${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                rejected(err);
            })
    })
    return promise;
}

export default GetAPI;