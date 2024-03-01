import React from 'react'
import { Menu, Button, Badge } from 'antd';
import { 
	InboxOutlined, 
	FileTextOutlined, 
	MailOutlined, 
	StarOutlined, 
	DeleteOutlined, 
	EditOutlined 
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const MenuItem = ({prefix, path, label, url}) => {

	return (
		<>
			{prefix}
			<span>{label}</span>
			<Link to={`${url}${path}`} />
		</>
	)
}

export const MailMenu = (props) => {

	const { url } = props

	const location = useLocation()

	const locationPath = location.pathname.split('/')

	const currentpath = locationPath[locationPath.length - 1]

	return (
		<div className="w-100">
			<div className="p-3">
				<Link to={`${url}compose`}>
					<Button type="primary" block>
						<EditOutlined />
						<span>Compose</span>
					</Button>
				</Link>
			</div>
			<Menu
				mode="inline"
				selectedKeys={[currentpath]}
				style={{ borderInlineEnd: 0 }}
				items={[
					{
						key: 'inbox',
						label: <MenuItem label="Inbox" prefix={<InboxOutlined />} path="inbox" url={url} />
					},
					{
						key: 'sent',
						label: <MenuItem label="Sent" prefix={<MailOutlined />} path="sent" url={url} />
					},
					{
						key: 'draft',
						label: <MenuItem label="Draft" prefix={<FileTextOutlined />} path="draft" url={url} />
					},
					{
						key: 'starred',
						label: <MenuItem label="Starred" prefix={<StarOutlined />} path="starred" url={url} />
					},
					{
						key: 'deleted',
						label: <MenuItem label="Deleted" prefix={<DeleteOutlined />} path="deleted" url={url} />
					},
					{
						key: 'Labels',
						label: 'Labels',
						type: 'group',
						children: [
							{
								key: 'works',
								label: <MenuItem label="Works" prefix={<Badge className='mr-2' color="blue" />} path="works" url={url} />
							},
							{
								key: 'private',
								label: <MenuItem label="Private" prefix={<Badge className='mr-2' color="cyan" />} path="private" url={url} />
							},
							{
								key: 'important',
								label: <MenuItem label="Important" prefix={<Badge className='mr-2' color="red" />} path="important" url={url} />
							},
						]
					}
				]}
			/>
		</div>
	)
}

export default MailMenu
