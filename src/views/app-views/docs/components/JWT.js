import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const setupService = `import fetch from 'auth/FetchInterceptor'

const AuthService = {}

AuthService.login = function (params) {
  return fetch({
    url: '/auth/login',
    method: 'post',
    params
  })
}

export default AuthService`

const jwt = () => {
	return (
		<div>
			<h2>JWT</h2>
			<p>Emilus provide a set of code to let you work with JWT authentication & API with the server application, integration process is described below.</p>
			<p>We are using <code>localStorage</code> &amp; Redux to store tokens info and authenticate the user.</p>
			<div className="mt-4">
				<h4>Interceptor</h4>
				<p>We provided a request & response interceptor built by 
					<a href="https://github.com/axios/axios"> axios</a>, 
					which able to found in <code>src/auth/FetchInterceptor.js</code>.
					With this interceptor, every API call from client side will contain access token inside requeest header. You can customize your request config or error handling in this file. 
				</p>
			</div>
			<div className="mt-4">
				<h4>Services</h4>
				<p>In order to facilitate manage and maintain, we placed all API 
				integrations related files in <code>src/services/</code> folder. Linked up with interceptor above, you can found a preset <code>AuthService.js</code> under the directory, code as below:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{setupService}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4>Usage</h4>
				<p>You can call the service in authSlice.js:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`import AuthService from 'services/AuthService';

export const signIn = createAsyncThunk('auth/signIn',async (data, { rejectWithValue }) => {
	const { email, password } = data
	const response = await AuthService.login({email, password})
	if (response.data) {
		const token = response.data.token;
		localStorage.setItem(AUTH_TOKEN, response.data.token);
		return token;
	} else {
		return rejectWithValue(response.message);
	}
})


export const authSlice = createSlice({
	name: 'auth',
	...
})
`}
				</SyntaxHighlighter>
				<p>And handle the dispatch it in your component:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{`import { signIn } from 'store/slices/authSlice';
import { useDispatch } from 'react-redux';
					
export const LoginForm = props => {

	const dispatch = useDispatch();

	const handleLogin = ({email, password}) => {
		dispatch(signIn({email, password}))
	}

	return (
		...
	)
}`}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default jwt
