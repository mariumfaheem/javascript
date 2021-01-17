class Library{
    constructor(bookName,userName,issue){
       this.bookName=bookName;
       this.userName=userName;
       this.issue=issue;
    }

    getBookList(){
      for (let index = 0; index < this.bookName.length; index++) {
          const element = this.bookName[index];
          console.log(element)
          
      }
        
    }
     issueBook(bookName,userName){
        return `${bookName} is issued to ${userName}  `
     }
     returnBook(bookName,username){
         if(this.issue==true & username==this.userName){
         this.bookName;}
         else{
             return "book is not in list"

         }

     }


}
n1=new Library(["a1","a2"],"Marium",true)
console.log(n1.returnBook("a1","Marium"))