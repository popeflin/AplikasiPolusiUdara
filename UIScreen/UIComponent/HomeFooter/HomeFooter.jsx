import { View } from "react-native";
import {
  StyledContainer,
  StyledValue,
  s,
  StyledLabel,
} from "./HomeFooter.style.js";

export function HomeFooter() {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel></StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel></StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel> km/h</StyledLabel>
        <StyledValue>Wind speed</StyledValue>
      </StyledContainer>
    </View>
  );
}
