import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Project = () => (
	<Routes>
		<Route path="*" element={<Navigate to="list" replace />} />
	</Routes>
);

export default Project;