# JavaScript 팁과 트릭

**작성일:** 2025-09-26  
**카테고리:** 개발  
**태그:** JavaScript, 팁, 프론트엔드

JavaScript 개발을 할 때 유용한 팁들을 공유해보겠습니다.

## 1. 배열 중복 제거

ES6의 Set을 활용하면 쉽게 중복을 제거할 수 있습니다:

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
```

## 2. 객체 병합

spread 연산자를 사용한 객체 병합:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
```

## 3. 옵셔널 체이닝

안전하게 중첩된 객체 속성에 접근하기:

```javascript
const user = {
    profile: {
        name: 'John'
    }
};

// 안전한 접근
const name = user.profile?.name;
const age = user.profile?.age ?? '미정';
```

이런 작은 팁들이 개발 효율성을 크게 높여줍니다! 💡