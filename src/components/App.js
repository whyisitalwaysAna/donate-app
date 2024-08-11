import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'app'

    this.$totalAmount = document.createElement('h1')
    this.$span = document.createElement('span')
    this.$totalAmount.className = 'total-amount'

    this.$rootElement.appendChild(this.$totalAmount)
    this.$totalAmount.appendChild(this.$span)

    this.$totalAmount.textContent = `Итого: $${this.state.total}`

    this.donateForm = new Form({
      heading: 'Введите сумму от 1$ до 100$',
      submit: 'Задонатить',
      onSubmit: this.onItemCreate.bind(this),
    })

    this.$rootElement.appendChild(this.donateForm.$rootElement)
    this.donateList = new List({ heading: 'Список донатов' })
    this.$rootElement.appendChild(this.donateList.$rootElement)
  }

  onItemCreate(amount) {
    this.state.total += amount
    let item = new ListItem({ amount: amount, remove: this.onItemRemove.bind(this) })
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.$totalAmount.textContent = `Итого: $${this.state.total}`
  }

  onItemRemove(id) {
    this.state.donates.forEach((item, index) => {
      if (item.state.id === id) {
        this.state.donates.splice(index, 1)
        this.$totalAmount.textContent = `Итого: $${(this.state.total -= item.state.amount)}`
      }
    })
  }
}
