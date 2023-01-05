import styled from "styled-components";

export const AsideDiv = styled.aside`
  display: none;

  @media (min-width: 900px) {
    width: 300px;
    height: 100vh;
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: fixed;
    left: 0;
    background-color: var(--white100);
    z-index: 11;

    .headerAside {
      margin: 20px 20px;
      color: black;
      display: flex;
      align-items: center;
      font-size: 40px;
      gap: 20px;

      img {
        width: 172px;
        height: 80px;
      }

      div {
        width: 231px;
      }
    }

    .headerAside p {
      font-size: 20px;
      -webkit-text-stroke-width: medium;
    }

    .title {
      font-size: 20px;
      color: black;
      width: 158px;
      display: flex;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin: 0px 20px;
  flex-direction: column;
  gap: 20px;

  .hoverUnderLineAnimation {
    display: inline-block;
    position: relative;
    color: black;
  }

  .hoverUnderLineAnimation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hoverUnderLineAnimation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  a {
    width: 85px;
    color: black;
    font-size: 17px;
    font-weight: 800;
  }
`;

export const AsideFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 6%;
  gap: 20px;
  .socialMedia {
    display: flex;
    gap: 20px;
    margin: 0px 16px;
    font-size: 15px;
  }

  .divBar {
    width: 257px;
    margin: 0px 20px;
    height: 2px;
    background-color: #cac8c8;
    padding: 0px 14px;
  }

  .divContact {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;
