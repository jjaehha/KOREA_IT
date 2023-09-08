package swap;

class Student{
	int math;
	int kor;
	int eng;
}

public class ArrayTest {
	public static void main(String[] args) {
		Student st1 = new Student();
		Student st2 = st1;
		st2.math = 100;
		st1.eng = 30;
		st1.kor = 89;
		
		System.out.println(st1.math);
	}
}
