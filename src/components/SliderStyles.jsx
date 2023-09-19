import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const SliderRail = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: gray;
  position: relative;
`;

export const SliderFillTrack = styled.div`
  width: ${props => props.fill};
  height: 4px;
  border-radius: 2px;
  background-color: #415eff;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledSlider = styled.input`
  width: 100%;
  height: 12px;
  -webkit-appearance: none;
  background: transparent;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #415eff;
    cursor: pointer;
    transition: background-color 0.3s;
    top: px;
  }

  &:focus {
    outline: none;
  }
`;