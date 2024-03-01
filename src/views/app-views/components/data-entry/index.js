import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const DataEntryComponents = () => (
	<Routes>
		<Route path="*" element={<Navigate to="auto-complete" replace />} />
	</Routes>
);

export default DataEntryComponents;