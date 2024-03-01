import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const GeneralComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="button" replace />} />
	</Routes>
);

export default GeneralComponents;