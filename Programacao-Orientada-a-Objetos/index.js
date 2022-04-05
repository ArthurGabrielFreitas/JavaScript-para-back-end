import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUser = new User("Com", "com@com.com", "03/03/0303")
console.log(novoUser.exibirInfos())
// console.log(novoUser.nome)
// novoUser.nome = "Moc"
// console.log(novoUser.nome)

const novoAdmin = new Admin("Ror", "ror@ror.com", "30/30/3030")
console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.nome)
// novoAdmin.nome = "Oro"
// console.log(novoAdmin.nome)

const novoDocente = new Docente("tbj", "tbj@tbj.com", "33/00/3300")
console.log(novoDocente.exibirInfos())