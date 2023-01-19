import { ScrollSection } from 'utils';

const ProductBlueBox = () => {
  return (
    <>
      <ScrollSection
        name={'scroll-section'}
        children={
          <div className="scroll-section-text">
            <h1>오염원을 명확하게 측정하고,</h1>
          </div>
        }
      />
      <ScrollSection
        name={'scroll-section-reverse'}
        children={
          <div className="scroll-section-reverse-text">
            <h1>공기 질을 개선하는 방법이 필요</h1>
          </div>
        }
      />
    </>
  );
};

export default ProductBlueBox;
