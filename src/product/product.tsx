import { useEffect, useState } from 'react';
import '../App.css';

type TProduct = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};
function Products() {
	const [list, setList] = useState<TProduct[]>([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setList(json));
	}, []);
	return (
		<table className='productList'>
			<tr>
				<th>id</th>

				<th>title</th>
				<th>category</th>
				<th>image</th>
			</tr>
			{list?.slice(0, 5).map((item) => {
				return (
					<tr>
						<td>{item.id}</td>
						<td>{item.title?.slice(0, 100)}</td>
						<td>{item.category?.slice(0, 50)}</td>
						<td>
							<img src={item.image} width={80} height={80} />
						</td>
					</tr>
				);
			})}
		</table>
	);
}

export default Products;
