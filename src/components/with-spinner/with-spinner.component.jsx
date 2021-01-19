import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// Higher Order Component (HOC)
export const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

// // HOC elaborated
// export const withSpinner = (WrappedComponent) => {
//     // This Component simply returns another component
//     const Spinner = ({ isLoading, ...otherProps }) => {
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer />
//             </SpinnerOverlay>
//         ) : (
//             <WrappedComponent {...otherProps} />
//         );
//     };
//     return Spinner;
// };