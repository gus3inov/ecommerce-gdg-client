import styled from 'styled-components';

export default {
	StyledImageRecord: styled.div`
      display: flex;
      position: relative;
    width: 330px;
    height: 180px;
      
      &:hover {
        button[data-name="file-trigger"] {
          opacity: 1;
          top: 0; 
        }
      }
    `,
	StyledImageRecordImg: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
	StyledFileContainer: styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    `,
	StyledFileContainerInput: styled.input`
         cursor: pointer;
         position: absolute;
         top: 0;
         right: -10px;
         width: calc(100% + 10px);
         height: 100%;
         opacity: 0;
         z-index: 10;
    `,
	StyledFileContainerTrigger: styled.button`
         display: flex;
         justify-content: center;
         align-items: center;
         background: transparent;
         color: #B2AFBB;
         margin-top: 50px;
         transition: 0.32s;
         opacity: 0;
         position: relative;
         top: 10px; 
		 color: #fff;
		 border: none;
   `
};
