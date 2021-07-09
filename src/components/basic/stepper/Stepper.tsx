import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styled from 'styled-components';

import Indicator from './Indicator';

interface IProps {
  selectedItem: number;
  children: (ReactChild[] & (boolean | ReactChild | ReactFragment | ReactPortal | null)) | undefined;
}

const StyledCarousel = styled(Carousel)`
  height: 100%;
  & > .carousel-slider {
    height: 100%;
  }
`;

const Stepper = (props: IProps) => {
  const { children, selectedItem } = props;

  return (
    <StyledCarousel
      swipeable={false}
      renderArrowNext={() => null}
      renderArrowPrev={() => null}
      renderIndicator={(e, isSelected) => <Indicator selected={isSelected} />}
      selectedItem={selectedItem}
      showStatus={false}
    >
      {children}
    </StyledCarousel>
  );
};

export default Stepper;
