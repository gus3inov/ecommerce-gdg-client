import React, { Fragment } from 'react';

export interface InjectedProps {
	fileData?: any;
	error?: boolean;

	handleChangeFile?(e: any): void;

	handleRemoveFile?(): void;
}

export interface ExternalProps {
	file?: any;

	onChange(file: any): void;
}

export interface IState {
	file: any;
	error: boolean;
}

function fileEnhancer<OriginProps>(Component: React.ComponentType<OriginProps & InjectedProps>) {
	type ResultProps = OriginProps & ExternalProps;
	type Component = React.ComponentType;

	return class extends React.Component<ResultProps, IState> {

		static displayName = `fileEnhancer(${ Component.displayName || Component.name })`

		state: IState = {
			file: {},
			error: false,
		}

		componentDidMount() {
			const { file } = this.props;

			this.setState({
				file,
			});
		}

		changeFile = (e: any) => {
			e.preventDefault();

			const { onChange } = this.props;
			const reader = new FileReader();
			const file = e.target.files[0];
			if (e.target.files[0].size >= 10485760) {
				this.setState({
					file: null,
					error: true,
				});

				return;
			}
			reader.onloadend = () => {
				const fileData = {
					file,
					name: file.name,
					size: file.size,
					path: reader.result,
				};
				this.setState({
					file: fileData,
					error: false,
				});

				onChange(fileData);
			};

			reader.readAsDataURL(e.target.files[0]);
		};

		removeFile = () => {
			const { onChange } = this.props;
			this.setState({
				file: {},
			}, () => onChange(null));
		};

		render() {
			const { error, file } = this.state;

			return (
				<Fragment>
					<Component
						{...this.props}
						error={error}
						fileData={file}
						handleChangeFile={this.changeFile}
						handleRemoveFile={this.removeFile}
					/>
				</Fragment>
			);
		}
	};
}

export default fileEnhancer as any;
