import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const DataDisplayComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="avatar" replace />} />
	</Routes>
);

export default DataDisplayComponents;