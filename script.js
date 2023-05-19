const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["estudar para a prova", "dormir cedo"]

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(iterator)

    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}

