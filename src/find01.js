//Nombres de empleados que empiezan por la R
db.employees.find({
	firstname:{$regex:/^R/}
})

//Nombres de empleados que NO empiezan por la M
db.employees.find({
	firstname:{$not:/^M/}
})

//Apellidos de empleados que empiezan por la R sin importar si es mayus o minus.
db.employees.find({
	lastname:{$regex:/^r/, $options:"i"}
})

//También se puede hacer de la siguiente manera
db.employees.find({
	lastname:{$regex:/^r/i}
})

//Empleados con un correo gmail. El '.' indica que hay un carácter cualquiera, y el '*' indica que hay un grupo de carácteres a continuación del 'gmail', el cuál sería el .com.
db.employees.find({
	email:{$regex:/.gmail*/}
})

//Muestra los empleados que llevan más de 500 días yendo a trabajar
db.employees.find({
	checkin:{$gt:500}
})

//Muestra los empleados que llevan más de 500 y menos de 1000 días yendo a trabajar
db.employees.find({
	checkin:{$gt:500,$lt:1000}
})

//Muestra los empleados que llevan más de 500 o menos de 2000 días yendo a trabajar
db.employees.find({
	$or:[{checkin:{$gt:500,$lt:1000}}]
})

//Muestra los empleados que llevan menos de 120 (incluyendo el 120) días yendo a trabajar
db.employees.find({
	checkin:{$lte:120}
}).pretty()

//Se haría lo mismo con $gte para mostra el valor mayor o igual a este.
//Muestra el numero de empleados que no han nacido en esa fecha
db.employees.find({ 
	birth:{$nin:['1999-01-28']} 
}).count()

//Muestra las empleadas
db.employees.find({
	gender:{$eq:'F'}
})

//Muestra las empleadas usando un $ne invertido.
db.employees.find({
	gender: {$not:{$ne:'F'}}
})
//Hombres con hotmail.
db.employees.find({
	$nor:[{email:{$regex:/.gmail*/}}, {gender:{$eq:'F'}}]
})
//Muestra los que han hecho checkin x número de veces en especifico.
db.employees.find({
	checkin:{$in:[120,210]}
})
//Lo contrario al de arriba, muestra a los que NO han hecho checkin ese nº de veces.
db.employees.find({
        checkin:{$nin:[120,210]}
})


