import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    users: [
      {
        id: "017193819",
        photo: "/src/assets/images/photouser.jpg",
        usernumber: "990000441",
        userparol: "xama123",
        username: "xamidulla",
        usersurname: "",
        usercountry: "Uzbekiston",
        usercity: "Toshkent",
        usermanzil: "Chilonzor",
        usermail: "dono@mail.ru",
        tovar: [],
        infotovar: [],
        lovetovar: []
      }
    ],
    oneuser:[],
    activeuser: true,
    usernumber: "",
    userviloyat: "",
    username: "",
    usercity: "",
    usersurname: "",
    usermanzil: "",
    usermail: "",
    photo: "",
    userparol:"",
    totalprice:0,
    totalbasketamount:0,
    activemenuprofil:false,
    pc:1,
    search:"",
    commentary:[
      {
        name:'Botir',
        comment:'menga bu mahsulot juda ham yoqdi hammangizga tavsiya etaman',
        sana:'30.04.2021'
      },
      {
        name:'Diyor',
        comment:'Dostonbek tovarlari juda ham yahshi maslahat beraman hammaga',
        sana:'10.04.2025'
      }
    ],
    profilactivated:false,
    movieload:true,
    filterproduct:[]

  }),
  actions: {
    filterproductadd(item){
     this.filterproduct = item

    },
    notify(){
      toast.success("Muvaffaqiyatli qo'shildi!",{
        autoClose:1000,
      });
    },
    notifyError(){
      toast.error("Olib tashlandi",{
        autoClose:1000,
      });
    },
    userExists(tel) {
      if (!Array.isArray(this.users)) {
       
        return false;
      }
      return this.users.some(user => user.usernumber === tel);
    },

    addUser(id, photo, usernumber, userparol, username, usersurname, usercountry, usercity, usermanzil, usermail, tovar, infotovar, lovetovar) {
      if (!Array.isArray(this.users)) {
        this.users = [];
      }
      this.users.push({
        id,
        photo,
        usernumber,
        userparol,
        username,
        usersurname,
        usercountry,
        usercity,
        usermanzil,
        usermail,
        tovar,
        infotovar,
        lovetovar
      });
    },
    addoneuser(item) {
      this.oneuser = item;
    },
    editoneuser(itemnumber, itemviloyat, itemname, itemcity, itemsurname, itemmanzil, itemmail, itemphoto,itemparol) {
      if (this.oneuser) {
        this.oneuser.usernumber = itemnumber;
        this.oneuser.usercountry = itemviloyat;
        this.oneuser.username = itemname;
        this.oneuser.usercity = itemcity;
        this.oneuser.usersurname = itemsurname;
        this.oneuser.usermanzil = itemmanzil;
        this.oneuser.usermail = itemmail;
        if (itemphoto !== "") {
          this.oneuser.photo = itemphoto;
        }
        this.oneuser.userparol = itemparol;
        const index = this.users.findIndex(user => user.id === this.oneuser.id);
        if (index !== -1) {
          this.users[index] = { ...this.users[index], ...this.oneuser };
        }
      }
    },
    activecarT() {
      let token = localStorage.getItem('success');
      this.activeuser = !token;
    },
    edituserone(item) {
      this.usernumber = item.usernumber;
      this.userviloyat = item.usercountry;
      this.username = item.username;
      this.usercity = item.usercity;
      this.usersurname = item.usersurname;
      this.usermanzil = item.usermanzil;
      this.usermail = item.usermail;
      this.userparol = item.userparol;
    },
    addbasket(item) {
      if (this.oneuser && this.oneuser.tovar) {
        const existingItemIndex = this.oneuser.tovar.findIndex(existingItem => existingItem.id === item.id);
        if (existingItemIndex !== -1) {
          const existingItem = this.oneuser.tovar[existingItemIndex];
          existingItem.amount++;

          const numericPrice = parseFloat(existingItem.price.replace(/\s+/g, '').replace(',', '.'));
          existingItem.totalsum = numericPrice * existingItem.amount;
          this.oneuser.tovar[existingItemIndex] = { ...existingItem };

        } else {
          const numericPrice = parseFloat(item.price.replace(/\s+/g, '').replace(',', '.'));
          this.oneuser.tovar.push({ ...item, totalsum: numericPrice * item.amount });
        }

        this.totalproductprice();
        this.totalbasketnumb();
      }

    },
    totalproductprice() {
      let totalSum = 0;

      this.oneuser?.tovar?.forEach((item) => {
        const itemTotalSum = item.totalsum;
        if (typeof itemTotalSum === 'number') {
          totalSum += itemTotalSum;
        }
      });

      this.totalprice = totalSum;
    },
    totalbasketnumb() {
      let totalSum = 0;
      this.oneuser?.tovar.forEach((item) => {
        const itemAmount = item.amount;
        if (typeof itemAmount === 'number') {
          totalSum += itemAmount;
        }
      });

      this.totalbasketamount = totalSum;
    },
    deleteTobasket(id) {
      const productIndex = this.oneuser?.tovar?.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        const productToRemove = this.oneuser?.tovar[productIndex];
        if (productToRemove) {
          this.totalbasketamount -= productToRemove.amount;
          this.totalprice -= productToRemove.totalsum;
        }

        this.oneuser?.tovar?.splice(productIndex, 1);
      }
    },
    pcone(item){
      this.pc = item
    },

    addinfotovar() {
      if (this.oneuser && Array.isArray(this.oneuser.tovar) && Array.isArray(this.oneuser.infotovar)) {
        
        const formatDate = (dateString) => {
          const date = new Date(dateString);
          const hours = date.getUTCHours().toString().padStart(2, '0');
          const minutes = date.getUTCMinutes().toString().padStart(2, '0');
          const day = date.getUTCDate().toString().padStart(2, '0');
          const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
          const year = date.getUTCFullYear();
          return `${hours}:${minutes} ${year}-${month}-${day}`;
        };
    

        const generateUniqueId = () => `order-${Date.now()}`;
    

        const orderInfo = {
          id: generateUniqueId(), 
          timestamp: formatDate(new Date().toISOString()), 
          totalprice: this.totalprice,
          totalbasketamount: this.totalbasketamount,
          pc:this.pc,
          items: [...this.oneuser.tovar] 
        };
    

        this.oneuser.infotovar.push(orderInfo);
    

      } else {

      }
    },
    addlovetovar() {
      if (this.oneuser && Array.isArray(this.oneuser.tovar) && Array.isArray(this.oneuser.lovetovar)) {
 
        const tovarIds = this.oneuser.tovar.map(tovarItem => tovarItem.id);
        const lovetovarIndex = this.oneuser.lovetovar.findIndex(loveItem =>
          loveItem.every(loveItemProduct => tovarIds.includes(loveItemProduct.id))
        );
    
        if (lovetovarIndex === -1) {
          this.notify();
          this.oneuser.lovetovar.push([...this.oneuser.tovar]);

        } else {
          this.notifyError();
          this.oneuser.lovetovar.splice(lovetovarIndex, 1);

        }
      } else {
      
      }
    },


    deleteOrder(orderId) {
      if (this.oneuser && Array.isArray(this.oneuser.infotovar)) {
        this.oneuser.infotovar = this.oneuser.infotovar.filter(order => order.id !== orderId);
      } else {

      }
    },
    scrollTop(){
      window.scrollTo({
        top:0,
      })
    },
    clearLovetovar() {
      if (this.oneuser && Array.isArray(this.oneuser.lovetovar)) {
        this.oneuser.lovetovar = [];
      }
    },
    load(){
      this.movieload = true
    setTimeout(() => {
    this.movieload = false
  }, 5000);
}
    
  },
  persist: true,
});