import { DotLoader, MoonLoader } from 'react-spinners';
import styled, { CSSProperties } from 'styled-components';


const override: CSSProperties = {
    display: "block",
    margin:"auto"
};

const Loader = () => {

    return (
            <DotLoader
            className='m-h-auto'
                color={'#303030'}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            // <MoonLoader
            // className='m-h-auto'
            //     color={'#303030'}
            //     loading={true}
            //     cssOverride={override}
            //     size={50}
            //     aria-label="Loading Spinner"
            //     data-testid="loader"
            // />
    )
}

export default Loader;