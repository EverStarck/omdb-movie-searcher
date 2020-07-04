import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  width: 100vw;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #474350;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 2.5rem;
      color: #f8fff4;
      margin-left: 50px;
    }
    form {
      width: 30%;
      margin-right: 50px;
      display: flex;
      height: 35px;
      input {
        width: 80%;
        padding-left: 10px;
        border: 1px solid #474350;
        border-radius: 2px 0 0 2px;
      }
      button {
        width: 20%;
        border: 1px solid #474350;
        border-radius: 0 2px 2px 0;
        color: #000;
        background: #f8fff4;
        font-weight: bold;
        &:hover {
          border: 1px solid #f8fff4;
          color: #fff;
          background: #474350;
        }
      }
    }
    @media screen and (max-width: 950px) {
      form {
        width: 50%;
      }
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      h2 {
          margin-left: 0;
          margin-bottom: 0;
      }
      form {
        width: 100%;
        margin: 15px 0 0 0;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <h2>HOOKED</h2>
        <form>
          <input type="text" placeholder="Movie name"/>
          <button type="submit">Search</button>
        </form>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
