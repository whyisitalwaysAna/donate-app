import { Component } from '../core/Component'

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donates-container'

    this.$title = document.createElement('h2')
    this.$title.className = 'donates-container__title'
    this.$title.textContent = props.heading

    this.$donatesContainer = document.createElement('div')
    this.$donatesContainer.className = 'donates-container__donates'

    this.$donatesEmpty = document.createElement('div')
    this.$donatesEmpty.classList.add('donates-container__empty')
    this.$donatesEmpty.textContent = 'Здесь пока пусто...'

    this.$rootElement.appendChild(this.$title)
    this.$rootElement.appendChild(this.$donatesContainer)
    this.$donatesContainer.appendChild(this.$donatesEmpty)
  }

  addItem(item) {
    this.$donatesContainer.appendChild(item.$rootElement)
    this.$donatesEmpty.remove()
  }
}
