# AirQuant

제품소개 및 홍보 웹사이트 제작

### 🧑🏻‍💻 팀원 소개

<table>

  <tr align="center">
    <td><a href="https://github.com/samseburn">고석영</a></td>
    <td><a href="https://github.com/HWAYOU">강화영</a></td>
    <td><a href="https://github.com/seeun111">김세은</a></td>
    <td><a href="https://github.com/parkeunye">박은예</a></td>
    <td><a href="https://github.com/YOONJISUYOON">윤지수</a></td>
    <td><a href="https://github.com/yoonhappy2">정서윤</a></td>
    <td><a href="https://github.com/JungJaebin">정재빈</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://user-images.githubusercontent.com/68809452/213860148-bce1e35e-dac9-4128-8a88-e63485709686.png
" width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860182-47d63774-01e9-4d71-b567-8caf13074e1b.png"  width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860177-407142be-1084-47d0-8f3e-1b5aba77a56a.png" width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860080-db20f98c-5b99-4be0-9073-ab6656d91fc6.png" width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860137-e3fcbfb9-36a5-4ec4-bb78-0755a4bfc97a.png" width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860180-f4672749-5449-43fa-96f0-7683dfeb6aa7.png" width="150px"/></td>
    <td><img src="https://user-images.githubusercontent.com/68809452/213860167-a89f26af-1dbe-4e6f-a2ae-27dc4a8d6ce6.png" width="150px"/></td>
  </tr>

  <tr>
  <td>
    <ul>
      <li>팀장</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>팀원</li>
    </ul>
  </td>
  </tr>

</table>

<br />

### ✨ 핵심 기능

### 개발 기간 & 일정

### 플로우차트

### 페이지별 기능

### 협업 문서

### **커밋 메세지 형식**

- 필수 작성 : Subject
- 추가 작성: Body, Footer

```
type(타입): Subject(제목)

body(본문)

footer(꼬리말)
```

**적용 예시**

```
// Subject
Feat: "추가 로그인 함수"

// BODY
로그인 API 개발

// FOOTER
Resolves: #123
Ref: #456
Related to: #48, #45
```

### Type

| 태그이름 | 설명                                                                      |
| -------- | ------------------------------------------------------------------------- |
| Feat     | 새로운 기능을 추가할 경우                                                 |
| Fix      | 버그를 고친 경우                                                          |
| Design   | CSS 등 사용자 UI 디자인 변경                                              |
| Refactor | 프로덕션 코드 리팩토링                                                    |
| Docs     | 문서를 수정한 경우                                                        |
| Chore    | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| Remove   | 파일을 삭제하는 작업만 수행한 경우                                        |

### 유형 설명

**기능**

- Feat: 새로운 기능을 추가할 경우
- Fix: 버그를 고친 경우
- Design: CSS 등 사용자 UI 디자인 변경

```
Feat(Login): 로그인 유효성 검사 기능 추가
Fix(Dropdown): 드롭다운 열림 중복 현상 수정
```

**개선**

- Refactor: 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우

```
Refactor: 게시글 페이지 컴포넌트화
```

**기타**

- Docs: 문서를 수정한 경우(README.md)
- Chore: 빌드 태스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음)
- Rename: 파일 혹은 폴더명을 수정하는 경우
- Remove: 사용하지 않는 파일 혹은 폴더를 삭제하는 경우

```
Docs: README.md 기술 스택 항목 추가
Chore: styled-components 설치
```

### Subject

1. 제목의 처음은 동사 원형으로 시작합니다.

2. 총 글자 수는 50자 이내로 작성합니다.

3. 마지막에 특수문자는 삽입하지 않습니다. 예) 마침표(.), 느낌표(!), 물음표(?)

4. 제목은 **개조식 구문**으로 작성

### Body

1. 본문은 **한 줄 당 72자 내**로 작성

2. 본문 내용은 양에 구애받지 않고 **최대한 상세히 작성**

3. 본문 내용은 **어떻게 변경했는지**보다 **무엇을 변경했는지** 또는 **왜 변경했는지**를 설명

### Footer

- issue tracker ID를 명시하고 싶은 경우에 작성
- 작성 방식
  - `유형: #이슈 번호`
- 유형 종류

  - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
  - Resolves: 이슈를 해결했을 때 사용
  - Ref: 참고할 이슈가 있을 때 사용
  - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
