import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  /* position: absolute; */
`;
export const MenuBtn = styled.div`
  position: absolute;
  z-index: 100;
  margin: 10px 10px;
`;
export const CloseBtn = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
export const SideBar = styled.div`
  position: relative;
  width: 270px;
  height: 100vh;
  background-color: #f0f8ff;
  transform: translateX(-270px);
  transition: 1000ms;
  z-index: 10;
`;

export const Category = styled.div`
  padding: 10px;
`;
export const CateTitle = styled.h2`
  margin-bottom: 5px;
`;

export const Infra = styled.button`
  border-radius: 15px;
  border: 1px solid black;
  width: 66px;
  height: 30px;
  background-color: white;
  margin-right: 15px;

  &:hover {
    background-color: #756bff;
    color: white;
  }
`;

export const Map = styled.div`
  width: 800px;
  height: 897px;
`;

export const DivArea = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #888;
  border-radius: 3px;
  font-size: 12px;
  top: -5px;
  left: 15px;
  padding: 2px;
`;

export const Search = styled.button`
  border-radius: 20px;
  border: 1px solid black;
  width: 70px;
  height: 34px;
  background-color: white;
  margin-right: 15px;

  position: absolute;
  bottom: 30px;
  right: 20px;
  &:hover {
    background-color: #756bff;
    color: white;
  }
`;

export const WaitBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  display: none;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }
`;
