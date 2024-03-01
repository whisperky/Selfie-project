import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LayoutComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="grid" replace />} />
	</Routes>
);

export default LayoutComponents;