import { uid } from "uid";
import Image from "next/image";

import styled  from "styled-components";

import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100px;
`;

const StyledImage = styled(Image)`
box-shadow: var(--box-shadow-book);
width: 25%;
height: 20%;
` 

export default function ArtPieces({pieces}) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={uid()}>
        <StyledImage
          src={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          alt={piece.name}
        />
        <h2>{piece.name}</h2>
        <h3>{piece.artist}</h3>
      </li>
      ))}
    </ul>
  )
  

}
