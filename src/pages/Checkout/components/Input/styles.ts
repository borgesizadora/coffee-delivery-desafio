import styled, { css } from 'styled-components'

interface InputProps {
  size: 'small' | 'medium' | 'full'
}

export const Input = styled.div<InputProps>`
  ${({ theme, size }) => css`
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
    }
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.75rem;
      color: ${theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      transform: translate(-0.7rem, -2.4rem);
    }
  `}
`
