
import{map} from 'ramda'
import * as assert from 'assert';

interface BinTree {
    root: number;
    left?: BinTree;
    right?: BinTree;
};

interface GBinTree<T> {
    root: T,
    left?: GBinTree<T>;
    right?: GBinTree<T>;
};

let valOfPreeNodes = [];
let valOfInNodes = [];
let valOfPostNodes = [];
let valOfGPreeNodes = [];
let valOfGInNodes = [];
let valOfGPostNodes = [];
let x = 0;
let y = 0;
let z = 0;
let x1 = 0;
let y1 = 0;
let z1 = 0;

//--------------------------------------------------Q2.1.1----------------------------------------------------------

const TreePreArray = function(t:BinTree): number[]{

    if(!t)
        return [];

        return [t.root].concat(TreePreArray(t.left)).concat(TreePreArray(t.right));

}

//--------------------------------------------------Q2.1.2----------------------------------------------------------

const TreeInArray = function(t:BinTree){
    if(!t)
        return [];
    
        return TreeInArray(t.left).concat([t.root]).concat(TreeInArray(t.right));
  
    
}


//--------------------------------------------------Q2.1.3----------------------------------------------------------

const TreePostArray = function(t:BinTree){
    if(!t)
        return [];
    
        return TreePostArray(t.left).concat(TreePostArray(t.right)).concat([t.root])
    }


//--------------------------------------------------Q2.1.4----------------------------------------------------------

const GBinTreePreArray = function<T>(t:GBinTree<T>){
    
    if(!t)
    return [];
    
    return [t.root].concat(GBinTreePreArray(t.left)).concat(GBinTreePreArray(t.right));
}

//--------------------------------------------------Q2.1.5----------------------------------------------------------

const GBinTreeInArray = function<T>(t:GBinTree<T>){
   
    if(!t)
    return [];

    return GBinTreeInArray(t.left).concat([t.root]).concat(GBinTreeInArray(t.right));
}



//--------------------------------------------------Q2.1.6----------------------------------------------------------

const GBinTreePostArray = function<T>(t:GBinTree<T>){
    
      
    if(!t)
    return [];

    return GBinTreePostArray(t.left).concat(GBinTreePostArray(t.right)).concat([t.root])
}


//--------------------------------------------------Q2.2.1----------------------------------------------------------

const KSubsets = function<T>(A: T[],k: number): T[][]{
    function concatingArr(i:number, smallArr: T[]): T[][]{
        if(smallArr.length === k) //checking if the size of the array is equal to k - STOP
            return [smallArr];
        if( i === A.length) 
            return [];
        return concatingArr(i+1,smallArr.concat([A[i]])).concat(concatingArr(i+1,smallArr));
    }
    return concatingArr(0,[]);
    
}
 

//--------------------------------------------------Q2.2.2----------------------------------------------------------

const AllSubsets = function<T>(A: T[]): T[][]{
    
      let returnArr = [];
      let auxArr = [];
      for(let i = 0 ; i <= A.length ; i++){      
            auxArr = KSubsets(A,i);
          for( let j = 0 ; j < auxArr.length ; j++ )
           returnArr.push(auxArr[j]);
          }
          
      return returnArr;
    }
//--------------------------------------------------Q2.3.1----------------------------------------------------------
    
       const flatmap=function<T1,T2>(f,arr){
        let result=[]
        let temp=[]
        let arr_t=[]
        let counter=0
        for(let i=0; i<arr.length ;i++){
                temp[i]=f(arr[i])
         }
       for(let k=0;k < temp.length;k++){
                arr_t=temp[k]
                for(let j=0;j<arr_t.length;j++){
                    result[counter]=arr_t[j]
                    counter++    
                }
               }
            
            return result
        }    
    
        
    //--------------------------------------------------Q2.3.2----------------------------------------------------------
    interface boxarts{
        width:number,
        height:number,
        url:string
    }
    
    interface video {
        id:number;
        title:string;
        boxarts:boxarts[];
        url:string;
        rating:number;
        bookmark: {id:number, time:number}[];
    }
    
    interface bookmark {
        id:number,
        time:number
    }
    
    interface movieList{
        name:string,
        videos:video[]
    }
    interface movieList{
        name:string,
        videos: video[]
    }
    
    interface ans{
        id:string,
        title:string,
        boxarts:boxarts[]
    }
    
     type BoxArtsFunc = (movies: movieList[]) => ans[]  //a function type
     const getBoxArts:BoxArtsFunc = (movies) => { 
         if(movies==[]) //if empty return an empty array
             return []
        else 
         return flatmap<movieList,video>((x) => x.videos,movies).map((x) => 
         <ans>{id:x.id , title:x.title , boxarts:x.boxarts.filter((b:boxarts) =>
                 b.width==150 && b.height==200).reduce((acc ,curr) => curr.url ,{})
            }
        )      
     } 
    
    let movieLists1 = [
        {
            name: "Instant Queue",
            videos : [
                {
                    "id": 123,
                    "title": "movie1",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ]
    
    let movieLists2 = [
    
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ]
    
    //----------------------------vars:---------------------------------

    let movieLists3 = [
        {
            name: "Instant Queue",
            videos : [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
    
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ]
    //----------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------TEST----------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------

    let Tree = {
    root:1,
    left: {root: 2,
       left: { root: 4},
       right: { root: 5}
    },
    right: {root: 3,}
};

let stringTree = { root:'1',
    left: { root: '2',
       left: { root: '4'},
       right: { root: '5'}
    },
    right: { root: '3',}
};

let emptyTree = undefined 
                

let oneNodeTree = { root: 1
                  };

let twoNodeTree = { root : 1,
                    left: { root: 2}
                  };

//--------------------------------------------TreePreArray-------------------------------------------------------
assert.deepStrictEqual(TreePreArray(Tree), [1,2,4,5,3]);
assert.deepStrictEqual(TreePreArray(emptyTree), []);
assert.deepStrictEqual(TreePreArray(oneNodeTree), [1]);
assert.deepStrictEqual(TreePreArray(twoNodeTree), [1,2]);

//--------------------------------------------TreeInArray-------------------------------------------------------
assert.deepStrictEqual(TreeInArray(Tree), [4,2,5,1,3]);
assert.deepStrictEqual(TreeInArray(emptyTree), []);
assert.deepStrictEqual(TreeInArray(oneNodeTree), [1]);
assert.deepStrictEqual(TreeInArray(twoNodeTree), [2,1]);

//--------------------------------------------TreePostArray-------------------------------------------------------

assert.deepStrictEqual(TreePostArray(Tree), [4,5,2,3,1]);
assert.deepStrictEqual(TreePostArray(emptyTree), []);
assert.deepStrictEqual(TreePostArray(oneNodeTree), [1]);
assert.deepStrictEqual(TreePostArray(twoNodeTree), [2,1]);

//--------------------------------------------GBinTreePreArray---------------------------------------------------

assert.deepStrictEqual(GBinTreePreArray(stringTree), ['1','2','4','5','3']);
assert.deepStrictEqual(GBinTreePreArray(emptyTree), []);
assert.deepStrictEqual(GBinTreePreArray(oneNodeTree), [1]);
assert.deepStrictEqual(GBinTreePreArray(twoNodeTree), [1,2]);

//--------------------------------------------GBinTreeInArray---------------------------------------------------

assert.deepStrictEqual(GBinTreeInArray(stringTree), ['4','2','5','1','3']);
assert.deepStrictEqual(GBinTreeInArray(emptyTree), []);
assert.deepStrictEqual(GBinTreeInArray(oneNodeTree), [1]);
assert.deepStrictEqual(GBinTreeInArray(twoNodeTree), [2,1]);

//--------------------------------------------GBinTreePostArray---------------------------------------------------

assert.deepStrictEqual(GBinTreePostArray(stringTree), ['4','5','2','3','1']);
assert.deepStrictEqual(GBinTreePostArray(emptyTree), []);
assert.deepStrictEqual(GBinTreePostArray(oneNodeTree), [1]);
assert.deepStrictEqual(GBinTreePostArray(twoNodeTree), [2,1]);

//-------------------------------------------------KSubsets-------------------------------------------------------
let arr = [1,2,3,4,5]

assert.ok(JSON.stringify(KSubsets(arr,2)) == JSON.stringify([ [ 1, 2 ], [ 1, 3 ],[ 1, 4 ],[ 1, 5 ],[ 2, 3 ],[ 2, 4 ],[ 2, 5 ],[ 3, 4 ],[ 3, 5 ],[ 4, 5 ] ]), "Error");
assert.ok(JSON.stringify(KSubsets(arr,1)) == JSON.stringify([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]), "Error");
assert.ok(JSON.stringify(KSubsets(arr,0)) == JSON.stringify([ [] ]), "Error");

//-------------------------------------------------AllSubsets------------------------------------------------------

function f1(arr){
    return arr[0]
}
function f2(arr){
    return arr[1]        
}
function f3(arr){
    return arr[0]+1
}
let array1=[[[1,2],[3,4]],[[5,6],[7,8]]]
let array2=[["1","2"]]
let array3=[]

assert.ok(JSON.stringify(flatmap(f1, array1)) == JSON.stringify([ 1, 2, 5, 6 ]))
assert.ok(JSON.stringify(flatmap(f2, array2)) == JSON.stringify([ '2' ]))
assert.ok(JSON.stringify(flatmap(f3, array3)) == JSON.stringify([]))

//-------------------------------------------------BoxArts------------------------------------------------------

assert.ok(JSON.stringify(getBoxArts(movieLists1)) == JSON.stringify([ { id: 123,
    title: 'movie1',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
  { id: 65432445,
    title: 'The Chamber',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
  { id: 675465,
    title: 'Fracture',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' } ]), "Errorr");

assert.ok(JSON.stringify(getBoxArts(movieLists2)) == JSON.stringify([ { id: 65432445,
    title: 'The Chamber',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
  { id: 675465,
    title: 'Fracture',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' } ]), "Error");

assert.ok(JSON.stringify(getBoxArts(movieLists3)) == JSON.stringify([ { id: 70111470,
    title: 'Die Hard',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
  { id: 654356453,
    title: 'Bad Boys',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
  { id: 65432445,
    title: 'The Chamber',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
  { id: 675465,
    title: 'Fracture',
    boxarts: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' } ]), "Error");
