# Veams Blueprint - React Container (`@veams/bp-react-container`)

With this blueprint you can scaffold a react container component with multiple options:

1. Which methods should be added? (`componentWillMount()`, `componentDidMount()`, `componentWillReceiveProps()`)
1. Do you want to check your prop types?
1. Do you want to add a static loadData() function? (SSR)


## Setup

1. First of all be sure you have installed `veams-cli`.
1. After that be sure your project contains a [`veams-cli.json`](https://github.com/Sebastian-Fitzner/generator-veams/blob/dev/generators/app/templates/veams-cli.json).
1. Make sure you have updated `veams-cli.json` to fit the needs of your project.
1. Install the package with `npm i @veams/bp-react-container --save-dev`.
1. Reference the package in `veams-cli.json` by adding `container` to the `blueprint` object like so:

``` json
{
    "blueprints": {
        "container": {
            "skipImports": true,
            "path": "node_modules/@veams/bp-react-container"
        }
    }
}
```

## Usage

Now you can use this blueprint with `veams` by executing:

``` bash
veams add container modules/articles/containers/article
```

 The output in your file system will be:

``` bash
└── articles
    └── containers
        └── article
            └── article.js
```

The blueprint content looks like that (depends on your answers):

``` js
// Generic libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';

// Containers, Components, Store & More
import * as fromData from '../../store/article.actions';

/**
 * Get slice out of current state by using selector functions.
 *
 * @param {object} state - Current state of the whole store.
 */
function mapStateToProps(state) {
	return {
		// isInitialized: getUiInitializedState(state)
	}
}

/**
 * @class
 * @classdesc Container component to render a view and
 * decorate that with the selected store slice.
 */
@connect(mapStateToProps)
class Article extends Component {
	/**
	 * Internal state of component.
	 */
	state = {
		// isInitialized: this.props.isInitialized
	};

	/**
	 * Static property check.
	 */
	static propTypes = {
		// isInitialized: boolean.isRequired
	};

	/**
	 * Load the data by using a separate function.
	 * This method can later be used on server side to get an initial state as well.
	 *
	 * @param {Object} store - store singleton.
	 */
	static loadData(store) {
		return store.dispatch(fromData.fetchArticle());
	}

	/**
	 * Lifecycle hook before component is mounted.
	 */
	componentWillMount() {}

	/**
	 * Lifecycle hook after component is mounted.
	 */
	componentDidMount() {}

	/**
	 * Get new props and set a new state
	 * if necessary.
	 *
	 * @param {Object} nextProps - updated property objects.
	 */
	componentWillReceiveProps(nextProps) {}

	/**
	 * Render component
	 */
	render() {
		return (
			<div>
				<p>Article is working!</p>
			</div>
		);
	}
}

export default Article;
```

Have fun!