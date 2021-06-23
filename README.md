# snake-spinner

> React Library for having a snake game as Loading Bar in your application

[![NPM](https://img.shields.io/npm/v/snake-spinner.svg)](https://www.npmjs.com/package/snake-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save snake-spinner
```

## Usage

```jsx
import React, { Component } from 'react'

import Loader from 'snake-spinner'
import 'snake-spinner/dist/index.css'

class Example extends Component {
  render() {
    return <Loader />
  }
}
```

## To Complete Things
- [x] Create game as component
- [ ] Allows Props to set the loder style
- [ ] On Game Complete check if loading is finished, if so load content otherwise continue game. 

## License

MIT © [vaibhavgeek](https://github.com/vaibhavgeek)
