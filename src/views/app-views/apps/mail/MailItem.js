import React, { useState, useEffect } from 'react'
import { Table, Avatar, Badge, Tooltip, Dropdown, Menu, Input } from 'antd';
import { StarOutlined, StarFilled, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import MailData from 'assets/data/mail.data.json';
import { labels, getLabelColor } from './MailLabels';
import { useParams, useNavigate } from 'react-router-dom';

const MailItem = () => {

	const params = useParams();
	const navigate = useNavigate();

	const [mails, setMails] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const onSelectChange = keys => {
		setSelectedRowKeys(keys)
	};

	const onStarTicked = elm => {
		const { id, starred } = elm;
		setMails(prevMails => prevMails.map( item => {
			if(item.id === id) {
				item.starred = !starred
				return item
			}
			return item
		}))
	}

	const formatBody = body => {
		return body.replace(/<(?:.|\n)*?>/gm, ' ');
	}

	const loadMail = () => {
		const data = getCurrentCategory();

		setMails(data);
		setSelectedRowKeys([]);
	}

	useEffect(() => {
		loadMail();
	}, [params])

	const massDeleted = selectedKey => {
		let data = mails
		selectedKey.forEach(num => {
			data = data.filter(elm => elm.id !== num)
		});
		setMails(data);
		setSelectedRowKeys([]);
	}

	const massStar = selectedKey => {
		let data = mails
		selectedKey.forEach(num => {
			data = data.map(elm => {
				if(elm.id === num) {
					elm.starred = true
					return elm
				} else return elm
			})
		});
		setMails(data);
		setSelectedRowKeys([]);
	}

	const massCategorize = (label, selectedKey) => {
		let data = mails
		selectedKey.forEach(num => {
			data = data.map(elm => {
				if(elm.id === num) {
					elm.label = label
					return elm
				} else return elm
			})
		});
		setMails(data);
		setSelectedRowKeys([]);
	}

	const onSelectEmail = elm => {
		return {
			onClick: e => {
				e.preventDefault()
				navigate(`/app/apps/mail/${elm.id}`)
			}
		};
	}

	const search = e => {
		let query = e.target.value;
		let data = []
		data = getCurrentCategory().filter(item => {
			return query === ''? item : item.name.toLowerCase().includes(query)
		});
		setMails(data);
	}


	const getCurrentCategory = () => {
		const { category } = params;
		if (labels.includes(category)) {
			return MailData.inbox.filter(elm => elm.label === category);
		}
		switch (category) {
			case 'inbox':
				return MailData.inbox
			case 'sent':
				return MailData.sent
			case 'draft':
				return MailData.draft
			case 'starred':
				return  MailData.inbox.filter( elm => elm.starred )
			case 'deleted':
				return  MailData.deleted
			default:
				break;
		}
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const locale = {
		emptyText: (
			<div className="text-center my-5">
				<img src="/img/others/img-10.png" alt="Add credit card"/>
				<h3 className="mt-3 font-weight-light">There is no mail!</h3>
			</div>
		)
	};
	
	const tableColumns = [
		{
			title: () => (
				<div className="mail-list-action">
					<div>
						{	hasSelected? 
							<div>
								<Dropdown  overlay={
									<Menu>
										{
											labels.map( elm => (
												<Menu.Item 
													key={`key-${elm}`} 
													onClick={() => {massCategorize(elm, selectedRowKeys)}}
												>
													<Badge color={getLabelColor(elm)}/>
													<span className="text-capitalize">{elm}</span>
												</Menu.Item>
											))
										}
									</Menu>}
								>
									<span className="mail-list-action-icon ml-0" onClick={e => e.preventDefault()}>
										<TagOutlined />
									</span>
								</Dropdown>
								<span className="mail-list-action-icon" onClick={() => {massDeleted(selectedRowKeys)}}>
									<Tooltip title="Delete">
										<DeleteOutlined />
									</Tooltip>
								</span>
								<span className="mail-list-action-icon" onClick={() => {massStar(selectedRowKeys)}}>
									<Tooltip title="Star">
										<StarOutlined />
									</Tooltip>
								</span>
							</div>
							:
							null
						}
					</div>
					<div>
						<Input size="small" placeholder="Search" onChange={e => {search(e)}}/>
					</div>
				</div> 
			),
			colSpan: 4,
			dataIndex: 'name',
			className: 'mail-list-sender',
			render: (_, elm) => (
				<div className="d-flex align-items-center">
					<div 
						onClick={(e) => {
							e.stopPropagation()
							onStarTicked(elm)
						}}
						className={`mail-list-star font-size-md ${elm.starred? 'checked' : 'uncheck'}`}
					>
						{elm.starred? <StarFilled /> : <StarOutlined />}
					</div>
					<div className="d-flex align-items-center">
						<Avatar src={elm.avatar} size={30}/>
						<h4 className="mb-0 ml-2">{elm.name}</h4>
					</div>
				</div>
			),
		},
		{
			title: '',
			colSpan: 0,
			className: 'mail-list-content',
			render: (_, elm) => (
				<div className=" mail-list-content-msg">
					<Badge color={getLabelColor(elm.label)}/>
					<span className="font-weight-semibold text-dark ml-1">{elm.title}</span>
					<span className="mx-2"> - </span>
					<span className="p mb-0">{formatBody(elm.content)}</span>
				</div>
			)
		},
		{
			title: '',
			colSpan: 0,
			className: 'mail-list-date',
			render: (_, elm) => (
				<div>{elm.date}</div>
			)
		},
	];

	const hasSelected = selectedRowKeys.length > 0;

	return (
		<div className="mail-list">
			<Table 
				rowSelection={rowSelection} 
				columns={tableColumns} 
				dataSource={mails} 
				locale={locale}
				onRow={(elm) => {
					return {
						onClick: e => {
							e.preventDefault()
							navigate(`/app/apps/mail/${params.category}/${elm.id}`)
						}
					};
				}}
				rowKey='id'
			/>
		</div>
	)
}

export default MailItem
