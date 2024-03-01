import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import MailItem from './MailItem';
import MailDetail from './MaiDetail';
import MailCompose from './MailCompose';

export const MailContent = () => {
	return (
		<Routes>
			<Route path="compose" element={<MailCompose />} />
			<Route path=":category/:id" element={<MailDetail />} />
			<Route path=":category" element={<MailItem />} />
		</Routes>
	)
}

export default MailContent
