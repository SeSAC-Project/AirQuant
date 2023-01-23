# AirQuant

제품소개 및 홍보 웹사이트 제작

### 🔗 배포

[Airquant](https://main.d2tfxbeyfu5as6.amplifyapp.com/)

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

### 📆 개발 기간 & 일정

2022.12.19 ~ 2023.01.25

### 📋 플로우차트

![image](https://user-images.githubusercontent.com/68809452/213997021-f9f40b13-5ac0-4d52-853b-cc7f51c52373.png)

### ✨ 핵심 기능

#### 전체

- header : useState로 상태 변경 시 다른 스타일링 적용
- 라우팅 : plain object router로 최신 버전 및 중첩 라우팅 구현
- 탑버튼 : useState를 사용하여 설정한 scroll 값 위치 시 최상단으로 이동
- 반응형 웹 : 모바일, 태블릿 사이즈에도 대응

#### 제품소개

- Aos Library로 스크롤 애니메이션
- Recharts Library로 데이터 시각화
- iframe으로 Youtube 삽입

#### 적용기술

- swiper Library로 인증서 스와이퍼 슬라이드로 출력
- Props로 데이터 전달받아 Map으로 출력

#### 회사소개

- Aos Library, charts Library 사용
- Button 컴포넌트화하여 관리

#### 적용사례

- Context로 데이터 전역에서 관리
- Navigate로 각 사례를 클릭 시 해당 경로로 이동

#### 고객지원

- **자주하는 질문**

  - useState로 드롭다운 효과 구현

- **공지사항**

  - useState와 slice.map로 페이지 렌더링
  - 상세페이지 : useEffect 사용으로 params 변경 시 페이지네이션 재렌더링

- **고객문의**
  - firebase로 데이터 전송 및 저장
  - 문의창 유효성 검사
  - Google api로 파이퀀트 지도 표시

### 📄 협업 문서

### ✅ 문제 해결

#### `배포 후 firebase와 구글 맵 작동안됨`

- **문제** : 배포 후 firebase로 데이터가 전달안됨 + 구글맵이 제대로 출력안됨
- **해결**
  1. (원인)firebase와 구글맵 라이브러리를 사용하면서 API키 값을 설정한 env 파일을 배포과정에서 읽지 못함.
  2. (해결)aws amplify(배포사이트) 환경변수에 키 값 추가 후, aws amplify console에서 빌드 설정 변경 (->앞에서 추가한 환경변수에 액세스 하기 위해 빌드 명령에 환경변수를 포함하도록 설정을 편집하는 것)
- **참고** : [https://docs.aws.amazon.com/ko_kr/amplify/latest/userguide/environment-variables.html](https://docs.aws.amazon.com/ko_kr/amplify/latest/userguide/environment-variables.html)
- **aws를 선정한 이유**

#### `깃허브`

- **상황** : 처음 팀프로젝트를 하면서 협업툴로 깃허브를 모두 처음 사용하는 상황
- **과정**
  1. 커밋 컨벤션 설정 : 가독성을 높이고 서로간의 코드 리뷰에 도움
  2. git pull & push 시 충돌을 방지하기 위해 작업하는 파일 및 상황 공유
  3. pull 하고, 라이브러리 추가가 있을 경우를 위해 npm start 전 npm install 필수
- **문제** : git pull로 병합사항이 생겨 병합을 했는데 commit 하지 않고 pull request 함
- **해결**
  1. pr 받을 때 review 체크 시 수정사항이 있는 파일은 체크 하지 않고, request changes 선택 (이때 comment에 사유를 입력)
  2. vs code에서 marge 후 commit 하고 ‘$ git push -f origin 브랜치이름’ 입력 시 기존 pr에 추가됨.
- **커밋 메세지 형식**

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

```
Feat(Login): 로그인 유효성 검사 기능 추가
Fix(Dropdown): 드롭다운 열림 중복 현상 수정
```

```
Docs: README.md 기술 스택 항목 추가
Chore: react-router-dom 설치
```

#### `깃허브 pull 충돌 오류]`

- **상황** :
  error : The following untracked working tree files would be overwritten by merge: Please move or remove them before you merge
- **원인** : untracked 되는 파일이 있다는 의미
  git이 관리해주고 있지 않은 상태이므로 tracked 상태가 되도록 변경 필요
- **해결** : 아래의 명령어 순서대로 입력해주기
  git add -A
  git stash // 현재 상태를 임시 저장
  git pull
- **참고** : [[git pull 에러]please move or remove them before you merge](https://carpet-part1.tistory.com/330)

#### `리액트 애니메이션 적용`

- **상황** : 페이지 내에 애니메이션이 없어서 심심하고 정적인 느낌을 주고 있었음
- **원인** : 원하는 리액트 애니메이션을 넣으려고 자료조사를 해보니, 원하는 애니메이션이 없었음
- **해결** : Aos (Animate on Scroll) Library를 발견하여 fade, flip, zoom 등 우리가 원하는 다양한 리액트 애니메이션을 사용 가능하게 됨.
- **참고** : [AOS](https://michalsnik.github.io/aos/)

#### `스와이퍼 화살표 기기별 위치`

- **상황** : Swiper Library 사용 중, Swiper의 화살표 위치가 기기마다 각각 다른 문제가 발생
- **원인** : 기기의 화면의 너비 높이가 각각 달랐고, 코드 내에서 %단위로 너비, 높이를 맞추려고 해서 문제가 생김
- **해결** : 기기마다 차이가 있는 % 단위 대신 px 단위를 적용하여 문제 해결함
