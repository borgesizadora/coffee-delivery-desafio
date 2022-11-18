import styled, { css } from 'styled-components'

interface InputProps {
  size: 'small' | 'medium' | 'full'
  error: boolean
}

export const Input = styled.div<InputProps>`
  ${({ theme, size, error }) => css`
    position: relative;
    width: 100%;
    max-width: ${size === 'small' ? '3.75rem' : size === 'medium' && '12.5rem'};
    @media (max-width: 768px) {
      max-width: 100%;
    }
    input {
      width: 100%;
      color: ${theme['base-text']};
      background: ${theme['base-input']};
      border: 1px solid ${({ theme }) => theme['base-button']};
      ${error && `box-shadow: 0 0 0 1px ${theme.danger};`}
      border-radius: 4px;
      padding: 0.75rem;

      ::placeholder {
        color: transparent;
      }
      :focus {
        outline: none;
        box-shadow: 0 0 0 1px ${theme['yellow-dark']};
      }
    }
    label {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.2s;
      font-size: 0.875rem;
      color: ${theme['base-label']};
      width: calc(100% - 0.75rem);
      pointer-events: none;
    }
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.75rem;
      color: ${theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
      transition: all 0.1s;
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      font-size: 0.75rem;
      transform: translate(-0.7rem, -2.3rem);
    }
    input:focus ~ label > span,
    input:not(:placeholder-shown) ~ label > span {
      /* transform: translate(4.5rem, 1.5rem); */
      opacity: 0;
    }
  `}
`
