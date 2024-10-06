import { Component, inject, OnInit } from '@angular/core';
import { Observable,filter,map,of,from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {
data:any = []
d:any
myobs:any
http = inject(HttpClient)

  //  myobs   = new Observable((observer)=>{
  //      setTimeout(()=>{
  //       observer.next(100)
        
  //      },1000)

  //      setTimeout(()=>{
  //       observer.next(200)
        
  //      },2000)

  //      setTimeout(()=>{
  //       observer.next(400)
        
  //      },2000)
  //      setTimeout(()=>{
  //       observer.next(300)
        
  //      },4000)
       
  //  })

   filterData(){
    this.myobs.subscribe((v)=>{
      console.log(v)
    setTimeout(()=>{
      this.data.push(v)
    },1000)
    })
  // this.d = this.myobs.pipe(filter((val:any)=>{
  //     return  val > 200
  //   }))

    // this.d.subscribe((d)=>{
    //   console.log(d)
    //   this.data.push(d)
    //        })
   }
   
   get(){
    this.data = []
  
 this.myobs.pipe(map((de:any)=>{
return de * 10
 }),filter((v:any)=>{
  return v > 20
 })).subscribe((d)=>{
this.data.push(d)
 })
   }

  getProducts(){
//    this.http.get("http://localhost:3000/products").subscribe((d:any)=>{
//     this.data =   d.filter((ele)=>{
// return ele.price >300
//       })

//       console.log(this.data)
//    },(error)=>{
//    console.log(  Error("Error with Server"))
// alert("Something went wrong")
// console.log(error)
//    })
  
   this.http.get("http://localhost:3000/products").subscribe({
    next:(data)=>{
      console.log(data)
    },
    error:(error)=>{
      console.log(error)
    }
   })
  
  }

  insertProducts(){
    this.http.post("http://localhost:3000/products",{
      "id": 21,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 130
      }
  }).subscribe((res)=>{
console.log(res)
  })
  }

   ngOnInit(): void {
      this.myobs  = from([1,2,3,4,5,6])
    // this.myobs.subscribe((d)=>{
    //   this.data.push(d)
    //        })

    
   }

   

  
}
