import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const OtherComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="anchor" replace />} />
	</Routes>
);

export default OtherComponents;