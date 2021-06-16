// 문제 데이터
var testNum = [
	{
    "title": "1",
    "description": "'지원자 외모가 면접이나 채용 결과에 영향을 끼친다'는 말에",
    "A": "동의하는 편이야",
    "B": "전혀 동의하지 않아",
		"answer": "A"
  },
	{
    "title": "2",
    "description": "'현재 한국 사회에서 남성은 여성보다 취업하기 쉽다'는 의견에",
  	"A": "동의해",
		"B": "hmm,,, 보통인 것 같아",
		"answer": "B"
  },
	{
    "title": "3",
    "description": "우리 회사 조직 문화와는 안 맞지만 엄청나게 뛰어난 인재가 있다면?",
    "A": "채용할래",
    "B": "채용 안 할 거야",
		"answer": "B"
  },
	{
    "title": "4",
    "description": "둘 중의 하나만 골라야 한다면, 회사에선 이런 사람이 더 낫지",
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
    "explain": "인사담당자들의 주류 의견과 다르게 생각하는군! 인사담당자들과 하나도 똑같이 생각하지 않거나 한 개 정도 생각이 일치했어. </br>참고로 이 설문을 응답한 인사담당자 중에는 1~200명 규모 / IT·정보통신 산업군의 인사담당자가 가장 많아. </br>지금 직업에 머무르는 게 좋을 것 같은데, 혹시 어떤 일 하고 있어? 인사 업무를 하고 있다면,, 남들과는 다른 특별한 문화를 만들 수 있을 것 같아 (〃･ิ‿･ิ)",
		"imageUrl": "./img/result-c1.png"
  },
  "case2": {
    "title": "지금의 자리에서 행복을 찾아보자",
    "explain": "인사담당자들과 꽤 다른 입장을 보였어. 9개 질문 중 최대 3개의 질문에만 인사담당자들과 공감했거든. 지금 하는 일에 집중하면 좋겠다! </br>참고로 이 설문을 응답한 인사담당자 중에는 1~200명 규모 / IT·정보통신 산업군의 인사담당자가 가장 많아. 인사담당자랑 이야기할 때는 의견 충돌을 쪼금 대비해봐도 좋을 것 같아! 물론 이 말에 근거는 없어,, 미안해 σ(^○^)",
		"imageUrl": "./img/result-c2.jpeg",
  },
  "case3": {
    "title": "인사담당자와 원활한 공감이 가능한 편",
    "explain": "오! 인사담당자들과 꽤 비슷하게 사고하네! 반 정도의 질문에 인사담당자들의 주류 의견과 똑같이 응답했어. </br>참고로 이 설문을 응답한 인사담당자 중에는 1~200명 규모 / IT·정보통신 산업군의 인사담당자가 가장 많아. </br>인사담당자로 일하게 된다면 아무 말이나 해도 일단 반은 먹힐 것 같아. 근거는 없으니 실천하면 안 돼ヽ(°□° )ノ",
		"imageUrl": "./img/result-c3.jpg",
  },
  "case4": {
    "title": "언제든 인사담당자가 될 수 있을 듯",
    "explain": "언제든 인사담당자로 변신할 수 있겠어! 반 이상의 질문에 인사담당자들과 똑같이 응답했어. </br>이 설문을 응답한 인사담당자 중에는 1~200명 규모 / IT·정보통신 산업군의 인사담당자가 가장 많아. 이 규모의 인사담당자들과 한 번 이야기해봐! 서로 고개를 끄덕이는 일이 꽤 있을 것 같아. </br>but,,, 아닐 수도 있으니까 주의해달라구 |･ω･｀)",
		"imageUrl": "./img/result-c4.gif",
  },
  "case5": {
    "title": "엥 이미 인사담당자 아닌가요?",
    "explain": "KTX타고 지나가면서 봐도 이미 인사담당자 같은데? 인사담당자들과 생각이 90% 이상 똑같아! </br>이 설문을 응답한 인사담당자 중에는 1~200명 규모 / IT·정보통신 산업군의 인사담당자가 가장 많아. 이 규모의 인사담당자로 일한다면 아주 잘해낼 수 있겠어! </br>근거는 없으니 적극적으로 실천하는 건 안 돼! _(:3」∠)_",
		"imageUrl": "./img/result-c5.jpeg",
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
