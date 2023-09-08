import java.util.Date

fun main(args: Array<String>) {
    var student = Student(20)
    println(student.age)
}

open class Person(var age : Int)

class Student(subAge : Int) : Person(subAge)