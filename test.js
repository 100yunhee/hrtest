// 문제 데이터
var testNum = [
	{
    "title": "문제1번",
    "description": "문제 내용",
    "A": "1283120",
    "B": "239478273"
  },
	{
    "title": "문제2번",
    "description": "문제 내용",
    "A": "234",
    "B": "433443"
  },
	{
    "title": "문제3번",
    "description": "문제 내용",
    "A": "32234",
    "B": "87"
  },
	{
    "title": "문제4번",
    "description": "문제 내용",
    "A": "6756",
    "B": "45yhfgb"
  },
	{
    "title": "문제5번",
    "description": "문제 내용",
    "A": "342s5",
    "B": "fgnfgc"
  },
	{
    "title": "문제6번",
    "description": "문제 내용",
    "A": "dsgf",
    "B": "fds"
  },
	{
    "title": "문제7번",
    "description": "문제 내용",
    "A": "hsrgwaew",
    "B": "dfgs"
  },
	{
    "title": "문제8번",
    "description": "문제 내용",
    "A": "sergser",
    "B": "sger"
  },
	{
    "title": "문제9번",
    "description": "문제 내용",
    "A": "sergrvxd",
    "B": "ik"
  }
];

// 결과 데이터
var result = {
  "case1": {
    "title": "s,,,t,,,,,,a,,y,,,,",
    "explain": "s,,,t,,,,,,a,,y,,,,"
  },
  "case2": {
    "title": "당신은 지금의 직업에서 행복할 수 있어요",
    "explain": "논리적인 당신은 지금의 직업에서 행복할 수 있어요"
  },
  "case3": {
    "title": "HRer와 원활한 공감이 가능한 편",
    "explain": "HRer 원활한 공감이 가능한 편"
  },
  "case4": {
    "title": "이미 언제든 HRer 될 준비가 되어벌임",
    "explain": "이미 언제든 HRer 될 준비가 되어벌임"
  },
  "case5": {
    "title": "엥 이미 HRer 아닌가요?",
    "explain": "엥 이미 HRer 아닌가요?"
  }
};


var i = 0; // 현재 문제

// HTML selectors
var $score = document.querySelector('#score');
var $main = document.querySelector('#main');
var $test = document.querySelector('#test');
var $result = document.querySelector('#result');
var $number = document.querySelector('#number');
var $progress = document.querySelector('#progress');
var $title = document.querySelector('#title');
var $desc = document.querySelector('#description');
var $optionA = document.querySelector('#A');
var $optionB = document.querySelector('#B');
var $myResult = document.querySelector('#myresult');
var $explain = document.querySelector('#explain');
var $startBtn = document.querySelector('#startbutton');
var $retryBtn = document.querySelector('#retrybutton');

// GO! 하면 불리는 함수(시작하기)
var testStart = function(){
	next();
  $main.style.display = "none";
  $test.style.display = "block";
};

// 다시하기하면 불리는 함수
var retry = function(){
	$result.style.display = "none";
  $main.style.display = "block";

	i = 0;
	$score.value = 0;
}

// 결과 페이지 아닌 next
var commonCase = function() {
	var indexForText = i + 1;
	$number.innerHTML = indexForText + '/' + testNum.length;
	$progress.style.width = (indexForText / testNum.length) * 100 + '%';
	$title.innerHTML = testNum[i].title;
	$desc.innerHTML = testNum[i].description;
	$optionA.innerHTML = testNum[i].A;
	$optionB.innerHTML = testNum[i].B;
	i++;
}

// 결과 페이지 보여주기 위한 next
var resultCase = function() {
	$test.style.display = "none";
	$result.style.display = "block";

	var caseType = '';
	var score = $score.value;
	if(score < 2){
		caseType = 'case1'
	} else if(score < 4){
		caseType = 'case2'
	} else if(score < 6){
		caseType = 'case3'
	} else if(score < 8){
		caseType = 'case4'
	} else {
		caseType = 'case5'
	}

	$myResult.innerHTML = result[caseType].title;
	$explain.innerHTML = result[caseType].explain;
}

// 다음 문항으로 넘어갈떄 불리는 함수
var next = function(){
	if(i < testNum.length){
		commonCase();
	} else {
		resultCase();
	}
}

// 시작 버튼
$startBtn.addEventListener('click', testStart);
// A안을 선택한 경우
$optionA.addEventListener('click', function(){
		var temp = Number($score.value);
		$score.value = temp + 1;
		next();
	}
);
// B안을 선책한 경우
$optionB.addEventListener('click', function(){
		next();
	}
);
// 다시시작 버튼
$retryBtn.addEventListener('click', retry);
