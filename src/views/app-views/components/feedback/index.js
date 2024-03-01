import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const FeedBackComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="alert" replace />} />
	</Routes>
);

export default FeedBackComponents;