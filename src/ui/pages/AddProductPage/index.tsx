import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import AppTemplate from '../../templates/AppTemplate';
import withLogout from '../../../hocs/logoutEnhancer';
import { FieldText } from '../../atoms';
import { ImageUpload } from '../../molecules';
import { Layout } from '../../atoms/Layout';

type Props = {
	logout(): void;
	onSubmit(): void;
	handleAddImage(): void;
};

const AddProductPage: React.FunctionComponent<Props> = ({
	logout,
	onSubmit,
	handleAddImage,
}) => (
	<AppTemplate handleLogout={logout} title="Products">
		<Layout
			flow="row"
		>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit }) => (
					<Layout
						flow="column"
						width="500px"
					>
						<div>
							<Field
								name="name"
								component={FieldText}
								type="text"
								label="Name"
							/>
						</div>
						<div>
							<Field
								name="price"
								component={FieldText}
								type="text"
								label="Price"
							/>
						</div>
						<div>
							<ImageUpload
								file={{}}
								onChange={handleAddImage}
							/>
						</div>
						<Layout
							flow="row"
							margin="20px 0 0 0"
						>
							<Button
								type="button"
								onClick={() => handleSubmit()}
								variant="contained"
								color="primary"
							>
								Submit
							</Button>
						</Layout>
					</Layout>
				)}
			/>
		</Layout>
	</AppTemplate>
);

export default withLogout(AddProductPage);
