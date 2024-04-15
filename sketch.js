let rects = []; // 모든 사각형의 정보를 저장할 배열
let maxAttempts = 1000; // 최대 시도 횟수

function setup() {
  createCanvas(windowWidth, windowHeight); // 캔버스를 브라우저 창의 너비와 높이에 맞게 생성
  background(255); // 배경색 설정 (흰색)
}

function draw() {
  let attempts = 0; // 시도 횟수 초기화
  
  while (attempts < maxAttempts) {
    // 새로운 사각형을 생성합니다.
    let newRect = generateRect();
    
    // 모든 사각형과의 충돌을 확인합니다.
    let isOverlap = false;
    for (let i = 0; i < rects.length; i++) {
      if (checkOverlap(newRect, rects[i])) {
        isOverlap = true;
        break;
      }
    }
    
    // 충돌이 없을 때 새로운 사각형을 그리고 배열에 추가합니다.
    if (!isOverlap) {
      fill(255, 0, 0, 64); // 색상을 검정색으로 설정
      stroke(255); // 스트로크 색상을 흰색으로 설정
      strokeWeight(1); // 스트로크 두께를 1로 설정
      rect(newRect.x, newRect.y, newRect.w, newRect.h); // 사각형 그리기
      rects.push(newRect); // 배열에 사각형 정보 추가
      break; // 반복문 종료
    }
    
    attempts++; // 시도 횟수 증가
  }
  
  // 최대 시도 횟수에 도달하면 반복문을 종료합니다.
  if (attempts === maxAttempts) {
    noLoop(); // draw() 함수 호출을 멈춥니다.
  }
}

// 랜덤한 위치와 크기의 사각형을 생성합니다.
function generateRect() {
  let x = random(width); // x 좌표를 랜덤하게 선택
  let y = random(height); // y 좌표를 랜덤하게 선택
  let w = random(20, 80); // 사각형의 너비를 랜덤하게 선택 (최소 20, 최대 80)
  let h = random(20, 80); // 사각형의 높이를 랜덤하게 선택 (최소 20, 최대 80)
  return { x: x, y: y, w: w, h: h };
}

// 두 개의 사각형이 겹치는지 확인합니다.
function checkOverlap(rect1, rect2) {
  if (rect1.x + rect1.w < rect2.x || rect1.x > rect2.x + rect2.w || rect1.y + rect1.h < rect2.y || rect1.y > rect2.y + rect2.h) {
    return false; // 겹치지 않음
  } else {
    return true; // 겹침
  }
}
