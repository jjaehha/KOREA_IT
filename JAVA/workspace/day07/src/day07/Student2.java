package day07;

class Student3 {
	int math;
	int eng;
	int kor;
	double avg;
	String grade;
	int getTotal() {
		return math+eng+kor;	
	}
}

public class Student2 {
	public static void main(String[] args) {
		Student3 st1 = new Student3();
		Student3 st2 = new Student3();
		Student3 st3 = new Student3();
		st1.math = 20;
		st2.math = 30;
		st3.math = 40;
	}
	
}
