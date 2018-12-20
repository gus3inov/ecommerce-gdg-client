import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';

import { Product, StringOrNumber } from '../../../@types';
import styles from './styles';

type Props = {
	data: Product;
	classes?: any;
	handleEdit(): void;
	handleDelete(id: StringOrNumber): void;
};

const ProductCardComponent: React.FunctionComponent<Props> = ({
	data,
	handleEdit,
	handleDelete,
	classes,
}) => (
	<Card className={classes.card}>
		<CardMedia
			component="img"
			className={classes.media}
			image={`http://localhost:4000/${data.pictureUrl}`}
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				{data.name}
			</Typography>
			<Typography component="p">
				{data.description}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" color="primary">
				{data.price}
			</Button>
			<Button
				onClick={handleEdit}
				size="small"
				color="primary"
			>
				<Create />
				Edit
			</Button>
			<Button
				onClick={() => handleDelete(data.id)}
				size="small"
				color="primary"
			>
				<Delete />
				Delete
			</Button>
		</CardActions>
	</Card>
);

// @ts-ignore
export const ProductCard = withStyles(styles)(ProductCardComponent);
