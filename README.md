# @sequenia/describing-model

> Simple way for define you data class and describe that fields, display name, way for render html-forms and tables

[![NPM](https://img.shields.io/npm/v/@sequenia/describing-model.svg)](https://www.npmjs.com/package/@sequenia/describing-model) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sequenia/describing-model
```

## Usage

```jsx
// some_model.js
import { DescribingModel } from '@sequenia/describing-model'

class SomeModel extends DescribingModel {

  displayName(item) {
    return `${item.type} - ${item.name}`;
  }

  listCells(items = undefined, {} = {}) {
    return [
      {
        name: "type",
        displayName: "Model's type",
        type: "enum",
        data: [
          {
            key: "simple",
            value: "Simple"
          },
          {
            key: "extended",
            value: "Extended"
          },
          {
            key: "user_defined",
            value: "User defined"
          }
        ]
      },
      {
        name: "name",
        displayName: "Name",
        type: "text",
        sortKey: "name"
      }
    ]
  }

  formFields(item = undefined, {} = {}) {
    return [
      {
        name: "type",
        displayName: "Model's type",
        type: "enum",
        data: [
          {
            key: "simple",
            value: "Simple"
          },
          {
            key: "extended",
            value: "Extended"
          },
          {
            key: "user_defined",
            value: "User defined"
          }
        ],
        required: true
      },
      {
        name: "name",
        displayName: "Name",
        type: "text"
      }
    ]
  }
}

const instance = new SomeModel();
export { instance as SomeModel };

// some_other_file.js

import { SomeModel } from "path/to/some_model.js"

console.log(SomeModel.displayName(someItem));
console.log(SomeModel.listCells(displayItems));
```

## License

MIT © [sequenia](https://github.com/sequenia)
