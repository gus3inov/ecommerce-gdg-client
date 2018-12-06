import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

type FieldParams = {
	input: {
		name: string;
		value: string;
		onChange(): void;
	}
	meta: {
		touched: boolean;
		error: object;
	}
};

const styles: any = {
	root: {
		width: '100%',
	},
};

const FieldTextComponent = ({
					input: { name, onChange, value, ...restInput },
					meta,
					...rest
				}: any) => (
	<TextField
		className={rest.classes.root}
		{...rest}
		name={name}
		helperText={meta.touched ? meta.error : undefined}
		error={meta.error && meta.touched}
		inputProps={restInput}
		onChange={onChange}
		value={value}
	/>
);

export const FieldText: any = withStyles(styles)(FieldTextComponent);
