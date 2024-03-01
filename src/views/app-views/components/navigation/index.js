import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const NavigationComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="affix" replace />} />
	</Routes>
);

export default NavigationComponents;