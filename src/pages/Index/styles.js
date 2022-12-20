import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    height: 100vh;
    width: 100%;
    background: url(${props => props.source});
    background-size: cover;
    overflow-x: hidden;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;

    width: 400px;
    height: 500px;
    background-color: var(--primary-background-color);
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    & > .title-login {
        width: 80%;
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 16px;

        & > h3 {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 24px;
            color: var(--primary-color);
        }
    }

    & > .form-control-login {
        width: 80%;
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 16px;

        & > .mui-template-input {
            width: 100%;
            margin-top: 20px;
        }

        & > .btn-login {
            width: 100%;
            height: 50px;
            margin-top: 32px;
        }
    }
`;

