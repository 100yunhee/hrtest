// 문제 데이터
var testNum = [
	{
    "title": "1",
    "description": "지원자 외모가 면접이나 채용 결과에 영향을 끼친다는 말에",
    "A": "동의하는 편이야",
    "B": "전혀 동의하지 않아",
		"answer": "A"
  },
	{
    "title": "2",
    "description": "현재 한국 사회에서 남성은 여성보다 취업하기 쉽다는 의견에",
  	"A": "동의해",
		"B": "hmm,,, 보통인 것 같아",
		"answer": "B"
  },
	{
    "title": "3",
    "description": "우리 회사 조직 문화와는 안 맞지만 뛰어난 인재가 있다면",
    "A": "채용할래",
    "B": "채용 안 할 거야",
		"answer": "B"
  },
	{
    "title": "4",
    "description": "둘 중의 하나만 골라야 한다면, 회사에서 이런 사람이 더 낫지",
    "A": "분위기메이커에 근면성실하고 착한 일못러",
    "B": "성격파탄 근태엉망인 똑똑한 일잘러",
		"answer": "A"
  },
	{
    "title": "5",
    "description": "리모트 워크는 '여기'에 더 가깝다고 생각해",
    "A": "복지 제도의 하나야",
    "B": "일하는 방법, 문화의 하나야",
		"answer": "B"
  },
	{
    "title": "6",
    "description": "앞으로 조직 문화에서 가장 중요해질 키워드는 이걸 거야",
    "A": "평등함",
    "B": "자율성",
		"answer": "B"
  },
	{
    "title": "7",
    "description": "지원자와 커뮤니케이션하다 다른 지원자 이름을 썼다! 어쩌지",
    "A": "그냥 잊어버릴래",
    "B": "인지 즉시 사과하고 정정할 거야",
		"answer": "B"
  },
	{
    "title": "8",
    "description": "근속 연수가 긴 회사의 특징은 이것일 것 같아",
    "A": "능력 좋은 동료가 많음!",
    "B": "회사 문화(분위기)가 좋음!",
		"answer": "B"
  },
	{
    "title": "9",
    "description": "인사팀(인사담당자)은 여기에 더 가깝지 않을까?",
    "A": "사측",
    "B": "노동자측",
		"answer": "A"
  }
];

// 결과 데이터
var result = {
  "case1": {
    "title": "s,,,t,,,,,,a,,y,,,,",
    "explain": "s,,,t,,,,,,a,,y,,,,",
		"imageUrl": "https://placeimg.com/200/100/any"
  },
  "case2": {
    "title": "당신은 지금의 직업에서 행복할 수 있어요",
    "explain": "논리적인 당신은 지금의 직업에서 행복할 수 있어요",
		"imageUrl": "https://placeimg.com/200/100/any/grayscale",
  },
  "case3": {
    "title": "HRer와 원활한 공감이 가능한 편",
    "explain": "HRer 원활한 공감이 가능한 편",
		"imageUrl": "https://placeimg.com/200/100/any/sepia",
  },
  "case4": {
    "title": "이미 언제든 HRer 될 준비가 되어벌임",
    "explain": "이미 언제든 HRer 될 준비가 되어벌임",
		"imageUrl": "https://placeimg.com/200/100/any/people",
  },
  "case5": {
    "title": "엥 이미 HRer 아닌가요?",
    "explain": "엥 이미 HRer 아닌가요?",
		"imageUrl": "https://placeimg.com/200/100/any/tech",
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
var $resultImg = document.querySelector('#resultimg');

// 알아보기 누르면 불리는 함수(시작하기)
var testStart = function(){
	next();
  $main.style.display = "none";
  $test.style.display = "block";
};

// 다시하기 누르면 불리는 함수
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
	$resultImg.src = result[caseType].imageUrl;
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
		if(testNum[i - 1].answer === "A") {
			var temp = Number($score.value);
			$score.value = temp + 1;
		}
		next();
	}
);
// B안을 선책한 경우
$optionB.addEventListener('click', function(){
		if(testNum[i - 1].answer === "B") {
			var temp = Number($score.value);
			$score.value = temp + 1;
		}
		next();
	}
);
// 다시시작 버튼
$retryBtn.addEventListener('click', retry);
