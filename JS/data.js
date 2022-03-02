//data module

//fake users generate
//It depends on faker module https://fakerjs.dev
const fakeUsers = (count = 10) => {
    const users = [];
    while(users.length != count){
       users.push(
           {
            name: faker.name.findName(),
            avatar: "./img/avatar.png",
            lastOnline: faker.random.number(60) + " minutes"
            }
       )
    }
    return users;
};