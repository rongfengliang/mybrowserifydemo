const  user  = require("faker");
user.locale = "zh_CN";

let userinfos =[];
for (let index = 0; index < 1; index++) {
    let appuser ={
        randomName: user.name.findName(),
        randomEmail:user.internet.email(),
        randomCard:user.helpers.createCard(),
        randomImage:user.image.imageUrl(),
        randomDbColumn:user.database.column(),
        randomDbColumnType:user.database.type(),
        randomDbColumnengine:user.database.engine(),
        randomUUID:user.random.uuid()

    };
    userinfos.push(appuser);
    console.log(JSON.stringify(userinfos));
}