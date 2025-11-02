 let regexEmail= /^\w+.*@(gmail|hotmail|yahoo)(\.com|\.ar|\.es|\.edu){1,2}$/;
    let ss= "asda-sd@gmail.com.ar"
     let ss2= "asdasd@hotmail.com"
      let ss3= "asdasd@yahoo.com"
       let ss4= "asdasd@edu.com"
        let ss5= "asdasd@gmail.com.ar"
         let ss6= "asdasd@gmail.com.ar.ed"
         console.log(regexEmail.test(ss))
          console.log(regexEmail.test(ss2))
           console.log(regexEmail.test(ss3))
            console.log(regexEmail.test(ss4))
             console.log(regexEmail.test(ss5))
              console.log(regexEmail.test(ss6))