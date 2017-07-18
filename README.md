# An Fullstack React App
##
### power by create-react-app; Ant Design
### reference: Fullstack React Book

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
