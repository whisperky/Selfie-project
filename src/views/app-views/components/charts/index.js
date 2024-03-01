import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const ChartsComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="apex-charts" replace />} />
	</Routes>
);

export default ChartsComponents;