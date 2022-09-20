import styled from 'styled-components';

export const FormContainer = styled.div.attrs(() => ({
  className: 'md:flex flex-row justify-center bg-slate-100 py-10',
}))``;

export const FieldContainer = styled.div.attrs(() => ({
  className: 'md:mr-5 py-2 px-4',
}))``;

export const SubmitButton = styled.button.attrs(() => ({
  className:
    'hover:animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
}))``;
