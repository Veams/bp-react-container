module.exports = function (context) {
	return [
		{
			type: 'checkbox',
			name: 'containerMethods',
			message: 'Which methods should be added?',
			choices: [
				{
					name: 'componentWillMount()',
					value: 'componentWillMount'
				},
				{
					name: 'componentDidMount()',
					value: 'componentDidMount'
				},
				{
					name: 'componentWillReceiveProps()',
					value: 'componentWillReceiveProps'
				}
			],
			default: ['componentDidMount']
		},
		{
			type: 'confirm',
			name: 'containerCheckProps',
			message: 'Do you want to check your prop types?',
			default: true
		},
		{
			type: 'confirm',
			name: 'containerStaticLoadData',
			message: 'Do you want to add a static loadData() function? (SSR)',
			default: true
		},
		{
			when: answers => answers.containerStaticLoadData,
			type: 'input',
			name: 'containerLoadDataAction',
			message: 'You can add a custom action name which is triggered in loadData() ...'
		}
	]
};