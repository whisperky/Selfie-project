import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MapComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="google-map" replace />} />
	</Routes>
);

export default MapComponents;