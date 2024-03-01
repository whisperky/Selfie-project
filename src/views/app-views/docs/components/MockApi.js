import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MockApi = () => {
	return (
		<div>
			<h2>Mock Api</h2>
			<p>Emilus uses <a href="https://miragejs.com/" target="_blank" rel="noreferrer">miragejs</a> for mocking API calls, all the api interaction in our demo are work under miragejs.</p>
			<div className="mt-4">
                <h4>Using mock api</h4>
                <p class="mt-1">If you have wish to use mock api, you can follow the steps below to create a fake db data &amp; api</p>
                <ol>
                    <li>
                        <strong>Setup</strong>
                        <p class="mt-1">Visit <code>src/mock/index.js</code>, and here is the overall configuration of mirage</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`export default function mockServer({ environment = 'test' }) {
	return createServer({
		environment,
		seeds(server) {
			server.db.loadData({
				...
			})
		},
		routes() {
			...
		},
	})
}`}
				        </SyntaxHighlighter>
                    </li>
                    <li className="mt-3">
                        <strong>Add static data</strong>
                        <p>Now we can add some data to the fake db</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`return createServer({
		environment,
		seeds(server) {
			server.db.loadData({
				usersData: [
					{
						id: '1',
						name: 'Carolyn Perkins',
					},
					{
						id: '2',
						name: 'Terrance Moreno',
					},
					{
						id: '3',
						name: 'Ron Vargas',
					},
				]
			})
		},
		...
	})
}`}
				        </SyntaxHighlighter>
                    </li>
                    <li className="mt-3">
                        <strong>Create mock api </strong>
                        <p>Create a mock api under route</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`return createServer({
		...
		routes() {
			this.get('api/getUsers', schema => schema.db.usersData)
		},
})`}
				        </SyntaxHighlighter>
                    </li>
                </ol>
                <p>And now you will get the mock data as response when you make request to <code>api/getUsers</code></p>
            </div>
            <div className="mt-4">
                <h4>Disable mock api</h4>
                <p>Mock api was enable by default in our starter-kit, you can turn it off by remove code below in <code>App.js</code></p>
                <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`// Remove this block
if (environment !== 'production') {
	mockServer({ environment }) 
}`}
				</SyntaxHighlighter>
            </div>
            
          
		</div>
	)
}

export default MockApi
