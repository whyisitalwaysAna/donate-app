import { Component } from '../core/Component'
import { ListItem } from './ListItem'

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'

    const $label = document.createElement('label')
    $label.className = 'donate-form__input-label'
    $label.textContent = props.heading

    this.$donateInput = document.createElement('input')
    this.$donateInput.className = 'donate-form__donate-input'
    this.$donateInput.name = 'amount'
    this.$donateInput.type = 'number'
    this.$donateInput.max = '100'
    this.$donateInput.min = '1'
    this.$donateInput.required = true
    this.$donateInput.addEventListener('input', this.handleInput.bind(this))

    this.$button = document.createElement('button')
    this.$button.className = 'donate-form__submit-button'
    this.$button.disabled = true
    this.$button.type = 'submit'
    this.$button.textContent = props.submit
    this.$button.addEventListener('click', this.handleSubmit.bind(this))

    this.$rootElement.appendChild($label)
    $label.appendChild(this.$donateInput)
    $label.appendChild(this.$button)
  }

  get isValid() {
    return Number(this.state.amount) <= 100 && Number(this.state.amount) > 0 ? true : false
  }

  handleInput(event) {
    this.state.amount = event.target.value
    this.isValid === false ? (this.$button.disabled = true) : (this.$button.disabled = false)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid === true) {
      this.props.onSubmit(Number(this.state.amount))
      this.state.amount = ''
      this.$donateInput.value = ''
    }
  }
}
