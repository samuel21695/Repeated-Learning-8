/**
 * 타입 선언 방식 때문에 Props 라는 객체는 반드시 Key도, Value도 string이어야'만' 합니다.
 */
type Props = { [key: string]: string };

/**
 * @param styles style 속성에 적용할 스타일 문자열들
 * @returns ";" 이 포함된 스타일 문자열
 * @description
 * 
 * 문자열을 합치는 간단한 함수이므로, 사용성이 그리 높지는 않은 안티패턴이지만
 * 함수사 어떻게 호출되고 사용되어 결국에는 다른 형태로 바뀐다는 것을 익히기 위한 목적으로
 *styleValueMaker 함수를 만들었습니다.
 */
function styleValueMaker(...styles: string[]): string {
  return styles.join('; ');
}
