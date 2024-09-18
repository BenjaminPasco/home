import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
				<Meta />
				<Links />
			</head>
			<body>
				<h1>Test if new image is picked up</h1>
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
