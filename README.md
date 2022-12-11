# 원티드 프리온보딩 프론트엔드 인턴십 과제

### 1. 사용한 라이브러리
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/postcss-E34F26?style=for-the-badge&logo=postcss&logoColor=black"><img src="https://img.shields.io/badge/axios-671DDF?style=for-the-badge&logo=axios&logoColor=black"><img src="https://img.shields.io/badge/reactrouter-121212?style=for-the-badge&logo=reactrouter&logoColor=black">

### 2. 사용한 계정

- id : test@test
- password: 12345678

### 3. 배포 주소

https://tourmaline-profiterole-65402e.netlify.app/todo

### 4. 구현 기능

- Assignment1 이메일, 비밀번호 유효성 검사기능

  - [x] 이메일 조건: @ 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화
- Assignment2
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동
  - [x] 응답받은 JWT는 로컬 스토리지에 저장

- Assignment3
  - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
  - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 

- Assignment4
  - [x] /todo경로에 접속하면 투두 리스트의 목록표시
  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가
 
- Assignment5 투두 리스트의 수정, 삭제 기능을 구현
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정가능
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제
