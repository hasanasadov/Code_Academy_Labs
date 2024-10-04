let students = [
    {
        id: 1,
        name: "Elmir",
        surname: "Hüseynov",
        age: 22,
        hobbies: ["Hiking", "İce skating", "Tennis", "Karting"],
        student: false,
        teacher: [
            { id: 1, name: "Qurban" },
            { id: 2, name: "Həcər" },
            { id: 3, name: "Murad" },
            { id: 4, name: "Fikrət" },
        ],
        github: { username: "huseynovelmir", password: "elmir123" },
        gender: "male",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 80,
        salaryAZN: 144,
    },
    {
        id: 2,
        name: "Leyla",
        surname: "Ahmadzada",
        age: 24,
        hobbies: ["Hiking", "Painting", "Volleyball", "Gaming"],
        student: false,
        teacher: [
            { id: 1, name: "Süleyman" },
            { id: 2, name: "Həcər" },
        ],
        github: { username: "unervesecod", password: "uNi214" },
        gender: "female",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 98,
        salaryAZN: 18000,
    },
    {
        id: 3,
        name: "Ignat",
        surname: "Kelbiyev",
        age: 18,
        hobbies: ["Football", "Workout"],
        student: true,
        teacher: [
            { id: 1, name: "Süleyman" },
            { id: 2, name: "Həcər" },
            { id: 3, name: "Teymur" },
        ],
        github: { username: "ignattk", password: "ignat123" },
        gender: "male",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 93,
        salaryAZN: 1,
    },
    {
        id: 4,
        name: "Hasanali",
        surname: "Asadov",
        age: 20,
        hobbies: ["Coding", "Painting", "Volleyball", "Gaming"],
        student: true,
        teacher: [
            { id: 1, name: "Süleyman" },
            { id: 2, name: "Həcər" },
            { id: 3, name: "Fatime" },
            { id: 4, name: "Lana" },
        ],
        github: { username: "hasanasadov", password: "password" },
        gender: "male",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85,
        salaryAZN: 0,
    },
    {
        id: 5,
        name: "Nureddin",
        surname: "Rzayev",
        age: 20,
        hobbies: ["Tennis", "Basketboll", "Football", "Swimming", "Coding"],
        student: true,
        teacher: [
            { id: 1, name: "Suleyman" },
            { id: 2, name: "Həcər" },
            { id: 3, name: "Saleh" },
            { id: 4, name: "Orxan" },
        ],
        github: { username: "NuraddinR", password: "salam123" },
        gender: "male",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 80,
        salaryAZN: 5000,
    },
];

// 1. BF/GF-i olan tələbələrin adlarını və username-lərini çapa verin.
console.log("--------------------------------------------------");
let bfGfStudents = students
    .filter((student) => student.boyfriendGirlfriend)
    .forEach((student) =>
        console.log(
            `1. BF/GF-i olan tələbə: ${student.name}, username: ${student.github.username}`
        )
    );

// 2. Yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin.
console.log("--------------------------------------------------");
let studentsAge20 = students
    .filter((student) => student.age === 20)
    .forEach((student) => {
        let teacherNames = student.teacher.map((t) => t.name).join(", ");
        console.log(
            `2. Yaşı 20 olan tələbə: ${student.name}, müəllimlər: ${teacherNames}`
        );
    });

// 3. Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin (1 AZN = 0.59 USD).
console.log("--------------------------------------------------");
students.forEach((student) => {
    let salaryUSD = student.salaryAZN * 0.59;
    console.log(
        `3. ${student.name} təqaüdü dollar ilə: ${salaryUSD.toFixed(2)} USD`
    );
});

// 4. Müəllimlərin baş hərflərini böyük hərflə yazın.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.teacher.forEach((teacher) => {
        teacher.name =
            teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1);
        console.log(`4. Müəllim: ${teacher.name}`);
    });
});

// 5. Şifrəsində rəqəm olmayan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => !/\d/.test(student.github.password))
    .forEach((student) =>
        console.log(`5. Şifrəsində rəqəm olmayan tələbə: ${student.name}`)
    );

// 6. İd-si 3 olan müəllimlərin adını deyin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.teacher
        .filter((teacher) => teacher.id === 3)
        .forEach((teacher) =>
            console.log(`6. İd-si 3 olan müəllim: ${teacher.name}`)
        );
});

// 7. Tələbələrin adlarını və müəllim saylarını çapa verin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    console.log(
        `7. Tələbə: ${student.name}, müəllim sayı: ${student.teacher.length}`
    );
});

// 8. Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın.
console.log("--------------------------------------------------");
let studentCredentials = students.map((student) => ({
    name: student.name,
    username: student.github.username,
    password: student.github.password,
}));
studentCredentials.forEach((cred) => {
    console.log(
        `8. ${cred.name}: username: ${cred.username}, password: ${cred.password}`
    );
});

// 9. Müəllimlərin adlarından sonra "müəllim" sözünü əlavə edin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.teacher.forEach((teacher) => {
        console.log(`9. ${teacher.name} müəllim`);
    });
});

// 10. Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.github.password = "   " + student.github.password;
    console.log(`10. Yeni şifrə: ${student.github.password}`);
});

// 11. Hamının şifrəsinin ilk 4 simvolu görünsün, yerdə qalanlar * ilə əvəz olunsun.
console.log("--------------------------------------------------");
students.forEach((student) => {
    let visiblePart = student.github.password.slice(0, 4);
    let hiddenPart = "*".repeat(student.github.password.length - 4);
    console.log(`11. ${student.name} şifrə: ${visiblePart}${hiddenPart}`);
});

// 12. Hamının soyadının uzunluğu adının uzunluğu qədər olsun.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.surname = student.surname.slice(0, student.name.length);
    console.log(`12. ${student.name} soyadı: ${student.surname}`);
});

// 13. Bütün tələbələrin yaşlarının toplamı nə qədərdir?
console.log("--------------------------------------------------");
let totalAge = students.reduce((sum, student) => sum + student.age, 0);
console.log(`13. Tələbələrin yaşlarının toplamı: ${totalAge}`);

// 14. Bütün tələbələrin cəmi bal ortalaması nə qədərdir?
console.log("--------------------------------------------------");
let avgTotal =
    students.reduce((sum, student) => sum + student.avgPoint, 0) /
    students.length;
console.log(`14. Tələbələrin cəmi bal ortalaması: ${avgTotal.toFixed(2)}`);

// 15. "book" həvəsi olan tələbələrin siyahısını çap edin.
console.log("--------------------------------------------------");
let bookLovers = students.filter((student) => student.hobbies.includes("book"));
bookLovers.forEach((student) =>
    console.log(`15. Book həvəsi olan tələbə: ${student.name}`)
);

// 16. Tələbələrin yaş ortalaması nədir?
console.log("--------------------------------------------------");
let avgAge = totalAge / students.length;
console.log(`16. Tələbələrin yaş ortalaması: ${avgAge.toFixed(2)}`);

// 17. Tələbələrin adlarını tərsinə çevirin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    let reversedName = student.name.split("").reverse().join("");
    console.log(`17. Tələbənin adı tərsinə: ${reversedName}`);
});

// 18. "Gaming" həvəsi olan tələbələrin array-ini yaradın.
console.log("--------------------------------------------------");
let gamingLovers = students.filter((student) =>
    student.hobbies.includes("Gaming")
);
gamingLovers.forEach((student) =>
    console.log(`18. Gaming həvəsi olan tələbə: ${student.name}`)
);

// 19. Bütün tələbələrin hobbiləri olan array yaradın.
console.log("--------------------------------------------------");
let hobbiesArray = students.map((student) => student.hobbies);
hobbiesArray.forEach((hobbies, index) => {
    console.log(`19. ${students[index].name} hobbiləri: ${hobbies.join(", ")}`);
});

// 20. Orta balı 80-dən yüksək olan tələbələri və müəllim adlarını çapa verin.
console.log("--------------------------------------------------");
students
    .filter((student) => student.avgPoint > 80)
    .forEach((student) => {
        let teacherNames = student.teacher.map((t) => t.name).join(", ");
        console.log(`20. ${student.name}, müəllimləri: ${teacherNames}`);
    });

// 21. Gf/Bf olan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.boyfriendGirlfriend)
    .forEach((student) =>
        console.log(`21. BF/GF-i olan tələbə: ${student.name}`)
    );

// 22. Müəllimlərindən biri "Süleyman" olan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) =>
        student.teacher.some((teacher) => teacher.name.includes("Süleyman"))
    )
    .forEach((student) =>
        console.log(`22. Süleyman müəllimi olan tələbə: ${student.name}`)
    );

// 23. Kitab oxumağı hobbi kimi olan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.hobbies.includes("Book"))
    .forEach((student) =>
        console.log(`23. Kitab oxumağı hobbi edən tələbə: ${student.name}`)
    );

// 24. Maaşı 120 AZN-dən çox olan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.salaryAZN > 120)
    .forEach((student) =>
        console.log(`24. Maaşı 120-dən çox olan tələbə: ${student.name}`)
    );

// 25. İmtahandan keçməyən tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.fail)
    .forEach((student) =>
        console.log(`25. İmtahandan keçməyən tələbə: ${student.name}`)
    );

// 26. Tələbə olub maaş alan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.student && student.salaryAZN > 0)
    .forEach((student) => console.log(`26. Maaş alan tələbə: ${student.name}`));

// 27. Şifrəsi 8 simvoldan uzun olan tələbələri tapın.
console.log("--------------------------------------------------");
students
    .filter((student) => student.github.password.length > 8)
    .forEach((student) =>
        console.log(`27. Şifrəsi uzun olan tələbə: ${student.name}`)
    );

// 28. İd-si 5-dən kiçik olan müəllimlərin adlarını çapa verin.
console.log("--------------------------------------------------");
students.forEach((student) => {
    student.teacher
        .filter((teacher) => teacher.id < 5)
        .forEach((teacher) =>
            console.log(`28. İd-si 5-dən kiçik olan müəllim: ${teacher.name}`)
        );
});

// 29. Yaşları 25-dən yuxarı olan tələbələrin adlarını və ballarını çapa verin.
console.log("--------------------------------------------------");
students
    .filter((student) => student.age > 25)
    .forEach((student) =>
        console.log(
            `29. Yaşı 25-dən yuxarı tələbə: ${student.name}, balı: ${student.avgPoint}`
        )
    );

// 30. Tələbələrin hobbiləri arasında "sports" olanların sayını hesablayın.
console.log("--------------------------------------------------");
let sportsHobbyCount = students.reduce(
    (count, student) =>
        count +
        student.hobbies.filter((hobby) => hobby.toLowerCase() === "sports")
            .length,
    0
);
console.log(
    `30. 'Sports' hobbiləri olan tələbələrin sayı: ${sportsHobbyCount}`
);

// 31. Tələbələrin təqaüdlərini dollarla göstərib azalan sıralama ilə çapa verin (1 AZN = 1.7 USD)
console.log("--------------------------------------------------");
let scholarshipsInDollars = students
    .filter((student) => student.salaryAZN > 0)
    .map((student) => ({
        name: student.name,
        scholarshipUSD: (student.salaryAZN / 1.7).toFixed(2),
    }))
    .sort((a, b) => b.scholarshipUSD - a.scholarshipUSD);

scholarshipsInDollars.forEach((student) =>
    console.log(`31. ${student.name}, Təqaüd (USD): $${student.scholarshipUSD}`)
);

// 32. Bütün tələbələrin təqaüdlərini dollarla göstərməklə yanaşı, onların ballarına uyğun azalan sıra ilə sıralayıb çapa verin
let sortedByAvgPoint = students
    .map((student) => ({
        name: student.name,
        avgPoint: student.avgPoint,
        scholarshipUSD: (student.salaryAZN / 1.7).toFixed(2),
    }))
    .sort((a, b) => b.avgPoint - a.avgPoint);

sortedByAvgPoint.forEach((student) =>
    console.log(
        `32. ${student.name}, Bal: ${student.avgPoint}, Təqaüd (USD): $${student.scholarshipUSD}`
    )
);

// 33. Şifrəsində rəqəm və böyük hərf olmayan tələbələri tapın
let noNumberOrUppercase = students.filter(
    (student) =>
        !/[A-Z]/.test(student.github.password) ||
        !/\d/.test(student.github.password)
);
noNumberOrUppercase.forEach((student) =>
    console.log(
        `33. Şifrəsində rəqəm və ya böyük hərf olmayan tələbə: ${student.name}`
    )
);

// 34. Bütün tələbələrin hobbiləri olan array yaradın və hobbiləri artan sırada çap edin
let allHobbies = students.flatMap((student) => student.hobbies).sort();
console.log(`34. Bütün hobbilər: ${allHobbies.join(", ")}`);

// 35. Əgər hobbi siyahısında "Sports" varsa, Tələbənin adını yanına "İdmançı" sözünü qeyd edin
students.forEach((student) => {
    if (student.hobbies.includes("Sports")) {
        console.log(`35. ${student.name}, İdmançı`);
    }
});

// 36. Tələbələrin adlarını, username və şifrələrindən ibarət yeni array yaradın, şifrələrini şifrələyin.
let studentsWithEncryptedPasswords = students.map((student) => {
    let password = student.github.password;
    let encryptedPassword =
        password[0] +
        "*".repeat(password.length - 2) +
        password[password.length - 1];
    return {
        name: student.name,
        username: student.github.username,
        encryptedPassword,
    };
});
studentsWithEncryptedPasswords.forEach((student) =>
    console.log(
        `36. ${student.name}, Username: ${student.username}, Şifrə: ${student.encryptedPassword}`
    )
);

// 37. Müəllimi Süleyman olan tələbələrin avg balını azalan sıra ilə düzün
let suleymanStudents = students
    .filter((student) =>
        student.teacher.some((teacher) => teacher.name === "Süleyman")
    )
    .sort((a, b) => b.avgPoint - a.avgPoint);
suleymanStudents.forEach((student) =>
    console.log(
        `37. Süleyman müəllimi olan tələbə: ${student.name}, Bal: ${student.avgPoint}`
    )
);

// 38. Şifrəsində rəqəm və böyük hərf olmayan tələbələri tapın. "Təhlükəsiz şifrə deyil" yazdırın.
students.forEach((student) => {
    let password = student.github.password;
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        console.log(`38. Təhlükəsiz şifrə deyil: ${student.name}`);
    }
});

// 39. Bütün tələbələrin cəmi bal ortalamasını tapın, amma balı 80-dən az olanları daxil etmədən
let above80Students = students.filter((student) => student.avgPoint >= 80);
let totalAvg =
    above80Students.reduce((sum, student) => sum + student.avgPoint, 0) /
    above80Students.length;
console.log(`39. 80-dən yüksək bal ortalaması: ${totalAvg.toFixed(2)}`);
students
    .filter((student) => student.avgPoint < 80)
    .forEach((student) =>
        console.log(`39. 80-dən az balı olan tələbə: ${student.name}`);
    );

// 40. "Gaming" həvəsi olan tələbələrin array-ini yaradın və onların ortalama yaşlarını hesablayın
let gamingLoverss = students.filter((student) =>
    student.hobbies.includes("Gaming")
);
let avgeAge =
    gamingLoverss.reduce((sum, student) => sum + student.age, 0) /
    gamingLoverss.length;

console.log(
    `40. Gaming həvəsi olan tələbələrin orta yaşı: ${avgeAge.toFixed(2)}`
);
if (avgeAge > 22) {
    gamingLoverss.forEach((student) =>
        console.log(`40. ${student.name} balı: ${student.avgPoint}`)
    );
}
