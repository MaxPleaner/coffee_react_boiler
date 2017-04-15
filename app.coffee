Object.assign window,
  React: require 'react'
  ReactDOM: require 'react-dom'

Components = require './components.coffee'

App = 
	render: (component, element) ->
		ReactDOM.render React.createElement(component), element

App.render Components.Root, document.body