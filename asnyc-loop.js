function loadUsers(userIds, load, done) {
    let users = []
    for (let i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]))
    }
    console.log(users);
    return users;
}
module.exports = loadUsers;