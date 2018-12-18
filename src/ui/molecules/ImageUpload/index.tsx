import * as React from 'react';
import { fileEnhancer } from '../../../hocs';
import styles from './styles';

const {
	StyledImageRecord,
	StyledImageRecordImg,
	StyledFileContainer,
	StyledFileContainerInput,
	StyledFileContainerTrigger,
} = styles;

type Props = {
	fileData: any,
	file: any,
	handleChangeFile(e: any): any,
};

const ImageUploadComponent: React.FunctionComponent<Props> = ({
								  fileData,
								  file,
								  handleChangeFile,
							  }) => {
	const renderData: any = {};

	if (!fileData.path) {
		renderData.path = file.path;
	} else {
		renderData.path = fileData.path;
	}

	return (
		<StyledImageRecord>
			<StyledImageRecordImg
				src={renderData.path}
			/>
			<StyledFileContainer>
				<StyledFileContainerInput
					type="file"
					accept="image/jpeg, image/png"
					onChange={e => handleChangeFile(e)}
				/>
				<StyledFileContainerTrigger
					data-name="file-trigger"
				>
					Add Image
				</StyledFileContainerTrigger>
			</StyledFileContainer>
		</StyledImageRecord>
	);
};

ImageUploadComponent.defaultProps = {
	file: {},
};

export const ImageUpload = fileEnhancer(ImageUploadComponent);
