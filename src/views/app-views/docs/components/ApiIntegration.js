import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Alert } from 'antd';

const apiServiceDemo1 = `import ApiService from "./ApiService"

export async function yourApi (data) {
    return ApiService.fetchData({
        url: '/your-api-url',
        method: 'post',
        data
    })
}
...`

const apiServiceDemo2 = `import { useEffect } from 'react'
import { yourApi } from './YourService.js'

const YourComponent = props => {

const fetchData = async () => {
    const reqeustParam = { key: 'value'}
    try {
        const resp = await yourApi(reqeustParam)
        if (resp.data) {
            ...do something
        }
    } catch (errors) {
        ...handle errors
    }
}

useEffect(() => {
    fetchData()
}, [])

return (
    ...
)`

const apiServiceDemo3 = `import { createSlice } from '@reduxjs/toolkit'
import { yourApi } from './YourService.js'

export const getApiData = createAsyncThunk('sliceName/getApiData',async (data) => {
    const response = await yourApi(data)
    return response.data
})

const yourSlice = createSlice({
	...
	extraReducers: (builder) => {
		builder
			.addCase(getApiData.fulfilled, (state, action) => {
				...
			})
	},
})

export const { someActionFromYourSlice } = yourSlice.actions

export default yourSlice.reducer`

const ApiIntergration = () => {
	return (
		<div>
			<h2>API Integration</h2>
            <div className="mt-4">
                <Alert 
                    type="info"
                    description={<span>Note: If you want to connect API with your dev server, please make sure you have remove the mock server injectionin <strong>App.js</strong></span>} 
                    showIcon 
                /> 
            </div>
			<div className="mt-4">
				<p>Follow the steps below to make backend api linkage working.</p>
                <ol>
                    <li>
                        <p>First, create a <code>xxxService.js</code> file(depends on your feature or module) under <code>services</code> directory</p>
                    </li>
                    <li>
                        <p>Declare an async function returning <code>ApiService.fetch</code> method and pass in your api configuration details as the code below:</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
                            {apiServiceDemo1}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <p>And now you can hook up this API in your component</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
                            {apiServiceDemo2}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <p>you can also use this service with <code>createAsyncThunk</code></p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
                            {apiServiceDemo3}
                        </SyntaxHighlighter>
                    </li>
                </ol>
			</div>
			<div className="mt-5">
				<h4>Proxying</h4>
				<p>Developer often consume API from different servers than the frontend application, there are complications that arise as a result of requests being sent across both servers, here is some way to setting up a proxy server.</p>
				<ul>
                    <li>
                        <strong>Add proxy package.json</strong>
                        <p>A simple & quick solution to proxying a server</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
                            {`"proxy": "http:yourDevDomain.com"`}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        <strong>Manually setup</strong>
                        <p class="mt-1">You can choose to setup with <code>http-proxy-middleware</code> for more flexible configuration.</p>
                        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
                            {`const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
	app.use('/api', createProxyMiddleware({
			target: 'http:yourDevDomain.com', // <--- config the url based on your backend server
			changeOrigin: true,
		})
	)
}`}
                        </SyntaxHighlighter>
                    </li>
                </ul>
			</div>
		</div>
	)
}

export default ApiIntergration
