function combineNames(...names) {
    if(names.length === 1) return names[0]
    let lastName = names[names.length - 1]
     names.splice(names.length - 1, 1)
     return `${names.join(" ")} ${lastName.toUpperCase()}`;
}

console.log(combineNames("John", "Aldo", "Aline"))