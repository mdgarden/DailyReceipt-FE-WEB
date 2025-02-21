import * as S from "./style";

/**
 * SquareBtn component
 *
 * 네모난 버튼 양식입니다. children에 버튼의 텍스트를 넣어줍니다.
 * onClick 이벤트를 받아서 실행합니다.
 *
 * @param {function} onClick - 버튼을 클릭했을 때 실행되는 이벤트
 * @param {React.Component} children - 버튼의 텍스트
 *
 * @returns {React.Component} 네모난 버튼 컴포넌트
 */

export function SquareBtn({ onClick, children, color = "#191919" }) {
  return (
    <S.BtnContainer onClick={onClick} color={color}>
      <span>{children}</span>
    </S.BtnContainer>
  );
}
