let managerHtml = (manager) => {
    return `
    <p>${manager.name}</p>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.office_number}</p>
    `
}
module.exports = managerHtml