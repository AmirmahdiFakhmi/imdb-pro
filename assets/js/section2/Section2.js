async function Section2() {
   try {
      let data = await fetch("http://localhost:3000/section2");
      let res = await data.json()
      let section2 = res.map(function (elem) {
         return`
         
         `
      })
      
   } catch (error) {
      
   }
}