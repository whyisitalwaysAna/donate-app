import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    const formatter = new Intl.DateTimeFormat('ru', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'
    this.$rootElement.id = this.state.id

    this.$nbsp = document.createTextNode('\uFEFF')

    this.$rootElement.textContent = `${formatter.format(this.state.date)} - `

    this.$rootElement.appendChild(this.$nbsp)
    this.$boldElement = document.createElement('b')
    this.$boldElement.textContent = `${this.state.amount}$`
    this.$rootElement.appendChild(this.$boldElement)

    this.$deleteButton = document.createElement('div')
    this.$deleteButton.className = 'delete-button'
    this.$deleteButton.textContent = 'Удалить'
    this.$rootElement.appendChild(this.$deleteButton)

    this.$deleteButton.addEventListener('click', this.itemRemove.bind(this))
  }

  itemRemove(event) {
    const removeItem = event.target.closest('.donate-item')
    this.props.remove(Number(removeItem.id))
    removeItem.remove()
  }
}
