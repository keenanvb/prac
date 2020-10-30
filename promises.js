const users = [{
    id: 1,
    name: "k",
    schoolId: 101
}, {
    id: 2,
    name: "keen",
    schoolId: 102
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 80
}, {
    id: 2,
    schoolId: 102,
    grade: 95
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {

        const user = users.find((user) => {
            return user.id === id
        });
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}`);
        }

    })
}

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        const grade = grades.filter((grade) => {
            return grade.schoolId === schoolId
        });
        if (grade.length != 0) {
            resolve(grade);
        } else {
            reject(`Unable to find grade with a id of ${schoolId}`);
        }


    })
}

const getResult = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId)
    }).then((grades) => {
        let avg = 0;

        if (grades.length > 0) {
            avg = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
        }
        console.log(avg);
        return `${user.name} has a ${avg}% in the class`
        //
    })
}

const getResultAgain = async (userId) => {
    const user = await getUser(userId); 
    const grade = await getGrades(user.schoolId);
    let avg = 0;

    if (grades.length > 0) {
        avg = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
    }
    console.log(avg);
    return `${user.name} has a ${avg}% in the class`
}


getResultAgain(1).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

// getUser(2).then((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e)
// });


// getGrades(101).then((grade) => {
//     console.log(grade);
// }).catch((e) => {
//     console.log(e)
// });

// getResult(1).then((grade) => {
//     console.log(grade);
// }).catch((e) => {
//     console.log(e)
// });