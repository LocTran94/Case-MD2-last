import {Iphone} from "./Product";
import {Samsung} from "./Product";
import {Nokia} from "./Product";
import {Phone} from "./Product";


class QuanLy {

    static listPhone: any [] = []


    static add(phone:Phone ): void {
        QuanLy.listPhone.push(phone)
    }

    static display(): void {
        console.table(this.listPhone)
    }

    static delete(phoneID: number): void {
        for (let i = 0; i < QuanLy.listPhone.length; i++) {
            if (QuanLy.listPhone[i].phoneID === phoneID) {
                QuanLy.listPhone.splice(i, 1)
            }
        }
        QuanLy.display()
    }

    static find(name: string): void {

        let newData: object = QuanLy.listPhone.filter(element => {

                return (element.name === name)
            }
        )
        console.log('Sản phẩm cần tìm :')
        console.table(newData)
    }


    static findBrand(brand: string) {
        let newData: object = QuanLy.listPhone.filter(element => {
                return (element.brand === brand)
            }
        )
        console.log('Các sản phẩm của ' + brand + ':')
        console.table(newData)
    }


    static total(id: string) {
        let arr: string [] = id.split(',')
        let tong1: Phone [] = []


        for (let i = 0; i < QuanLy.listPhone.length; i++) {

            for (let j = 0; j < arr.length; j++) {
                if (QuanLy.listPhone[i].phoneID == arr[j]) {
                    return QuanLy.listPhone[i]
                }

            }
            tong1.push(QuanLy.listPhone[i])
        }

        let tong: number = tong1.reduce((a, b) => a + b.price, 0)
        console.log(`Tổng giá trị sản phẩm : ${tong}`)
    }


    static edit(idEdit:number, phone:object) {
        for (let i = 0; i < QuanLy.listPhone.length; i++) {
            if (QuanLy.listPhone[i].phoneID === idEdit) {
                QuanLy.listPhone[i] = phone
            }
        }
        return QuanLy.display()
    }


    static findPriceMax() {

        return Math.max(...QuanLy.listPhone.map((i) => i.price))
    }

    static findMaxPhone() {
        let phone = QuanLy.listPhone.filter(element => element.price === QuanLy.findPriceMax())
        console.table(phone)
    }

    static findPhone(a:number, b:number) {
        let phone = QuanLy.listPhone.filter(element => a < element.price && element.price < b)
        console.table(phone)
    }

}



let readlineSync = require('readline-sync')


function addIphone() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let iphone = new Iphone(phoneID, amount, name, price, date);


    QuanLy.add(iphone);
}

function addSamsung() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let samsung = new Samsung(phoneID, amount, name, price, date);


    QuanLy.add(samsung);
}

function addNokia() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let nokia = new Nokia(phoneID, amount, name, price, date);


    QuanLy.add(nokia);
}



function addMenu(){
    let menu = `---------Bạn muốn thêm cán bộ nào-----------
    1.Iphone
    2.Samsung
    3.Nokia
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addIphone();
                break;
            case 2:
                addSamsung();
                break;
            case 3:
                addNokia();
                break;

        }
    } while (choice !== 0);
}




function main() {
    let menu = `---------WHAT DO YOU WANT-----------
     1.Add
    2.Display
    3.Delete
    4.Find Name
    5.Find Brand
    6.Total Money
    7.Edit
    8.Find The Max Price Phone
    9.Find Phone By Price
    0.Back To The Menu`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                display();
                break;
            case 3:
                deleteProduct();
                break;
            case 4:
                findByName();
                break;
            case 5:
                findBrand();
                break
            case 6:
                sum();
                break;
            case 7:
                editProduct();
                break
            case 8:
                max();
                break;
            case 9:
                findPricePhone();
                break

        }
    }
    while (choice !== 0);


}

main();

function deleteProduct() {
    let idDelete = readlineSync.question('Enter id delete : ')
    QuanLy.delete(idDelete);
}

function display() {
    console.log('------Hiển thị sản phẩm----------')
    QuanLy.display();
}

function findByName() {
    let name: string = readlineSync.question('Enter name need to find : ')
    QuanLy.find(name);
}

function findBrand() {
    let brand = readlineSync.question('Enter brand need to find : ')
    QuanLy.findBrand(brand);
}

function sum() {
    let id = readlineSync.question('Enter product ID need to buy : ')
    QuanLy.total(id)
}

function editProduct() {
    let idEdit = readlineSync.question('Enter id edit : ')
    console.log('-------Form sửa sản phầm----------')
    let name1 = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let phone = new Iphone(phoneID, amount, name1, price,date)
    QuanLy.edit(idEdit, phone);

}

function max() {
    QuanLy.findMaxPhone()
}

function findPricePhone() {
    let a = +readlineSync.question('Enter price1 need to buy : ')
    let b = +readlineSync.question('Enter price2 need to buy : ')
    QuanLy.findPhone(a, b)
}

