import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
`;

/*


  .empty-message {
    
  }

  .cart-items {
    
  }

  button {
   
  }
}
*/
