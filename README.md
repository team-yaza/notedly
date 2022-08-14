<img src="cover.png" width="200" align="right" />

# notedly 📝

## 개요

JavaScript Everywhere에서 MOZI에 쓰이는 기술 스택들을 많이 사용하고 있어서 읽으면서 기록했다.

## 요구 사항

- 사용자는 노트를 작성하고, 작성한 노트를 읽고, 업데이트하고, 삭제할 수 있다.
- 사용자는 다른 사용자가 작성한 메모의 피드를 보고, 다른 사용자가 작성한 개별 메모를 읽을 수는 있지만 업데이트하거나 삭제할 수는 없다.
- 사용자는 계정을 만들고, 로그인하고, 로그아웃 할 수 있다.
- 사용자는 자신의 프로필 정보와 다른 사용자의 공개 프로필 정보를 검색할 수 있다.
- 사용자는 다른 사용자의 메모를 즐겨찾기할 수 있고, 다른 사용자의 즐겨찾기 목록을 검색할 수 있다.

## 서버 배포 (Heroku)

`https://notedlyhyunjin.herokuapp.com/`

```sh
$ heroku git:remote -a <YOUR_HEROKU_APP_NAME>
$ git add .
$ git commit -m "application ready for production"
$ git push heroku main
$ git subtree push --prefix server heroku main //만약 server가 최상위 디렉터리가 아니라면
$ curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"query": "{notes {id}}"}' \
  https://<YOUR_HEROKU_APP_NAME>.herokuapp.com/api
```
