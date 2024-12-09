import { v4 } from 'uuid';

const REVIEWS_INFO = [
	{
		id: v4(),
		img: './public/assets/images/image-colton.jpg',
		name: 'Colton Smith',
		state: 'Verified Buyer',
		review:
			'“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
	},
	{
		id: v4(),
		img: './public/assets/images/image-irene.jpg',
		name: 'Irene Roberts',
		state: 'Verified Buyer',
		review:
			'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”'
	},
	{
		id: v4(),
		img: './public/assets/images/image-anne.jpg',
		name: 'Anne Wallace',
		state: 'Verified Buyer',
		review:
			'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'
	}
];

export { REVIEWS_INFO };
