
export function getNonSubsProducts() {
    let url = 'https://performancetestdmb.azurewebsites.net/api/products/123456/Category2';
    return fetch(url).then((r) => r.json());
}