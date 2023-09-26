(function(){
    const customerImg = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customertext = document.querySelector('#customer-text')
    const btn = document.querySelectorAll('.btn')
    let index = 0;
    const customers=[]
    console.log(btn)

    function Customer(img,name,text){
        this.img = img;
        this.name = name;
        this.text=text;
    }

    function createCustomer(img,name,text){
        let Img=`./img/${img}.jpg`
        let customer = new Customer(Img,name,text)
        customers.push(customer)

    }
    createCustomer(1,'Elsa',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima accusantium animi, aliquid temporibus architecto?")
    createCustomer(2,'Mathew',"marm ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima accusantium animi, aliquid temporibus architecto?")
    createCustomer(3,'john',"jorm ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima accusantium animi, aliquid temporibus architecto?")
    createCustomer(4,'laila',"afafrem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima accusantium animi, aliquid temporibus architecto?")
    btn.forEach(function(button){
        console.log(button)
         button.addEventListener('click',function(e){
            if(button.classList.contains("prevbtn")){
                if(index===0){
                    index = customers.length
                }
                index--
                customerImg.src=customers[index].img
                customerName.textContent = customers[index].name
                customertext.textContent = customers[index].text
            }
            if(button.classList.contains("nextbtn")){
                if(index===customers.length-1){
                    index = -1
                }
                index++
                customerImg.src=customers[index].img
                customerName.textContent = customers[index].name
                customertext.textContent = customers[index].text
            }
            
            
        })
    })
})()