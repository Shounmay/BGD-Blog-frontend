import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Big Estate Network',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
