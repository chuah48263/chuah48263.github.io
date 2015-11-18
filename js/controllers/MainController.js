'use strict';

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
  var en = {
    'brand': 'chuah48263\'s Personal Page',
    'home': 'Home',
    'about': 'About',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'title': 'A Fullstack Developer',
    'desc': 'Who Made Foolish by Curiosity and Wonders.',
    'aboutMe': 'Chuah Chee Shian (aka Shian)',
    'resume': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I\'m a self-taught web developer and designer, also a Malaysian currently resides in Taiwan. After realizing promisingly that my field of interest is not medicine course which I studied in university, but web development which I engaged in since junior high school, I\'m now back on track as a temporary dropout of NTU. My passion is to use technology-based solutions to help solve real-world challenges as breakthroughs, albeit within simplicity.\n\nCompetencies & Skills:\n\tLanguages & Frameworks: JavaScript, HTML5, CSS3, Sass, jQuery, Bootstrap, AngularJS, Node.js, Express.js, MongoDB, Bash\n\tTools & Expertise: Git, Heroku, Responsive Web Design, Web App, Hybrid App, PhoneGap, Agile, Bower, Npm, Grunt, Yeoman, Cloud9, Travis CI, AJAX, Apiary, Postman, Linux, UNIX, Test Automation, Regex, Google Analytics, Startup\n\tLearning & Practising: ReactJS, Gulp',
    'works': 'Recent Works',
    'contactMe': 'Contact Me',
    'name': 'Chuah Chee Shian',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License.'
  };
  var zh = {
    'brand': 'chuah48263 個人專頁',
    'home': '首頁',
    'about': '關於',
    'portfolio': '作品',
    'contact': '聯絡',
    'title': '全端工程師',
    'desc': '一位對世界充滿好奇的傻蛋。',
    'aboutMe': '蔡奇賢（阿賢）',
    'resume': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是一名自學起家的全端網頁程式設計工程師和設計師，也是一名目前居住於台灣的馬來西亞人。自從非常堅定自己對大學所念的醫學系完全沒興趣以後，我決意從台大休學來從事我從國中就開始學習的網頁程式設計。我特別熱衷於使用現有的最新科技和技術來簡單地解決現實世界所面臨的問題和挑戰，以便達到創新和突破。\n\n能力 & 技術：\n\t語言 & 框架：JavaScript、HTML5、CSS3、jQuery、Bootstrap、AngularJS、Node.js、Express.js、MongoDB、Bash\n\t工具 & 其他：Git、Heroku、Responsive Web Design、Web App、Hybrid App、PhoneGap、Bower、Npm、Agile、Grunt、Yeoman、Cloud9、Travis CI、AJAX、Apiary、Postman、Linux、UNIX、Test Automation、Regex、Google Analytics、Startup\n\t學習 & 練習中：ReactJS、Gulp',
    'works': '最近作品',
    'contactMe': '聯絡我',
    'name': '蔡奇賢',
    'licensePre': '程式碼依 ',
    'licensePost': ' 條款授權。'
  };
  $scope.portfolios = [{
    'src': 'assets/img/3MqnsHC.jpg',
    'href': 'http://pollnomena.herokuapp.com',
    'desc': 'Pollnomena'
  }, {
    'src': 'assets/img/WGx1XQv.jpg',
    'href': 'http://fcc-zipline-build-a-simon-game.bitballoon.com',
    'desc': 'Simon Game'
  }, {
    'src': 'assets/img/60bojJN.jpg',
    'href': 'http://fcc-zipline-stylize-stories-on-camper-news.bitballoon.com',
    'desc': 'FCC Camper News'
  }, {
    'src': 'assets/img/0j4Flsf.jpg',
    'href': 'http://fcc-zipline-show-the-local-weather.bitballoon.com',
    'desc': 'Local Weather App'
  }, {
    'src': 'assets/img/D3Ee2j0.jpg',
    'href': 'http://fcc-zipline-build-a-tic-tac-toe-game.bitballoon.com',
    'desc': 'Tic Tac Toe'
  }, {
    'src': 'assets/img/hZJr81o.jpg',
    'href': 'http://fcc-zipline-build-a-pomodoro-clock.bitballoon.com',
    'desc': 'Pomodoro Clock'
  }, {
    'src': 'assets/img/C5sB0lT.jpg',
    'href': 'http://fcc-zipline-build-a-javascript-calculator.bitballoon.com',
    'desc': 'JavaScript Calculator'
  }, {
    'src': 'assets/img/CvLDLKi.jpg',
    'href': 'http://fcc-zipline-use-the-twitch-tv-json-api.bitballoon.com',
    'desc': 'Twitch.tv'
  }, {
    'src': 'assets/img/5Y6tsoV.jpg',
    'href': 'http://fcc-zipline-build-a-random-quote-machine.bitballoon.com',
    'desc': 'Random Quotes Machine'
      // }, {
      //   'src': 'assets/img/THUP9qh.jpg',
      //   'href': 'http://fcc-zipline-wikipedia-viewer.bitballoon.com',
      //   'desc': 'Wikipedia Viewer'
  }];
  var href = {
    'twitter': 'https://twitter.com/chuah48263',
    'github': 'https://github.com/chuah48263',
    'linkedin': 'https://www.linkedin.com/in/chuah48263',
    'facebook': 'https://www.facebook.com/chuah48263',
    'google+': 'https://plus.google.com/113420689322929422099',
    'freecodecamp': 'http://www.freecodecamp.com/chuah48263',
    'mit': 'https://opensource.org/licenses/MIT'
  };
  $scope.href = function(src) {
    $window.open(href[src], '_blank');
  };
  $scope.lang = function(str) {
    localStorage.visited = true;
    if (str === 'en') {
      localStorage.lang = 'en';
      $scope.isEn = true;
      $scope.isZh = false;
      for (var i in en) {
        $scope[i] = en[i];
      }
    } else if (str === 'zh') {
      localStorage.lang = 'zh';
      $scope.isZh = true;
      $scope.isEn = false;
      for (var j in zh) {
        $scope[j] = zh[j];
      }
    }
  };
  if (localStorage.visited) {
    $scope.lang(localStorage.lang);
  } else {
    var locale = navigator.language.split('-')[0];
    if (locale === 'zh' || locale === 'en') {
      $scope.lang(locale);
    } else {
      $scope.lang('en');
    }
  }
}]);

app.filter('toHtml', function($filter) {
  return function(data) {
    if (!data) return data;
    return data.replace(/\n/g, '<br />').replace(/\t/g,
      '&nbsp;<i class="fa fa-caret-right"></i>&nbsp;');
  };
});

app.directive('newTab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (true) {
        element.attr('target', '_blank');
      }
    }
  };
});
