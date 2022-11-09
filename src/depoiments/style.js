import styled from "styled-components";

export const Container = styled.div`
  display: block;
  max-width: 80rem;
  margin: auto;
  min-height: 100vh;

  .depoimentTittle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Inter";
    font-weight: 900;
    font-size: 40px;
    text-transform: uppercase;
    color: #f5f5f5;
    padding-top: 3rem;
  }

  .mainContainerAboutContainer {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: #f5f5f5;
      border-radius: 4px;
    }
  }
  .containerDepoiments {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100rem;
    gap: 50px;
    min-height: 20rem;
    .boxDepoiment {
      background: #f5f5f5;
      border-radius: 15px;
      min-width: 300px;
      max-width: 500px;
      min-height: 15rem;

      .allContentContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #1e1e1e;
        font-family: "Inter";
        text-align: center;

        min-height: 15rem;
        .depoiment {
          width: 90%;
          font-weight: 700;
          font-size: 20px;
          overflow-wrap: anywhere;
        }
      }

      .name {
        font-weight: 900;
        font-size: 25px;
      }
      .buttonDeleteUser {
        background: #1e1e1e;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
      }
    }
  }

  .putContainer {
    margin-top: 3rem;
    max-width: 80rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .formContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 50px;

      .containerText {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 30px;
          color: #ffffff;
        }
        textArea {
          width: 100%;
          height: 15rem;
          resize: none;
        }
      }
      .buttonDeleteUser {
        background: #f5f5f5;
        color: #1e1e1e;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
      }
    }
  }
`;
