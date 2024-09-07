import { DotLoader } from 'react-spinners';
import styled, { CSSProperties } from 'styled-components';


const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
  background-color: white;
`

const override: CSSProperties = {
    display: "block",
    margin: "auto",
    borderColor: "red"
};

const Loader = () => {

    return (
        <LoaderContainer>
            <DotLoader
                color={'#303030'}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </LoaderContainer>
    )
}

export default Loader;