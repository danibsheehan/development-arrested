// app.config(function($stateProvider) {
//     $stateProvider.state('characters', {
//         url: '/characters',
//         controller: 'CharactersCtrl',
//         templateUrl: 'js/characters/characters.html'
//     })
// })

// app.controller('CharactersCtrl', function($scope, CharactersFactory) {

//     CharactersFactory.getCharacters()
//         .then(function(characterArray) {
//             $scope.characterArray = characterArray
//         })
// })

// app.factory('CharactersFactory', function($http) {
//     var CharactersFactory = {};

//     CharactersFactory.getCharacters = function() {
//         return $http.get('/api/quotes')
//             .then(function(response) {
//                 // console.log(quotes.data)
//                 return response.data
//             })
//             .then(function(allQuotes) {
//                 var characterArray = []
//                 for (var i = 0; i < allQuotes.length; i++) {
//                     if (characterArray.indexOf(allQuotes[i].character) < 0) {
//                         characterArray.push(allQuotes[i].character)
//                     }
//                 }
//                 console.log(characterArray.length)
//                 return characterArray
//             })
//     }

//     return CharactersFactory
// })
