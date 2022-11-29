import {Iphone} from "./Product";
import {Samsung} from "./Product";
import {Nokia} from "./Product";
import {Phone} from "./Product";


class QuanLy {

    listPhone: Phone [] = []


    add(phone: Phone): void {
        this.listPhone.push(phone)
    }

    display(): void {
        console.table(this.listPhone)
    }

    delete(id: number) {
        for (let i = 0; i < this.listPhone.length; i++) {
            if (this.listPhone[i].phoneID == id) {
                this.listPhone.splice(i, 1)
            }
        }

        return this.listPhone
    }

    find(name: string): void {

        let newData: object = this.listPhone.filter(element => {

                return (element.name === name)
            }
        )
        console.log('Sản phẩm cần tìm :')
        console.table(newData)
    }


    findBrand(brand: string) {
        let newData: object = this.listPhone.filter(element => {
                return (element.brand === brand)
            }
        )
        console.log('Các sản phẩm của ' + brand + ':')
        console.table(newData)
    }


    total(name: string) {
        let arr: string [] = name.split(',')
        let tong1: Phone [] = []


        for (let i = 0; i < this.listPhone.length; i++) {

            for (let j = 0; j < arr.length; j++) {
                if (this.listPhone[i].name == arr[j]) {
                    return this.listPhone[i]
                }

            }
            tong1.push(this.listPhone[i])
        }

        let tong: number = tong1.reduce((a, b) => a + b.price, 0)
        console.log(`Tổng giá trị sản phẩm : ${tong}`)
    }


    edit(id: number, phone: Phone) {
        for (let i = 0; i < this.listPhone.length; i++) {
            if (this.listPhone[i].phoneID == id) {
                this.listPhone[i] = phone
            }
        }
        console.table(this.listPhone)
    }


    findPriceMax() {

        return Math.max(...this.listPhone.map((i) => i.price))
    }

    findMaxPhone() {
        let phone = this.listPhone.filter(element => element.price === this.findPriceMax())
        console.table(phone)
    }

    findPhone(a: number, b: number) {
        let phone = this.listPhone.filter(element => a < element.price && element.price < b)
        console.table(phone)
    }

}


let readlineSync = require('readline-sync')
let quanly = new QuanLy()


function addIphone() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');


    let iphone = new Iphone(phoneID, amount, name, price, date);


    quanly.add(iphone);
}

function addSamsung() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let samsung = new Samsung(phoneID, amount, name, price, date);


    quanly.add(samsung);
}

function addNokia() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let nokia = new Nokia(phoneID, amount, name, price, date);


    quanly.add(nokia);
}


function addMenu() {
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


function editProduct() {
    let menu = `---------Bạn muốn edit sản phẩm nào-----------
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
                editIphone();
                break;
            case 2:
                editSamsung();
                break;
            case 3:
                editNokia()
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
    let id = readlineSync.question('Enter id delete : ')
    quanly.delete(id);
}

function display() {
    console.log('------Hiển thị sản phẩm----------')
    quanly.display();
}

function findByName() {
    let name: string = readlineSync.question('Enter name need to find : ')
    quanly.find(name);
}

function findBrand() {
    let brand = readlineSync.question('Enter brand need to find : ')
    quanly.findBrand(brand);
}

function sum() {
    let id = readlineSync.question('Enter product ID need to buy : ')
    quanly.total(id)
}


function editIphone() {
    let id = +readlineSync.question('Enter id edit : ')
    console.log('-------Form sửa sản phầm----------')
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = +readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let phone: Phone = new Iphone(phoneID, amount, name, price, date)
    quanly.edit(id, phone);

}

function editSamsung() {
    let id = +readlineSync.question('Enter id edit : ')
    console.log('-------Form sửa sản phầm----------')
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = +readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let phone: Phone = new Samsung(phoneID, amount, name, price, date)
    quanly.edit(id, phone);

}


function editNokia() {
    let id = +readlineSync.question('Enter id edit : ')
    console.log('-------Form sửa sản phầm----------')
    let name = readlineSync.question('Enter Name :  ');
    let date = +readlineSync.question('Enter Date :  ');
    let amount = +readlineSync.question('Enter Amount :  ');
    let phoneID = +readlineSync.question('Enter PhoneID :  ');
    let price = +readlineSync.question('Enter Price :  ');

    let phone: Phone = new Nokia(phoneID, amount, name, price, date)
    quanly.edit(id, phone);

}

function max() {
    quanly.findMaxPhone()
}

function findPricePhone() {
    let a = +readlineSync.question('Enter price1 need to buy : ')
    let b = +readlineSync.question('Enter price2 need to buy : ')
    quanly.findPhone(a, b)
}


chú ý : npm install --save readline-sync  và npm install để chạy file không lỗi


