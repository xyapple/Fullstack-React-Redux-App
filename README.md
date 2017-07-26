# An Fullstack React App
##
### power by create-react-app; Ant Design
### reference: Fullstack React Book

#### Voting App
a). follow instruction to run the ant design and create-react-app
```
//step one
npm install -g yarn
//step two
yarn add antd
//to remove: yarn remove antd
```
b). create-react-app cannot load image through src! need to do require

c). add semantic-ui-react
https://react.semantic-ui.com/usage
```
npm install semantic-ui-react --save

npm install semantic-ui-css --save

npm install semantic-ui --save-dev
```
Whereas props are immutable and owned by a component’s parent, state is owned by the component.
Never modify state outside of this.setState().
#### TimerTracker App
a). uuid.js is not working right with create-react-app
run following instead
```
npm install uuid
```
in the TimersDashboard load this
```
const uuidv4 = require('uuid/v4');
```

#### Form validation
import validator
https://www.npmjs.com/package/validator
```
npm install validator
```
