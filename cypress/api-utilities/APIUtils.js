class APIUtils{

     makeRandomChars(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    makeRandomNumber(length){

      var result           = '';
      var numbers       = '0123456789';
      var numbersLength = numbers.length;

      for ( var i = 0; i < length; i++ ) {
        result += numbers.charAt(Math.floor(Math.random() * 
        numbersLength));
     }
     return parseInt(result);

    }

  

    
    



   

    



    



   

    


}

export default APIUtils