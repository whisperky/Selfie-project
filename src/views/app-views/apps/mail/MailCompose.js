import React from 'react'
import { Form, Input, Button, message } from 'antd';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';

const MailCompose = () => {

	const navigate = useNavigate()

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline'],
			['image', 'code-block']
		],
	}

	const back = () => {
		navigate(-1);
	}

	const onFinish = () => {
		message.success('Email has been sent');
		navigate('/app/apps/mail/inbox');
	}

	return (
		<div className="mail-compose">
			<h4 className="mb-4">New Message</h4>
			<Form  name="nest-messages" onFinish={onFinish} >
				<Form.Item name={['mail', 'to']}>
					<Input placeholder="To:"/>
				</Form.Item>
				<Form.Item name={['mail', 'cc']} >
					<Input placeholder="Cc:"/>
				</Form.Item>
				<Form.Item name={['mail', 'subject']} >
					<Input placeholder="Subject:"/>
				</Form.Item>
				<Form.Item name={['mail', 'content']}>
					<ReactQuill theme="snow" modules={modules}/>
				</Form.Item>
				<Form.Item>
					<div className="mt-5 text-right">
						<Button type="link" className="mr-2">
							Save Darft
						</Button>
						<Button className="mr-2" onClick={back}>
							Discard
						</Button>
						<Button type="primary" htmlType="submit">
							Send
						</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}

export default MailCompose
