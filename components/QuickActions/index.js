import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onHandleSetOnAll,
  onHandleSetOffAll,
  lightsOn,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={lightsOn === 0}
        type="button"
        onClick={() => {
          onHandleSetOffAll();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={lightsOn === lights.length}
        type="button"
        onClick={() => {
          onHandleSetOnAll();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
