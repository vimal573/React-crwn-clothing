import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-items.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigaate = useNavigate();

  const onNavigateHandler = () => navigaate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imgUrl={imageUrl} />
      <Body>
        <h1>{title}</h1>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
