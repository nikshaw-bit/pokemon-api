import styled from "styled-components";

export const PokemonThumbnailStyle = styled.div`
  .pokemon-card {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5%;
    position: relative;
    display: inline-block;
    background-color: ${(props) => props?.colorType?.[0] || "grey"};
    color: ${(props) => props?.colorType?.[1] || "grey"};
    &__image {
      height: 150px;
      width: 200px;
    }

    &__image img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      width: max-content;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;
      color: black;
    }
  }
`;
