const codeWord = document.querySelector('.code__word')
const decodeBtn = document.querySelector('.decode__btn')
const decodeRes = document.querySelector('.decode__res')


let decodeWords = {
   65: 'A',
   66: 'B',
   67: 'C',
   68: 'D',
   69: 'E',
   70: 'F',
   71: 'G',
   72: 'H',
   73: 'I',
   74: 'J',
   75: 'K',
   76: 'L',
   77: 'M',
   78: 'N',
   79: 'O',
   80: 'P',
   81: 'Q',
   82: 'R',
   83: 'S',
   84: 'T',
   85: 'U',
   86: 'V',
   87: 'W',
   88: 'X',
   89: 'Y',
   90: 'Z',
   97: 'a',
   98: 'b',
   99: 'c',
   100: 'd',
   101: 'e',
   102: 'f',
   103: 'g',
   104: 'h',
   105: 'i',
   106: 'j',
   107: 'k',
   108: 'l',
   109: 'm',
   110: 'n',
   111: 'o',
   112: 'p',
   113: 'q',
   114: 'r',
   115: 's',
   116: 't',
   117: 'u',
   118: 'v',
   119: 'w',
   120: 'x',
   121: 'y',
   122: 'z'
};

decodeBtn.addEventListener('mousedown', () => {
   decodeFun(codeWord.value, decodeWords)
})

function decodeFun(input, nums) {
   let splitSub = input.split(' ')
   let result = ''
   for (let i = 0; i < splitSub.length; i++) {
      for (let num in nums) {
         if (splitSub[i] === num) {
            result += nums[num]
            decodeRes.innerHTML = result
         }
      }
   }
}