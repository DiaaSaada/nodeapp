const { EventEmitter } = require('events');


const eventEmitter  =  new EventEmitter();


eventEmitter.on( 'tutorial' , (num1, num2) => {
    console.log('tutoral event fired' +  num1 + num2 );
});


eventEmitter.emit('tutorial', 1,2 );

class Person extends EventEmitter{
    constractor(name){
        //super(),
        this._name =  name ;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name', (lastname)=> {
    console.log('My Name is: '+ pedro.name + ' ' +  lastname);
})

pedro.emit('name' ,  'Smith');