import React, { Component } from 'react'
import Snake from './components/Snake'
import Food from './components/Food'
import Container from './components/Container'

const getRandomCoordinates = () => {
  let min = 1
  let max = 98
  //let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  //let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  let x = 10
  let y = 16
  return [x, y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 60,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
  ]
}

class App extends Component {
  state = initialState
  componentDidMount() {
    console.log(this.props)
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown
  }

  componentDidUpdate() {
    console.log(this.state.snakeDots)
    this.checkIfOutOfBorders()
    this.checkIfCollapsed()
    this.checkIfEat()
  }

  onKeyDown = (e) => {
    e = e || window.event
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: 'UP' })
        break
      case 40:
        this.setState({ direction: 'DOWN' })
        break
      case 37:
        this.setState({ direction: 'LEFT' })
        break
      case 39:
        this.setState({ direction: 'RIGHT' })
        break
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots]
    let head = dots[dots.length - 1]

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 4, head[1]]
        break
      case 'LEFT':
        head = [head[0] - 4, head[1]]
        break
      case 'DOWN':
        head = [head[0], head[1] + 4]
        break
      case 'UP':
        head = [head[0], head[1] - 4]
        break
    }
    dots.push(head)
    dots.shift()
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver()
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver()
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]
    let food = this.state.food

    if (head[0] === food[0] && head[1] === food[1]) {
      alert("eaten")
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake()
      this.increaseSpeed()
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots]
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    // pass game over function (todo 1)
    this.setState(initialState)
  }

  render() {
    return (
      <div
        style={{
          margin: '10px auto',
          position: 'relative',
          width: this.props.size,
          height: this.props.size,
          backgroundColor: this.props.bgColor,
          borderRadius: this.props.borderRadius
        }}
      >
        <Snake color={this.props.color} snakeDots={this.state.snakeDots} />
        <Food color={this.props.color} color={this.props.color} dot={this.state.food} />
      </div>
    )
  }
}

export default App
